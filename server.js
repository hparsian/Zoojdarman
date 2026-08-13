import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Redirect HTTP to HTTPS in production proxy environments to resolve split indexing
app.use((req, res, next) => {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const host = req.headers.host || '';
  
  // If request is HTTP or non-canonical host, redirect 301 to canonical HTTPS
  if (forwardedProto === 'http') {
    return res.redirect(301, `https://zoojdarman.ir${req.originalUrl}`);
  }
  
  // Express security & SEO headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  next();
});

// Serve static assets with caching headers for Core Web Vitals optimization
app.use(express.static(__dirname, {
  extensions: ['html', 'htm'],
  index: 'index.html',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    } else if (filePath.match(/\.(css|js|png|jpg|jpeg|svg|webp|woff2?)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Fallback 404 handler
app.use((req, res) => {
  const notFoundPath = path.join(__dirname, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.status(404).sendFile(notFoundPath);
  } else {
    res.status(404).send('Page Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Zoojdarman server running on http://${HOST}:${PORT}`);
});

