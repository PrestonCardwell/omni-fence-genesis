// Build-time pre-rendering: turns every page into real HTML so Google (and
// Facebook link previews) see the full content without running JavaScript.
// Runs after `vite build` and `vite build --ssr`. Output: dist/<page>.html,
// which Vercel serves at /<page> because of "cleanUrls" in vercel.json.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render, getPageMeta, ALL_ROUTES, SITE_URL } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const page = (route) => {
  const meta = getPageMeta(route);
  const url = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  if (!html.includes(`<link rel="canonical" href="${url}"`)) throw new Error(`canonical not set for ${route}`);
  return html;
};

for (const route of ALL_ROUTES) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(route));
  console.log(`prerendered ${route} -> dist/${file}`);
}

// 404 page (not indexed)
fs.writeFileSync(
  path.join(dist, "404.html"),
  page("/__not-found__").replace("<head>", '<head>\n    <meta name="robots" content="noindex" />'),
);

// Sitemap generated from the same route list so it never goes stale
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_ROUTES.map((r) => `  <url><loc>${r === "/" ? `${SITE_URL}/` : SITE_URL + r}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`sitemap.xml written with ${ALL_ROUTES.length} pages`);
