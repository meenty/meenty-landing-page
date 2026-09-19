# Mentee-landing

Landing page for Meenty — learn it from someone who loves it.

A Vite (vanilla JS) static site, componentized into ES modules + scoped CSS.

## Develop

```bash
npm install
npm run dev      # http://localhost:8100
```

## Build

```bash
npm run build    # outputs to dist/
```

## Deploy

The site is hosted on **GitHub Pages** and redeploys automatically on every push to `main`.

- `.github/workflows/deploy.yml` runs `npm ci` → `npm run build` → `actions/deploy-pages`.
- Pages source is set to **GitHub Actions** (not the `gh-pages` branch).
- `base: './'` in `vite.config.js` keeps asset paths relative so the build works under the `/Mentee-landing/` subpath.

Live URL: https://nemoNoboru.github.io/Mentee-landing/

To deploy manually without Actions:

```bash
npm run build
# push dist/ to the gh-pages branch (or any static host)
```
