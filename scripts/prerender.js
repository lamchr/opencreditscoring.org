#!/usr/bin/env node
/*
 * Renders index.html in a headless browser and bakes the resulting DOM into
 * the #root div, so crawlers and tools that don't execute JavaScript (search
 * engines, link-preview bots, AI web-fetch tools) can read the page content.
 * React still mounts normally on top for interactive visitors.
 *
 * Usage: node scripts/prerender.js [targetDir]
 * targetDir must contain a built index.html + dist/*.js (defaults to _site).
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer');

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
};

function serveDir(rootDir) {
  const server = http.createServer((req, res) => {
    const reqPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(rootDir, reqPath === '/' ? '/index.html' : reqPath);
    if (!filePath.startsWith(rootDir)) { res.writeHead(403); return res.end(); }
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); return res.end('Not found'); }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  const targetDir = path.resolve(process.argv[2] || '_site');
  const indexPath = path.join(targetDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`No index.html found at ${indexPath}`);
  }

  const server = await serveDir(targetDir);
  const port = server.address().port;

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('footer.site-footer');
    // Small settle delay so lucide.createIcons() has swapped icon placeholders in.
    await new Promise((r) => setTimeout(r, 500));

    const rootHTML = await page.$eval('#root', (el) => el.innerHTML);
    if (!rootHTML || rootHTML.length < 500 || !rootHTML.includes('Open Credit Scoring')) {
      throw new Error(`Prerendered content looks wrong (length ${rootHTML ? rootHTML.length : 0}) — aborting.`);
    }

    const html = fs.readFileSync(indexPath, 'utf8');
    const marker = '<div id="root"></div>';
    if (!html.includes(marker)) {
      throw new Error(`Could not find "${marker}" in ${indexPath}`);
    }
    const updated = html.replace(marker, `<div id="root">${rootHTML}</div>`);
    fs.writeFileSync(indexPath, updated);
    console.log(`Prerendered ${rootHTML.length} chars of content into ${indexPath}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
