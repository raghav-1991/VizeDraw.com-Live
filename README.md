# VizeDraw — Next.js website

Complete migration of the current 29-page VizeDraw marketing website into editable React/TypeScript pages, with shared Header, Footer, SEO and interaction-loader components. No iframe or raw HTML page injection. Existing branding, layouts and media are preserved.

## Get started

Use Node.js 20.9 or later (Node 24 LTS recommended), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production:

```sh
npm run typecheck
npm run build
npm run verify
npm run preview
```

## Deploy

This project uses Next.js Pages Router and static export. `npm run build` writes the complete site to `out/`. Deploy that folder to any static host with directory index handling. No API keys, database or Python required. For Vercel import the project and use build command `npm run build`, output directory `out`. On Netlify/Cloudflare Pages use the same settings. Do not use `next start` for this export configuration. There is no SPA fallback: unknown paths should return a proper 404.

Set environment variables in the host before building:

- NEXT_PUBLIC_SITE_URL: final HTTPS origin, without a path.
- NEXT_PUBLIC_INDEXABLE: `true` only for production indexing; defaults to `false` for staging.

The build generates canonical metadata, robots.txt and sitemap.xml. Copy .env.example to .env.local for local configuration, or set these variables in your hosting dashboard. Both the Next build and the SEO generation script load the same environment settings.

## Source map

- src/pages/: all 29 editable TSX page modules, plus _app, _document and 404.
- src/components/: shared header, footer, page head and Runtime.
- src/data/routes.json: route/body-class/source resource inventory.
- public/assets/: every original website asset, including video, posters, logos, local fonts, styles, browser scripts and licenses.
- scripts/: export verification, sitemap/robots generation and dependency-free local preview.
- ASSET-MANIFEST.json: original media and asset integrity hashes.

## Interaction architecture

The current DOM-based calculator, menus, search, cookie preferences and animation scripts are retained and loaded in order after React hydration. Internal links deliberately use native anchors, producing a clean document for each route. Do not replace them with next/link until the retained scripts have explicit route teardown/reinitialization. To make deeper interaction changes, edit public/assets/*.js or migrate the relevant widget into React state. During development, reload after changing retained scripts. React Strict Mode is enabled; the loader guards against duplicate initialization.

The contact form opens an email draft; it is not a submission backend. Social links are disabled placeholders until official URLs are supplied. Sample blog/news content and illustrative media should be reviewed before production. Signup/sign-in lead to the separate application at app.vizedraw.com.

## Visual and media behavior

Original Poppins fonts, complete official robot/pen horizontal logo, favicon, six silent 8-second 3D scenario clips and unique solution illustrations are included. Topic carousel is 12 seconds desktop / 16 seconds mobile with pause/reduced-motion support. Original Blender scene source and review notes are included in authoring/; all runtime media is in public/assets/. Heavy intermediate frames and software binaries are excluded. Historical animation finishing scripts may need executable paths configured on another workstation.

Next.js static-export reference: https://nextjs.org/docs/pages/guides/static-exports
