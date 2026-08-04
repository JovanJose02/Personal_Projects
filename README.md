# Jovan Jose Asker Fredy — Portfolio Website

A personal portfolio website showcasing my background as a Computer Science / Data Science &amp; AI student, built with plain HTML, CSS, and JavaScript in an Apple "liquid glass" visual style (frosted, translucent panels over an animated gradient background, light/dark mode).

**Live site:** https://jovanjose02.github.io/Personal_Projects/

---

## Tech Stack

- **HTML5 / CSS3 / vanilla JavaScript** — no framework, no build step, no dependencies to install.
- **Google Fonts (Inter)** loaded via CDN for typography, with a system-font fallback stack.
- **GitHub Pages** for free, always-on static hosting.
- **GitHub Actions** (`.github/workflows/deploy.yml`) to automatically build and deploy the site on every push to `main`.

Because there's no build step, the site runs identically whether opened as a local file or served on GitHub Pages.

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
│   │   └── headshot-placeholder.svg   # Shown until you add a real photo (see below)
│   └── resume/
│       └── resume.pdf         # Add your resume PDF here (see below)
├── sitemap.xml                 # For search engine indexing
├── robots.txt                  # Allows all crawlers, points to sitemap
├── .github/workflows/deploy.yml  # CI/CD: auto-deploys to GitHub Pages
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

This site is hosted on **GitHub Pages**, GitHub's free static-site hosting. It is **not** running on your machine — it's served directly from GitHub's servers, so it stays online 24/7 regardless of whether your laptop is on, asleep, or your terminal is closed.

Deployment is automated with the GitHub Actions workflow at `.github/workflows/deploy.yml`:

1. Every time you `git push` to the `main` branch, GitHub Actions automatically runs.
2. It packages the repository contents and publishes them to GitHub Pages.
3. Your changes go live at the URL above within about a minute — no manual deploy step needed.

You can watch a deployment run under the **Actions** tab of the repo on GitHub.

### One-time setup (if not already enabled)

GitHub Pages needs to be turned on once per repo:

1. Go to the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab) and the site will publish.

### Custom domain (optional, later)

If you buy a domain (e.g. `jovanfredy.com`):
1. Add a `CNAME` file to the repo root containing just the domain name.
2. In your domain registrar's DNS settings, add a `CNAME` record pointing to `jovanjose02.github.io`.
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.

---

## Making Your Name Findable on Google

The site already includes the on-page SEO needed for indexing:
- Descriptive `<title>` and meta description
- Open Graph / Twitter card tags (for nice link previews when shared)
- JSON-LD `Person` structured data (helps Google understand who you are and link your LinkedIn/GitHub)
- `sitemap.xml` and `robots.txt`

Google doesn't guarantee indexing timing, but you can speed it up:
1. Go to [Google Search Console](https://search.google.com/search-console) and sign in with your Google account.
2. Add the property `https://jovanjose02.github.io/Personal_Projects/`.
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

Built with plain HTML/CSS/JS. Design inspired by Apple's frosted-glass ("liquid glass") visual language. Fonts via [Google Fonts](https://fonts.google.com/specimen/Inter).
