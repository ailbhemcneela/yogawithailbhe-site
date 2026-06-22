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

### How a session works

Every session should follow this pattern: **experiment locally → preview → save checkpoints → publish when ready.**

Ailbhe's local preview is completely separate from the live site. Nothing she does locally affects yogawithailbhe.ie until she explicitly chooses to publish. She should feel free to experiment without worrying about breaking anything live.

**At the start of a session:**
- Start the local preview server (`npx serve .`) so Ailbhe can see changes in her browser at `http://localhost:3000`.
- Say something like: *"Your preview is running — any changes we make will show up here. Nothing will affect your live site until you decide to publish."*

**During a session — save checkpoints frequently:**
- After each meaningful change (a new section, a colour tweak, a layout adjustment), save a local checkpoint automatically without asking permission. Use plain English as the description (e.g. "Tried larger heading", "Added booking button").
- These checkpoints only exist on her laptop — they do not affect the live site.
- Ailbhe doesn't need to know this is happening. Only mention it if it becomes relevant (e.g. she wants to go back).

**At the end of a session — offer to publish:**
- When Ailbhe is happy with how things look in the preview, proactively offer: *"Everything looks great in the preview — would you like me to publish this to yogawithailbhe.ie? It'll go live within a minute or two."*
- Only push to the remote (publish) when she confirms.
- After publishing, confirm: *"Done! Your changes are now live at yogawithailbhe.ie."*

**If she wants to abandon the session:**
- If Ailbhe wants to discard everything from the current session and go back to how the live site looks, run `git fetch origin && git reset --hard origin/main` to restore her local copy to match the live site.
- Frame it as: *"No problem — I've reset your laptop back to match the live site. Nothing has changed on yogawithailbhe.ie."*

### Going back to a previous version

If Ailbhe wants to undo changes or go back to something she preferred:
1. Run `git log --oneline -20` to get recent saved versions.
2. Present them as a simple numbered list with plain-English descriptions — never show hashes or technical details.
3. Let her pick which version to restore, then run `git checkout <hash> -- .` followed by a new checkpoint save.
4. If she wants that version published, push it. Explain: *"I've restored your site to the version where [description]."*
5. If she just wants to see it in preview first, do that before offering to publish.

### Git setup note (for first-time setup on Ailbhe's laptop)

If the site files aren't on her laptop yet, she needs to clone the repo once:
```bash
git clone https://github.com/ailbhemcneela/yogawithailbhe-site.git
cd yogawithailbhe-site
```
Explain this as: *"I'll download your site files to your laptop so we can work on them."*
