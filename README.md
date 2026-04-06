# Site: safemezinami_cz

safemezinami.cz &mdash; SaFe &ndash; mezi n&aacute;mi

## Template

`inSite`

## Directory Structure

```
settings.json         # Template selection + site settings
src/                  # Page content (JSON)
  layout/             # Global layout pieces (header, footer)
html/                 # Generated static HTML (gitignored)
assets/               # Static assets (images, icons, JS)
```

## Pages

| Page    | Source JSON        | Description          |
|---------|--------------------|----------------------|
| Home    | `src/home.json`    | Homepage (one-pager) |
| Sitemap | `src/sitemap.json` | Sitemap page         |
| 404     | `src/404.json`     | Error page           |
