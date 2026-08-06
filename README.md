# Jovan Jose Asker Fredy — Portfolio Website

A personal portfolio website showcasing my background as a Computer Science / Data Science &amp; AI student, built with plain HTML, CSS, and JavaScript in an Apple "liquid glass" visual style (frosted, translucent panels over a photo background, light/dark mode).

**Live site:** https://jovan-portfolio-eta.vercel.app

---

## Tech Stack

- **HTML5 / CSS3 / vanilla JavaScript** — no framework, no build step, no dependencies to install.
- **Google Fonts (Poppins)** loaded via CDN as the web fallback for Century Gothic (the site's primary declared font — not available on most systems by default, so Poppins is what most visitors actually see).
- **Vercel** for free, always-on static hosting.

Because there's no build step, the site runs identically whether opened as a local file or served on Vercel.

---

## Project Structure

```
Personal_Projects/
├── index.html                 # All page content/sections
├── assets/
│   ├── css/style.css          # Design system (glass effect, layout, themes)
│   ├── js/main.js             # Theme toggle, nav, scroll reveal, headshot swap
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── headshot-placeholder.svg   # Shown until you add a real photo (see below)
│   │   ├── bg/network-bg.png  # Full-page background photo
│   │   ├── logos/              # Employer/school logos (Experience & Education)
│   │   └── certs/              # Certification badge images
│   └── resume/
│       └── resume.pdf         # Add your resume PDF here (see below)
├── sitemap.xml                 # For search engine indexing
├── robots.txt                  # Allows all crawlers, points to sitemap
└── README.md
```

---

## Running Locally

No installation required. Pick either method:

**Option A — just open it**
```bash
open index.html      # macOS
# or double-click index.html in Finder
```

**Option B — serve it (recommended, avoids any relative-path quirks)**
```bash
cd Personal_Projects
python3 -m http.server 8000
# then visit http://localhost:8000
```
or, if you have Node.js installed:
```bash
npx serve .
```

Any changes you make to `index.html`, `assets/css/style.css`, or `assets/js/main.js` are visible on a page refresh — no compiling needed.

---

## How Hosting Works (so it stays live even with your terminal/computer off)

This site is hosted on **Vercel**, a free static-site host. It is **not** running on your machine — it's served from Vercel's global CDN, so it stays online 24/7 regardless of whether your laptop is on, asleep, or your terminal is closed. (We moved here from GitHub Pages after a GitHub Actions/Pages outage — Vercel isn't affected by GitHub's infrastructure at all.)

### Deploying an update

The Vercel project is connected to this GitHub repo, so **every `git push` to `main` deploys automatically** — no manual step needed. Watch it happen under the **Deployments** tab on [vercel.com](https://vercel.com).

If you ever need to deploy without pushing (e.g. testing local-only changes), you can still do it manually from the project folder:

```bash
npx vercel --prod --yes
```

### Custom domain (optional, later)

If you buy a domain (e.g. `jovanfredy.com`):
1. Go to the project on [vercel.com](https://vercel.com) → **Settings → Domains**.
2. Add the domain and follow the DNS instructions Vercel gives you (usually a single `A` or `CNAME` record at your registrar).
3. Vercel provisions HTTPS for it automatically.

---

## Making Your Name Findable on Google

The site already includes the on-page SEO needed for indexing:
- Descriptive `<title>` and meta description
- Open Graph / Twitter card tags (for nice link previews when shared)
- JSON-LD `Person` structured data (helps Google understand who you are and link your LinkedIn/GitHub)
- `sitemap.xml` and `robots.txt`

Google doesn't guarantee indexing timing, but you can speed it up:
1. Go to [Google Search Console](https://search.google.com/search-console) and sign in with your Google account.
2. Add the property `https://jovan-portfolio-eta.vercel.app/`.
3. Verify ownership (Search Console will give you an HTML tag or file to add — ask me and I'll wire it in).
4. Submit `sitemap.xml` under **Sitemaps**.
5. Use **URL Inspection → Request Indexing** for the homepage.

It typically takes anywhere from a few days to a couple of weeks for a new page to appear in search results, even after requesting indexing.

---

## Adding Your Real Headshot

The hero section currently shows a placeholder monogram avatar. To use your real photo:

1. Save your headshot as `headshot.jpg` (square photo works best) into `assets/images/`.
2. That's it — `main.js` automatically detects the file and swaps it in; no HTML edits needed.

## Adding Your Resume PDF

The "Resume" button in the nav bar links to `assets/resume/resume.pdf`. Drop your resume PDF at that exact path (same filename) and the download button will work automatically.

---

## Updating Content

All page copy lives in `index.html`, organized into clearly labeled `<section>` blocks (`#about`, `#experience`, `#projects`, `#skills`, `#certifications`, `#contact`). Edit the text directly — no templating engine involved. Colors, spacing, and the glass effect live in `assets/css/style.css` under the `:root` CSS variables at the top of the file.

---

## Credits

Built with plain HTML/CSS/JS. Design inspired by Apple's frosted-glass ("liquid glass") visual language. Fonts via [Google Fonts](https://fonts.google.com/specimen/Poppins).
