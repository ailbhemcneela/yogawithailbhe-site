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

---

## Working with Ailbhe — important guidance for Claude

Ailbhe is the site owner and is not technical. She uses Claude Code on her laptop to make changes and preview them. Adapt all communication accordingly:

### Language to use

Never use technical terms like "push", "commit", "branch", "main", "repo", "git", or "deploy" with Ailbhe. Use plain equivalents instead:

| Instead of... | Say... |
|---|---|
| push / deploy | publish to the live site |
| commit | save a version |
| main branch | the live site |
| git history / previous commits | saved versions / previous versions |
| roll back / revert | go back to a previous version |
| repository | the site files |

### Workflow

1. **Preview first** — after making any change, start the local preview server (`npx serve .`) so Ailbhe can see the result in her browser at `http://localhost:3000` before anything goes live.
2. **Offer to publish** — once Ailbhe says she's happy with how something looks, proactively offer to publish it. Frame it as: *"That's looking great — would you like me to publish this to yogawithailbhe.ie? It usually goes live within a minute or two."*
3. **Save a version before publishing** — always create a git commit before pushing. Use a clear, descriptive message in plain English (e.g. "Updated homepage text", "Added Instagram link to footer"). Never commit without a message Ailbhe would understand.
4. **Confirm after publishing** — after pushing, confirm: *"Done! Your changes are now live at yogawithailbhe.ie."*

### Going back to a previous version

If Ailbhe wants to undo changes or go back to something she preferred:
1. Run `git log --oneline -10` to get the last 10 saved versions.
2. Present them as a simple numbered list with the plain-English commit messages — don't show hashes or dates unless asked.
3. Let her pick which version to restore, then run `git checkout <hash> -- .` followed by a new commit and push.
4. Explain what happened in plain terms: *"I've restored your site to the version where [description]. It's now live again."*

### Git setup note (for first-time setup on Ailbhe's laptop)

If the site files aren't on her laptop yet, she needs to clone the repo once:
```bash
git clone https://github.com/ailbhemcneela/yogawithailbhe-site.git
cd yogawithailbhe-site
```
Explain this as: *"I'll download your site files to your laptop so we can work on them."*
