# Fold Craft Launcher — official website

The official website of [Fold Craft Launcher](https://github.com/FCL-Team/FoldCraftLauncher):
a Minecraft: Java Edition launcher for Android.

Built with [Docusaurus 3](https://docusaurus.io/).

## Features

- **Dark theme by default** — the light theme is one toggle away
- **Cyan-blue accent palette** — tuned for both dark and light modes
- **Simplified Chinese by default, English at `/en/`** — full i18n with a language switcher in the navbar
- **Local search** — offline search across docs and pages, focused with `Ctrl/⌘ + K`, works in both languages
- **Game-themed visuals** — fixed cherry-blossom artwork, glass cards and a cyan-blue accent palette
- **Up-to-date screenshots** of the latest launcher interface
- **Download page** with release assets per architecture, changelog and mirrors
- **Documentation** for accounts, controller layouts, building and contributing
- **Release data** generated from the GitHub API by `npm run sync:data`

## Local development

```bash
npm install
npm start          # Chinese site at http://localhost:3000
npm run start:en   # English site at http://localhost:3000/en/
```

Production build and preview:

```bash
npm run build
npm run serve
```

`npm run serve` uses a small built-in static server (`scripts/serve.mjs`) that
serves `build/404.html` for unknown routes, so the preview matches GitHub Pages
(including the Chinese 404 page).

`npm run build` generates the Chinese site into `build/` and the English site into
`build/en/`, so the preview serves Chinese at `/` and English at `/en/`.

> The project uses the npmmirror registry by default (see `.npmrc`). Comment that
> line out if you prefer the official npm registry.

## Search

The site uses [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
for offline search — the index is generated at build time, no external service is
required. Press `Ctrl + K` (`⌘ + K` on macOS) to focus the search bar; the full
results pages are `/search` (Chinese) and `/en/search` (English).

## Updating release data

```bash
npm run sync:data
```

The script reads the latest release from the GitHub API and `version_map.json`,
then regenerates:

- `src/data/releases.json` — latest version, changelog, APK assets and stats
- `src/data/contributors.json` — contributor list for the About page
- `static/img/contributors/` — missing avatars

Review the diff and commit the generated files. The script needs network access
to `api.github.com` and `raw.githubusercontent.com`.

## Translations

The site is built with Docusaurus i18n (`defaultLocale: zh-Hans`, `locales: zh-Hans, en`).
Chinese is the source language; English lives under `i18n/en/`.

| What | Where |
| --- | --- |
| UI strings (pages, components) | `i18n/en/code.json` |
| Navbar / footer labels | `i18n/en/docusaurus-theme-classic/` |
| Documentation pages | `i18n/en/docusaurus-plugin-content-docs/current/` |
| Docs sidebar labels | `i18n/en/docusaurus-plugin-content-docs/current.json` |
| Default-locale theme strings | `i18n/zh-Hans/code.json` |

After adding or changing Chinese strings, regenerate the English translation files:

```bash
npm run write-translations -- --locale en
```

and fill in the new messages.

## Project structure

```
docs/                      Chinese documentation (default locale)
i18n/en/                   English translations (docs, UI strings, navbar/footer)
i18n/zh-Hans/code.json     Chinese theme-string overrides for the default locale
scripts/serve.mjs          Production preview server (build/404.html fallback)
scripts/sync-data.mjs      GitHub release data sync
src/components/            Reusable UI components
src/data/                  Generated release and contributor data
src/pages/                 Home, download, community, about and EULA pages
src/theme/NotFound/        Chinese-only 404 page (swizzled @theme/NotFound)
src/theme/Root.jsx         Fixed full-page artwork layer
static/img/background/     Cherry-blossom background artwork (WebP)
static/                    Images, favicons, robots.txt
docusaurus.config.js       Site configuration (dark default, i18n, navbar, footer)
sidebars.js                Documentation sidebar
```

## Deployment

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`
using the official Pages actions.

1. Go to **Settings → Pages** in the repository.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site and publishes it.

Pull requests run the build job only, which catches broken links and build
errors before merging.

## Credits

- Screenshots and project content: [FCL-Team](https://github.com/FCL-Team)
- Documentation adapted from [FCL-Docs](https://github.com/FCL-Team/FCL-Docs)
- UI inspiration and background artwork: [FCLdocs community documentation](https://github.com/FCLdocs-community/FCLdocs)
  (artwork licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/))
- Icons: hand-written SVG paths, no external icon dependency

## Troubleshooting

- **Dev server shows `Cannot read properties of undefined (reading 'id')`, missing `@generated/*` modules, or broken images**: the dev server was running while `.docusaurus` was cleared or while `npm run build` was running. Stop it, run `npm run clear`, then start it again. Never run `npm run start` and `npm run build` at the same time — they share the `.docusaurus` cache.
- **Preview both languages at once**: the dev server serves one locale at a time. Use `npm run start` for Chinese, `npm run start:en` for English, or `npm run build && npm run serve` to preview both at `/` and `/en/`.
- **Stale page after switching branches**: hard-refresh the browser (Ctrl+Shift+R) to drop cached chunks.
