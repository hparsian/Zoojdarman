import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ===== HTTP → HTTPS Redirect =====
// This fixes the critical SEO issue of duplicate HTTP/HTTPS indexing.
// Google was seeing http://zoojdarman.ir and https://zoojdarman.ir as two separate sites.
app.use((req, res, next) => {
  // Check if the request is over HTTP (not HTTPS)
  // In production, X-Forwarded-Proto is set by the reverse proxy/load balancer
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
  if (proto === 'http') {
    // 301 = permanent redirect (preserves SEO link equity)
    return res.redirect(301, 'https://' + req.headers.host + req.url);
  }
  next();
});

// ===== Security & SEO Headers =====
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // SEO: Tell browsers to prefer HTTPS
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // SEO: Prevent content sniffing
  res.setHeader('X-DNS-Prefetch-Control', 'on');
  
  next();
});

// ===== Static Files =====
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html',
  // Cache static assets for better performance (Core Web Vitals)
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    // Don't cache HTML files (they change more often)
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
    // Cache images longer
    if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=604800');
    }
  }
}));

// ===== Sitemap Route =====
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache 1 day
  res.sendFile(join(__dirname, 'sitemap.xml'));
});

// ===== robots.txt Route =====
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(join(__dirname, 'robots.txt'));
});

// ===== SPA Fallback: serve index.html for unknown routes =====
// This ensures clean URLs like /articles/some-article/ don't 404
app.get('*', (req, res) => {
  // For pages that should exist but don't have physical files,
  // serve the main page (or you could create individual HTML files)
  res.sendFile(join(__dirname, 'index.html'));
});

// ===== Start Server =====
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🟢 Zoojdarman server running on port ${PORT}`);
  console.log(`   🌐 http://localhost:${PORT}`);
  console.log(`   🔒 HTTP→HTTPS redirect: ACTIVE`);
});
