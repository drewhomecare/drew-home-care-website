# Drew Home Care — Website

A static single-page marketing website for Drew Home Care.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content and structure |
| `style.css` | All styling (brand colors, layout, responsive) |
| `script.js` | Hamburger menu, active nav, contact form AJAX |
| `DHC_Logo_wCo.PNG` | Logo asset — place in this folder |
| `hero-bg.jpg` | Hero background photo — place in this folder |

---

## Before Launch: Replace Placeholders

Search for `[` in `index.html` to find every placeholder that needs updating:

| Placeholder | Replace with |
|---|---|
| `[Owner Name]` | Owner's actual name |
| `[City Name]` | City the business serves |
| `[X]-mile radius` | Actual service radius |
| `[Neighborhood A/B/C]` | Actual neighborhood names |
| `[City], [State] 00000` | Actual business address |
| `[X] years of experience` | Actual years of experience |
| `(555) 123-4567` | Real phone number (also update `tel:` links) |
| `hello@drewhomecare.com` | Real email address |

---

## Set Up the Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your form ID (looks like `xabcd1234`).
3. In `index.html`, find:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   and replace `YOUR_FORM_ID` with your actual form ID.
4. Formspree will forward all submissions to your email — no backend needed.

---

## Add the Hero Background Photo

The hero section uses a file called `hero-bg.jpg` in the same folder.

- Use a warm, high-quality photo of a caregiver with an elderly person.
- Recommended size: at least 1400×900px.
- The photo is most visible on the right side of the hero on desktop.
- Place the file here: `drew home care website/hero-bg.jpg`

---

## Add the Owner Photo

In the About section, replace the placeholder `<img>` source:

```html
src="https://picsum.photos/480/560?grayscale"
```

with the path to the real owner photo, e.g.:

```html
src="owner-photo.jpg"
```

---

## Deploying

### Netlify (easiest)
1. Drag and drop this entire folder onto [netlify.com/drop](https://app.netlify.com/drop).
2. Done — Netlify gives you a live URL instantly.
3. Connect a custom domain in Netlify's settings.

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com](https://vercel.com).
3. Vercel auto-deploys on every push.

### GitHub Pages
1. Push to a GitHub repo.
2. Go to Settings → Pages → set source to your main branch.
3. Your site will be live at `https://yourusername.github.io/repo-name`.

---

## Updating Content

All text content is in `index.html`. Use Ctrl+F / Cmd+F to find any section:

- Services: search for `id="services"`
- Hours: search for `id="hours"`
- About: search for `id="about"`
- How It Works: search for `id="getting-started"`
- Contact: search for `id="contact"`

Colors and fonts are defined in the `:root` block at the top of `style.css`.
