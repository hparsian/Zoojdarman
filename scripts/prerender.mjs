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
const aliasPaths = ['/bio', '/treatment-process', '/assessments', '/tests', '/qa', '/appointment', '/pricing', '/costs', '/tariffs', '/best-couples-therapist', '/best-couples-therapist-tehran-online'];

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
  if (p === '/fees' || p === '/pricing' || p === '/costs' || p === '/tariffs') return { type: 'fees' };
  if (p === '/best-couples-therapist-tehran' || p === '/best-couples-therapist' || p === '/best-couples-therapist-tehran-online') {
    return { type: 'bestTherapist' };
  }
  if (p === '/topics' || p === '/qa') return { type: 'topics' };
  if (p === '/about' || p === '/bio') return { type: 'about' };
  if (p === '/process' || p === '/treatment-process') return { type: 'process' };
  if (p === '/faq') return { type: 'faq' };
  if (p === '/contact' || p === '/appointment') return { type: 'contact' };
  if (p === '/privacy-policy') return { type: 'privacy' };
  if (p === '/videos' || p === '/media' || p === '/aparat' || p === '/youtube') return { type: 'videos' };
  if (p === '/cities' || p === '/centers') return { type: 'cities' };
  if (p.startsWith('/cities/')) return { type: 'city', citySlug: p.slice('/cities/'.length) };
  if (p.startsWith('/city/')) return { type: 'city', citySlug: p.slice('/city/'.length) };
  if (p === '/countries' || p === '/international') return { type: 'countries' };
  if (p.startsWith('/countries/')) return { type: 'country', countrySlug: p.slice('/countries/'.length) };
  if (p.startsWith('/country/')) return { type: 'country', countrySlug: p.slice('/country/'.length) };
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
  const { getCityBySlug } = await vite.ssrLoadModule('/src/data/citiesData.ts');
  const { getCountryBySlug } = await vite.ssrLoadModule('/src/data/countriesData.ts');

  const { articles } = await vite.ssrLoadModule('/src/data/articles.ts');
  const { services } = await vite.ssrLoadModule('/src/data/services.ts');
  const { testsData } = await vite.ssrLoadModule('/src/data/testsData.ts');
  const { CITIES_DATA } = await vite.ssrLoadModule('/src/data/citiesData.ts');
  const { COUNTRIES_DATA } = await vite.ssrLoadModule('/src/data/countriesData.ts');
  const { VIDEOS_DATA } = await vite.ssrLoadModule('/src/data/videosData.ts');
  const { STANDALONE_SEO_CONTENT } = await vite.ssrLoadModule('/src/data/standaloneSeoContent.ts');
  const { mainFaqsList } = await vite.ssrLoadModule('/src/data/faqsData.ts');

  const escapeHtml = (str = '') =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  function renderFaqsHtml(faqs) {
    if (!faqs || faqs.length === 0) return '';
    return `<section aria-label="سوالات متداول"><h2>پرسش‌های متداول</h2>${faqs
      .map((f) => `<article><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></article>`)
      .join('')}</section>`;
  }

  function renderBreadcrumbHtml(breadcrumb) {
    if (!breadcrumb || breadcrumb.length === 0) return '';
    return `<nav aria-label="مسیر راهنما">${breadcrumb
      .map((b) => (b.path ? `<a href="${escapeHtml(b.path)}">${escapeHtml(b.name)}</a>` : `<span>${escapeHtml(b.name)}</span>`))
      .join(' / ')}</nav>`;
  }

  function renderBodyForRoute(route, page, faqs) {
    const navLinks = `<nav aria-label="دسترسی سریع">
      <a href="/">صفحه اصلی</a> |
      <a href="/services">خدمات تخصصی</a> |
      <a href="/articles">بانک مقالات</a> |
      <a href="/tools">تست‌های آنلاین زوج‌درمانی</a> |
      <a href="/cities">شهرهای ایران</a> |
      <a href="/countries">ایرانیان خارج از کشور</a> |
      <a href="/fees">تعرفه جلسات</a> |
      <a href="/about">درباره مهناز خوینی</a> |
      <a href="/contact">رزرو نوبت</a>
    </nav>`;

    const bcHtml = renderBreadcrumbHtml(page.breadcrumb);
    let mainHtml = `<h1>${escapeHtml(page.title)}</h1><p>${escapeHtml(page.description)}</p>`;

    const standaloneEntry = STANDALONE_SEO_CONTENT[route.type];
    const standaloneBlock = standaloneEntry
      ? `<section><h2>${escapeHtml(standaloneEntry.heading)}</h2><article>${standaloneEntry.bodyHtml}</article>${renderFaqsHtml(standaloneEntry.faqs)}</section>`
      : '';

    if (route.type === 'article') {
      const a = getArticleBySlug(route.slug);
      if (a) {
        const takeawaysHtml =
          a.takeaways && a.takeaways.length > 0
            ? `<section><h2>نکات کلیدی</h2><ul>${a.takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul></section>`
            : '';
        mainHtml = `<h1>${escapeHtml(a.h1 || a.title)}</h1><p>${escapeHtml(a.description)}</p>${takeawaysHtml}<article>${a.bodyHtml || ''}</article>${renderFaqsHtml(a.faqs)}`;
      }
    } else if (route.type === 'service') {
      const s = getServiceBySlug(route.slug);
      if (s) {
        mainHtml = `<h1>${escapeHtml(s.h1 || s.title)}</h1><p>${escapeHtml(s.description)}</p><article>${s.bodyHtml || ''}</article>${renderFaqsHtml(s.faqs)}`;
      }
    } else if (route.type === 'city') {
      const c = getCityBySlug(route.citySlug);
      if (c) {
        const features = (c.keyFeatures || []).map((f) => `<li>${escapeHtml(f)}</li>`).join('');
        const areas = (c.neighborhoods || []).join('، ');
        const related = (c.relatedArticleSlugs || [])
          .map((slug) => getArticleBySlug(slug))
          .filter(Boolean)
          .map((a) => `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`)
          .join('');
        mainHtml = `<h1>${escapeHtml(c.h1)}</h1><p>${escapeHtml(c.metaDescription)}</p><p>${escapeHtml(c.introText)}</p><p>${escapeHtml(c.populationNote)} — مناطق تحت پوشش: ${escapeHtml(areas)}</p><ul>${features}</ul><article>${c.detailedGuideHtml || ''}</article>${renderFaqsHtml(c.faqs)}${related ? `<section><h2>مقالات مرتبط</h2><ul>${related}</ul></section>` : ''}`;
      }
    } else if (route.type === 'country') {
      const co = getCountryBySlug(route.countrySlug);
      if (co) {
        const features = (co.keyFeatures || []).map((f) => `<li>${escapeHtml(f)}</li>`).join('');
        const cities = (co.majorCities || []).join('، ');
        const related = (co.relatedArticleSlugs || [])
          .map((slug) => getArticleBySlug(slug))
          .filter(Boolean)
          .map((a) => `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`)
          .join('');
        mainHtml = `<h1>${escapeHtml(co.h1)}</h1><p>${escapeHtml(co.metaDescription)}</p><p>${escapeHtml(co.introText)}</p><p>شهرهای تحت پوشش: ${escapeHtml(cities)} | ${escapeHtml(co.timezoneNote)} | ${escapeHtml(co.paymentNote)}</p><ul>${features}</ul><article>${co.detailedGuideHtml || ''}</article>${renderFaqsHtml(co.faqs)}${related ? `<section><h2>مقالات راهنما</h2><ul>${related}</ul></section>` : ''}`;
      }
    } else if (route.type === 'singleTest') {
      const t = getTestBySlug(route.testSlug);
      if (t) {
        const dims = (t.dimensionsTested || []).map((d) => `<li>${escapeHtml(d)}</li>`).join('');
        mainHtml = `<h1>${escapeHtml(t.h1 || t.title)}</h1><p>${escapeHtml(t.seoDescription)}</p><p>${escapeHtml(t.scientificDescription || '')}</p><ul>${dims}</ul><article>${t.detailedGuideHtml || ''}</article>${renderFaqsHtml(t.faqs)}`;
      }
    } else if (route.type === 'home') {
      const srvLinks = services.map((s) => `<li><a href="/services/${escapeHtml(s.slug)}">${escapeHtml(s.title)}</a></li>`).join('');
      const artLinks = articles.slice(0, 12).map((a) => `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`).join('');
      const testLinks = Object.values(testsData).map((t) => `<li><a href="/tests/${escapeHtml(t.slug)}">${escapeHtml(t.title)}</a></li>`).join('');
      const cityLinks = CITIES_DATA.map((c) => `<li><a href="/cities/${escapeHtml(c.slug)}">زوج درمانی در ${escapeHtml(c.cityName)}</a></li>`).join('');
      const countryLinks = COUNTRIES_DATA.map((co) => `<li><a href="/countries/${escapeHtml(co.slug)}">زوج درمانگر آنلاین در ${escapeHtml(co.countryNameFa)}</a></li>`).join('');
      mainHtml = `<h1>مرکز تخصصی زوج درمان و زوج‌درمانی با مهناز خوینی (نظام ۱۴۱۴۰۸۳)</h1><p>${escapeHtml(page.description)} برای آشنایی بیشتر با معیارهای انتخاب <a href="/best-couples-therapist-tehran">بهترین زوج درمانگر تهران و آنلاین</a> و مشاهده <a href="/fees">تعرفه‌های مصوب نظام روان‌شناسی</a> و <a href="/process">مراحل درمان EFT</a> وارد بخش‌های تخصصی شوید.</p><section><h2><a href="/services">خدمات تخصصی زوج‌درمانی</a></h2><ul>${srvLinks}</ul></section><section><h2><a href="/tools">تست‌های آنلاین رایگان سلامت رابطه</a></h2><ul>${testLinks}</ul></section><section><h2><a href="/cities">مراکز حضوری تهران و کلان‌شهرهای ایران</a></h2><ul>${cityLinks}</ul></section><section><h2><a href="/countries">مشاوره آنلاین ایرانیان خارج از کشور</a></h2><ul>${countryLinks}</ul></section><section><h2><a href="/articles">مقالات تخصصی منتخب</a></h2><ul>${artLinks}</ul></section>${standaloneBlock}`;
    } else if (route.type === 'articles') {
      const artLinks = articles.map((a) => `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`).join('');
      mainHtml = `<h1>بانک مقالات تخصصی زوج درمان و مشاوره رابطه</h1><p>${escapeHtml(page.description)}</p><ul>${artLinks}</ul>${standaloneBlock}`;
    } else if (route.type === 'services') {
      const srvLinks = services.map((s) => `<li><a href="/services/${escapeHtml(s.slug)}">${escapeHtml(s.title)}</a></li>`).join('');
      mainHtml = `<h1>خدمات تخصصی زوج درمان مهناز خوینی</h1><p>${escapeHtml(page.description)}</p><ul>${srvLinks}</ul>${standaloneBlock}`;
    } else if (route.type === 'tools') {
      const testLinks = Object.values(testsData).map((t) => `<li><a href="/tests/${escapeHtml(t.slug)}">${escapeHtml(t.title)}</a></li>`).join('');
      mainHtml = `<h1>تست‌های آنلاین زوج درمانی رایگان</h1><p>${escapeHtml(page.description)}</p><ul>${testLinks}</ul>${standaloneBlock}`;
    } else if (route.type === 'cities') {
      const cityLinks = CITIES_DATA.map((c) => `<li><a href="/cities/${escapeHtml(c.slug)}">${escapeHtml(c.h1)}</a></li>`).join('');
      mainHtml = `<h1>پایگاه پوشش زوج درمانی آنلاین در شهرهای ایران</h1><p>${escapeHtml(page.description)}</p><ul>${cityLinks}</ul>${standaloneBlock}`;
    } else if (route.type === 'countries') {
      const countryLinks = COUNTRIES_DATA.map((co) => `<li><a href="/countries/${escapeHtml(co.slug)}">${escapeHtml(co.h1)}</a></li>`).join('');
      mainHtml = `<h1>زوج درمانی آنلاین برای ایرانیان خارج از کشور</h1><p>${escapeHtml(page.description)}</p><ul>${countryLinks}</ul>${standaloneBlock}`;
    } else if (route.type === 'videos') {
      const vList = VIDEOS_DATA.map((v) => `<article><h2>${escapeHtml(v.title)}</h2><p>${escapeHtml(v.description)}</p></article>`).join('');
      mainHtml = `<h1>ویدیوها و کارگاه‌های آموزشی مهناز خوینی</h1><p>${escapeHtml(page.description)}</p>${vList}${standaloneBlock}`;
    } else if (route.type === 'faq') {
      const allMainFaqs = renderFaqsHtml((mainFaqsList || []).map((f) => ({ q: f.q, a: f.a })));
      mainHtml += `${allMainFaqs}${standaloneBlock}`;
    } else if (standaloneBlock) {
      mainHtml += standaloneBlock;
    } else if (faqs && faqs.length > 0) {
      mainHtml += renderFaqsHtml(faqs);
    }

    return `<div style="direction:rtl;text-align:right;max-width:960px;margin:0 auto;padding:24px;font-family:Vazirmatn,sans-serif"><header>${navLinks}</header>${bcHtml}<main>${mainHtml}</main></div>`;
  }

  function faqsForRoute(route) {
    try {
      if (route.type === 'article') return getArticleBySlug(route.slug)?.faqs;
      if (route.type === 'service') return getServiceBySlug(route.slug)?.faqs;
      if (route.type === 'singleTest') return getTestBySlug(route.testSlug)?.faqs;
      if (route.type === 'city') return getCityBySlug(route.citySlug)?.faqs;
      if (route.type === 'country') return getCountryBySlug(route.countrySlug)?.faqs;
      if (route.type === 'faq') {
        const extra = STANDALONE_SEO_CONTENT.faq?.faqs || [];
        return [...(mainFaqsList || []).map((f) => ({ q: f.q, a: f.a })), ...extra];
      }
      if (STANDALONE_SEO_CONTENT[route.type]?.faqs) {
        return STANDALONE_SEO_CONTENT[route.type].faqs;
      }
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

    const rootEl = dom.window.document.getElementById('root');
    if (rootEl) {
      rootEl.innerHTML = renderBodyForRoute(route, page, faqs);
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
