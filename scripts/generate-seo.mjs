import env from "@next/env";
env.loadEnvConfig(process.cwd());
import fs from "node:fs";
const routes = JSON.parse(fs.readFileSync("src/data/routes.json", "utf8"));
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://vizedraw-design-review.karmastrikes.chatgpt.site"
).replace(/\/$/, "");
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
if (!/^https?:\/\/[^\s<>"&]+$/.test(origin))
  throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin");
fs.writeFileSync(
  "out/robots.txt",
  `User-agent: *\n${indexable ? "Allow: /" : "Disallow: /"}\nSitemap: ${origin}/sitemap.xml\n`,
);
fs.writeFileSync(
  "out/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((r) => `<url><loc>${origin}${r.path === "/" ? "/" : r.path + "/"}</loc></url>`).join("")}</urlset>`,
);
console.log(
  `Generated sitemap for ${routes.length} routes; indexing ${indexable ? "enabled" : "disabled"}.`,
);
