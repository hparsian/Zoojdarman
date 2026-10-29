/**
 * پررندر متای سئو در زمان بیلد (Build-time SEO prerender)
 *
 * سایت یک SPA است و خزنده‌هایی که JavaScript اجرا نمی‌کنند (واتساپ، اینستاگرام،
 * برخی خزنده‌های موبایلی) فقط HTML اولیه را می‌بینند. این اسکریپت بعد از
 * `vite build` اجرا می‌شود و برای هر مسیر سایت‌مپ یک فایل `index.html` جداگانه
 * می‌سازد که title، توضیحات، canonical، OG/Twitter و JSON-LD همان صفحه را دارد.
 *
 * نتیجه روی هاست استاتیک (Vercel):
 *   - هر URL موجود در سایت‌مپ با HTTP 200 و متای درست سرو می‌شود (نه 404)
 *   - پیش‌نمایش لینک در واتساپ/اینستاگرام برای هر صفحه دقیق است
 *   - مسیرهای نامعتبر همچنان 404 واقعی می‌گیرند
 *
 * منطق متاها در `src/seo.ts` می‌ماند و همین تابع در مرورگر هم اجرا می‌شود؛
 * اینجا فقط همان کد را روی HTML خروجی بیلد اجرا می‌کنیم تا دو منبع حقیقت نداشته باشیم.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const SITE_URL = 'https://zoojdarman.ir';

const shellPath = path.join(distDir, 'index.html');
if (!fs.existsSync(shellPath)) {
  console.error('[prerender] dist/index.html پیدا نشد؛ اول `vite build` اجرا شود.');
  process.exit(1);
}
const shell = fs.readFileSync(shellPath, 'utf8');

/* ---------- 1) فهرست مسیرها: سایت‌مپ + aliasهای روتر ---------- */

const sitemapFile = fs.existsSync(path.join(root, 'public', 'sitemap.xml'))
  ? path.join(root, 'public', 'sitemap.xml')
  : path.join(root, 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapFile, 'utf8');
// توجه: بخش میزبان باید بدون اسلش باشد تا greedy بودن regex مسیر کامل را نگیرد
const sitemapPaths = [...sitemap.matchAll(/<loc>https?:\/\/[^\/<]+(\/[^<]*)<\/loc>/g)].map(
  (m) => m[1] || '/'
);

// مسیرهای جایگزینی که روتر می‌پذیرد ولی در سایت‌مپ نیستند (لینک‌های قدیمی)
const aliasPaths = ['/bio', '/treatment-process', '/assessments', '/tests', '/qa', '/appointment'];

const paths = [...new Set([...sitemapPaths, ...aliasPaths])];

/* ---------- 2) تبدیل مسیر به شیء Route (همان منطق src/App.tsx) ---------- */

function routeForPath(p) {
  if (p === '/') return { type: 'home' };
  if (p === '/articles') return { type: 'articles' };
  if (p.startsWith('/articles/')) return { type: 'article', slug: p.slice('/articles/'.length) };
  if (p === '/services') return { type: 'services' };
  if (p.startsWith('/services/')) return { type: 'service', slug: p.slice('/services/'.length) };
  if (p.startsWith('/tests/')) return { type: 'singleTest', testSlug: p.slice('/tests/'.length) };
  if (p === '/tools' || p === '/assessments' || p === '/tests') return { type: 'tools' };
  if (p === '/topics' || p === '/qa') return { type: 'topics' };
  if (p === '/about' || p === '/bio') return { type: 'about' };
  if (p === '/process' || p === '/treatment-process') return { type: 'process' };
  if (p === '/faq') return { type: 'faq' };
  if (p === '/contact' || p === '/appointment') return { type: 'contact' };
  if (p === '/privacy-policy') return { type: 'privacy' };
  return null;
}

/* ---------- 3) بارگذاری ماژول سئو و داده‌ها با Vite ---------- */

const vite = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
});

try {
  const { applySeo, seoForRoute, registerFaqSchema } = await vite.ssrLoadModule('/src/seo.ts');
  const { getArticleBySlug } = await vite.ssrLoadModule('/src/data/articles.ts');
  const { getServiceBySlug } = await vite.ssrLoadModule('/src/data/services.ts');
  const { getTestBySlug } = await vite.ssrLoadModule('/src/data/testsData.ts');

  /** پرسش‌وپاسخ‌های قابل استفاده برای هر مسیر (در صورت وجود در داده‌ها) */
  function faqsForRoute(route) {
    try {
      if (route.type === 'article') return getArticleBySlug(route.slug)?.faqs;
      if (route.type === 'service') return getServiceBySlug(route.slug)?.faqs;
      if (route.type === 'singleTest') return getTestBySlug(route.testSlug)?.faqs;
    } catch {
      /* داده ناقص نباید بیلد را متوقف کند */
    }
    return undefined;
  }

  let written = 0;
  let skipped = 0;

  for (const p of paths) {
    const route = routeForPath(p);
    if (!route) {
      console.warn(`[prerender] مسیر ناشناخته در سایت‌مپ نادیده گرفته شد: ${p}`);
      skipped++;
      continue;
    }

    const page = seoForRoute(route);

    // مسیرهای بدون محتوا (slug ناموجود) را نمی‌سازیم تا واقعاً 404 بگیرند
    if (page.robots && page.robots.startsWith('noindex')) {
      console.warn(`[prerender] محتوایی برای ${p} یافت نشد → 404 می‌ماند`);
      skipped++;
      continue;
    }

    const dom = new JSDOM(shell, { url: `${SITE_URL}${p}` });
    global.window = dom.window;
    global.document = dom.window.document;

    applySeo(page);

    const faqs = faqsForRoute(route);
    if (faqs && faqs.length > 0) {
      registerFaqSchema(faqs);
    }

    const outFile =
      p === '/'
        ? shellPath
        : path.join(distDir, p.replace(/^\//, ''), 'index.html');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, dom.serialize(), 'utf8');
    written++;

    dom.window.close();
  }

  /* ---------- 4) صفحه 404 با noindex (قرارداد رایج هاست‌های استاتیک) ---------- */
  {
    const dom = new JSDOM(shell, { url: `${SITE_URL}/page-not-found` });
    global.window = dom.window;
    global.document = dom.window.document;
    applySeo(seoForRoute({ type: '404' }));
    fs.writeFileSync(path.join(distDir, '404.html'), dom.serialize(), 'utf8');
    dom.window.close();
    written++;
  }

  /* ---------- 5) اطمینان از وجود sitemap.xml و robots.txt در dist ---------- */
  const sitemapDest = path.join(distDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapDest) && fs.existsSync(sitemapFile)) {
    fs.copyFileSync(sitemapFile, sitemapDest);
  }
  const robotsSrc = fs.existsSync(path.join(root, 'public', 'robots.txt'))
    ? path.join(root, 'public', 'robots.txt')
    : path.join(root, 'robots.txt');
  const robotsDest = path.join(distDir, 'robots.txt');
  if (!fs.existsSync(robotsDest) && fs.existsSync(robotsSrc)) {
    fs.copyFileSync(robotsSrc, robotsDest);
  }

  console.log(`[prerender] ${written} فایل HTML ساخته شد (${skipped} مورد رد شد).`);
} finally {
  await vite.close();
}
