import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://electrion.netlify.app';
const ROOT_DIR = './';
const OUTPUT_FILE = './sitemap.xml';

console.log('🌐 Generando sitemap automatizado...');

const files = fs.readdirSync(ROOT_DIR);
const htmlFiles = files.filter(file => file.endsWith('.html'));

const sitemapEntries = htmlFiles.map(file => {
    const url = file === 'index.html' ? `${BASE_URL}/` : `${BASE_URL}/${file}`;
    const stats = fs.statSync(path.join(ROOT_DIR, file));
    const lastMod = stats.mtime.toISOString().split('T')[0];
    
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${file === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

fs.writeFileSync(OUTPUT_FILE, sitemapContent.trim());

console.log(`✅ Sitemap generado con ${htmlFiles.length} páginas.`);
