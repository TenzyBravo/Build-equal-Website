# Buildqual Engineering — Website

Static site (plain HTML + Tailwind CSS via CDN) for Buildqual Engineering Limited.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure

```
/
├── index.html                 Home
├── about.html
├── services.html              Services overview
├── services-soils.html
├── services-concrete.html
├── services-aggregate.html
├── services-geotechnical.html
├── capabilities.html          Full test-methods table (filterable)
├── projects.html
├── hse.html
├── blog.html                  Static list; posts under /blog as Markdown
├── contact.html               Form + map + contact details
├── assets/
│   ├── css/styles.css         Brand tokens + custom styles on top of Tailwind
│   ├── js/main.js             Shared header/footer, mobile nav, form, table filter
│   └── img/                   Add photos here
└── blog/
    └── 2026-01-cbr-testing.md Sample post
```

## Editing content

- **Text/pages:** edit the corresponding `.html` file.
- **Navigation / footer:** edit `assets/js/main.js` (single source of truth for every page).
- **Brand colours:** edit CSS variables at the top of `assets/css/styles.css`.
- **Blog posts:** add a Markdown file under `/blog/`, then add a card on `blog.html` linking to it (or wire up a static-site generator later — Astro/Eleventy fit well).
- **Placeholders:** every image on the site currently shows a `[PLACEHOLDER: …]` tile — swap by adding real photos under `assets/img/` and replacing the `<div class="ph">` blocks with `<img>` tags.

## Contact form — how emails reach Buildqual

The form is wired for **Formspree**. Until you paste in a real endpoint it falls back to opening the visitor's email app (`mailto:`), which is not reliable — so activate Formspree before launch.

**One-time setup (~5 minutes):**

1. Go to <https://formspree.io> and sign up using `buildqualengineeringlimited@gmail.com`.
2. Click **New Form** → give it a name (e.g. "Buildqual Website Enquiries").
3. Formspree shows an endpoint like `https://formspree.io/f/xyzabc12`. Copy the ID after `/f/`.
4. Open `contact.html`, find `YOUR_FORMSPREE_ID`, and replace it with that ID.
5. Formspree sends a verification email to the Gmail — click the confirm link inside.

That's it. From then on, every submission arrives in the Buildqual Gmail inbox and is also logged in the Formspree dashboard. The site redirects the visitor to `thanks.html` on success.

**Notes:**
- Free tier = 50 submissions/month; the $10/mo plan removes that limit and adds auto-responders.
- The hidden `_gotcha` field is a honeypot for basic spam filtering.
- Reply-To is automatically set to the sender's email, so hitting **Reply** in Gmail goes to the enquirer.

Alternatives if you'd rather not use Formspree: **EmailJS** (browser SDK, needs Gmail/SMTP creds), or a small **server endpoint** on your host that sends via SMTP/SendGrid.

## Deploy

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder, or connect the Git repo. No build step needed.
- **Any standard hosting:** upload via FTP. Ensure HTTPS is enabled.
- **Domain:** `buildqual.co.zm` or `buildqualengineering.com` recommended.

## SEO / analytics

- Meta titles and descriptions are set per page — update as content evolves.
- Add a `sitemap.xml` and `robots.txt` before launch.
- Drop your Google Analytics or GTM snippet into a shared include (add to `main.js` or hard-code in each page `<head>` — analytics is one of the few things worth duplicating for reliability).

## Tailwind in production

The site loads Tailwind via CDN for fast iteration. **Before launch**, run the Tailwind CLI to build a purged CSS file:

```bash
npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/tw.min.css --minify
```

Then replace `<script src="https://cdn.tailwindcss.com"></script>` in every page with `<link rel="stylesheet" href="assets/css/tw.min.css">`.

---
Built by **Double ZZ Company** for Buildqual Engineering Limited.
