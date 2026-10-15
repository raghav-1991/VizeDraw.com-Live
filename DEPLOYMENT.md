# Developer deployment handoff

Use this Next.js project as the project root, not its parent directory.

1. Install Node.js 20.9+ (24 LTS recommended).
2. Run `npm ci` to install the exact locked dependencies.
3. Configure NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_INDEXABLE in the host environment. An .env.example is supplied. Production indexing is disabled by default.
4. Run `npm run typecheck`, `npm run build`, then `npm run verify`.
5. Publish `out/` on your static hosting/CDN. Vercel settings are supplied in vercel.json; Netlify and Cloudflare Pages use build command npm run build and publish directory out.

The prebuilt out/ folder is included for immediate preview/deployment. Rebuild after changing content, code or environment variables. The shipped build keeps the current staging origin and noindex settings.

Route resolution must serve /pricing/ from /pricing/index.html and equivalent directory routes. Redirect slashless page URLs to their trailing-slash forms or resolve their directory index directly. Unknown routes should serve 404.html with HTTP 404; do not apply a blanket homepage rewrite.

Nginx example, with server root set to the uploaded out directory:

```nginx
location / {
    try_files $uri $uri/ $uri/index.html =404;
}
error_page 404 /404.html;
```

Use HTTPS, correct MIME types (including MP4, SVG, WebP and local fonts), range support for video and sensible cache invalidation. Existing asset names are stable, not content-hashed: avoid immutable caching for /assets/ unless you add your own versioning. Next's /_next/static/ files are versioned.

No backend, API key or database is required for this marketing website. Contact currently opens a mail draft; integrate a delivery endpoint if desired. Social shortcuts remain explicit placeholders pending approved URLs. Review published pricing, sample blog/news material, legal content and app.vizedraw.com signup destinations before launch.

Implementation uses Next.js Pages Router with TypeScript and static export. Existing DOM interaction modules are progressively enhanced after hydration. Native internal anchors are intentional; see README before introducing client-side navigation. The package preserves the current design; it does not rebuild the drawing-review application itself.

Official framework references:
- https://nextjs.org/docs/pages/guides/static-exports
- https://nextjs.org/docs/pages/getting-started/installation
