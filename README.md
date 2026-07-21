# Unda A Hundy — Website

Marketing + e-commerce site for [Unda A Hundy](https://undaahundy.com), the Black-owned golf lifestyle brand built around the Road to 99.

## Stack

- **Framework:** [Astro 5](https://astro.build/) (static, no JS by default)
- **Hosting:** Netlify free tier (auto-deploy on push to `main`)
- **Cart:** Snipcart (planned, Phase 5)
- **Email signup:** Beehiiv (planned, Phase 8 — destination TBD)
- **Repo:** [github.com/19dbot70/UndaAHundy-website](https://github.com/19dbot70/UndaAHundy-website)

## Project layout

```
site/
├── src/
│   ├── components/    # Header, Footer, WhereIAmToday
│   ├── data/          # stats.json (build-time data)
│   ├── layouts/       # BaseLayout
│   ├── pages/         # Routes (index.astro, 404.astro, ...)
│   └── styles/        # global.css (brand system)
├── public/            # Static assets (logo, favicon)
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

## Brand

- **Colors:** Black (`#0A0A0A`) / Gold (`#F5C518`) / White (`#FFFFFF`)
- **Logo:** `public/logo.svg` (gold U / underscore / 99 on black, Arial Black)
- **Favicon:** `public/favicon.svg` (compact brand mark)
- **Display font:** Bebas Neue (free via Google Fonts)
- **Body font:** system stack (no extra load)

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to ./dist
npm run preview   # preview built site
```

## Reference

- `../build-plan-v1.md` — 10-phase build plan
- `../copy-draft-pages-v1.md` — site copy (Home, About, Apparel, Road to 99, Break 100 Club, Contact)
- `../ia-decisions-v1.md` — nav order, "Where I'm At Today" scope, email destination
- `../stats-current.json` — source of truth for the "Where I'm At Today" component
