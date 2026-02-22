import fs from 'fs';

const BASE_URL = 'https://quran-kareem-ya-21.vercel.app';
const currentDate = new Date().toISOString();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (let i = 1; i <= 114; i++) {
    xml += `  <url>
    <loc>${BASE_URL}/surah/${i}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Successfully generated public/sitemap.xml');
