# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static HTML/CSS/JS website for Yoga with Ailbhe — a yoga instructor's personal/business site. Hosted on GitHub Pages at `yogawithailbhe.ie`. No build step, no framework, no bundler — files are served as-is.

## Pages

- `index.html` — homepage
- `corporate/index.html` — corporate yoga landing page (serves at `/corporate`)

## Third-party integrations

- **Setmore** — booking platform (links/embeds for class bookings)
- **MailerLite** — email newsletter signup (embed form or popup)
- **Instagram** — social link

## Development

Serve locally with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Structure conventions

- Shared styles in `css/styles.css`; page-specific styles in separate files if needed
- Shared JS in `js/main.js`; page-specific scripts alongside their page
- Images in `assets/images/`; fonts in `assets/fonts/` if self-hosted
- No inline styles; keep presentation in CSS files
