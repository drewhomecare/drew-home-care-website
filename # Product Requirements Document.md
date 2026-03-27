# Product Requirements Document
## Drew Home Care — Static Marketing Website

**Version:** 1.1  
**Status:** Draft  
**Intended Use:** Input for agentic coding assistant

---

## 1. Project Overview

Build a static, single-page marketing website for **Drew Home Care**, an in-home care business that manages caregivers who provide daily living support to elderly clients in their homes. The site's primary goal is to establish credibility, inform prospective clients and their families about available services, and make it easy to get in touch or get started.

Content marked *(placeholder)* should be replaced by the owner before launch. Branding (logo, colors, fonts) is defined in Section 6 and should be followed precisely.

---

## 2. Technology & Constraints

- **Type:** Static website (no backend, no CMS, no database)
- **Stack:** HTML, CSS, and vanilla JavaScript (or a lightweight React/Next.js setup if the agentic assistant prefers — must still be deployable as a static site, e.g. via Vercel, Netlify, or GitHub Pages)
- **Single page:** All sections on one scrollable page with smooth anchor navigation
- **Responsive:** Must work well on mobile, tablet, and desktop
- **Accessibility:** Semantic HTML, alt text on all images, keyboard-navigable
- **Performance:** Minimize external dependencies; no heavy JS frameworks unless necessary

---

## 3. Site Structure

All sections live on a single scrollable page. A sticky navigation bar at the top links to each section via anchor tags.

### Navigation Bar (Sticky)
- Business logo on the left: use the provided **Drew Home Care logo** (PNG file: `DHC_Logo_wCo.PNG`). Display at approximately 120px wide; preserve aspect ratio. Include alt text: "Drew Home Care logo".
- Nav links on the right: Home · Services · Hours & Location · About · Getting Started · Contact
- On mobile: collapses into a hamburger menu
- Includes a prominent CTA button: **"Call Us Today"** that triggers a `tel:` link

---

## 4. Section Requirements

---

### 4.1 Home / Hero

**Purpose:** Immediately communicate what the business does and invite action.

**Content (placeholder):**
- Headline: *"Compassionate In-Home Care for Your Loved Ones"*
- Subheadline: *"We connect trusted, professional caregivers with elderly individuals who want to remain comfortable and independent in their own homes."*
- Two CTA buttons:
  - Primary: **"Get Started"** → scrolls to Getting Started section
  - Secondary: **"Learn About Our Services"** → scrolls to Services section
- A warm, high-quality hero image (placeholder: stock photo of caregiver with elderly person)

---

### 4.2 Services

**Purpose:** Clearly list what caregivers provide so families know what to expect.

**Content (placeholder):**

Section title: *"What We Offer"*

Display as a card grid (3 columns on desktop, 1 on mobile). Each card has an icon, a title, and a short description.

| Service | Description (placeholder) |
|---|---|
| Medication Management | Reminders and assistance ensuring medications are taken correctly and on schedule. |
| Personal Care | Help with bathing, grooming, dressing, and maintaining personal hygiene with dignity. |
| Daily Living Assistance | Support with everyday tasks like meal preparation, light housekeeping, and laundry. |
| Companionship | Friendly conversation, activities, and emotional support to reduce isolation. |
| Mobility Support | Safe assistance with moving around the home, transfers, and fall prevention. |
| Errands & Transportation | Help getting to appointments, grocery shopping, and other outings. |

---

### 4.3 Hours & Location

**Purpose:** Let prospective clients know when and where the business operates.

**Content (placeholder):**

Section title: *"Hours & Service Area"*

**Business Hours:**
| Day | Hours |
|---|---|
| Monday – Friday | 8:00 AM – 6:00 PM |
| Saturday | 9:00 AM – 4:00 PM |
| Sunday | Closed |

*Note: Caregiver availability may vary. Contact us to discuss your specific scheduling needs.*

**Service Area:**  
*"We proudly serve [City Name] and surrounding communities within a [X]-mile radius, including [Neighborhood A], [Neighborhood B], and [Neighborhood C]."*

**Contact Info (placeholder):**
- Phone: `(555) 123-4567` — rendered as a `tel:` link
- Email: `hello@drewhomecare.com` — rendered as a `mailto:` link *(placeholder)*
- Address: `123 Main Street, Suite 100, [City], [State] 00000`

No map embed (owner does not want Google Maps integration at this stage).

---

### 4.4 About the Owner

**Purpose:** Build trust by humanizing the business with the owner's story.

**Content (placeholder):**

Section title: *"Meet [Owner Name]"*

Layout: Photo on one side, text on the other (stacks on mobile).

Body copy (placeholder):
> *"Hi, I'm [Owner Name], founder of Drew Home Care. I started this business because I've experienced firsthand how difficult it can be to find reliable, compassionate care for an aging loved one. My mission is simple: to make it easier for families to get the support they need, and to ensure every client is treated with the dignity and respect they deserve.*
>
> *With [X] years of experience in healthcare and caregiving, I personally vet every caregiver on our team. When you choose Drew Home Care, you're not just hiring a service — you're gaining a partner who truly cares."*

Placeholder profile photo with alt text: "Photo of [Owner Name], Founder."

---

### 4.5 Getting Started / Onboarding Process

**Purpose:** Reduce friction for prospective clients by walking them through exactly what happens after they reach out.

**Content (placeholder):**

Section title: *"How It Works"*

Display as a numbered step-by-step flow (horizontal timeline on desktop, vertical on mobile).

**Step 1 — Reach Out**  
*"Contact us by phone or through our form. We'll schedule a free, no-obligation consultation at a time that works for you."*

**Step 2 — In-Home Assessment**  
*"We come to your loved one's home to get a full picture of their needs, routines, and living environment. This helps us match them with the right caregiver."*

**Step 3 — Care Plan Creation**  
*"Together, we create a personalized care plan that outlines the specific services, schedule, and any special considerations for your loved one."*

**Step 4 — Meet Your Caregiver**  
*"We introduce you to your matched caregiver before services begin so everyone feels comfortable and confident."*

**Step 5 — Care Begins**  
*"Services start on your agreed schedule. We check in regularly to make sure everything is going smoothly and adjust the plan as needs change."*

CTA below the steps: **"Start the Conversation"** → scrolls to Contact section.

---

### 4.6 Contact Form

**Purpose:** Give prospective clients a simple way to reach out without picking up the phone.

**Content:**

Section title: *"Get in Touch"*

Short intro copy: *"Have questions or ready to get started? Fill out the form below and we'll get back to you within one business day."*

**Form Fields:**
- Full Name *(required)*
- Phone Number *(required)*
- Email Address *(required)*
- Best time to reach you — dropdown: Morning / Afternoon / Evening *(optional)*
- Message / Tell us about your situation *(optional, textarea)*
- Submit button: **"Send Message"**

**Implementation note:** Since this is a static site with no backend, wire the form to a free form handling service such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com). Use their `action` URL endpoint — no server-side code needed. Show a simple inline success message on submission.

**Also display contact info inline:**
- 📞 `(555) 123-4567` as a `tel:` link
- ✉️ `hello@drewhomecare.com` as a `mailto:` link *(placeholder)*

---

### 4.7 Footer

- Business name and tagline: *"Drew Home Care — Care you can count on."*
- Repeat nav links
- Phone and email links
- Copyright: *© 2025 Drew Home Care. All rights reserved.*
- Optional: placeholder social media icons (Facebook, Instagram) — links to `#` for now

---

## 5. Functional Requirements

| Feature | Requirement |
|---|---|
| Sticky navigation | Stays at top of viewport on scroll; highlights active section |
| Smooth scrolling | Anchor links scroll smoothly to sections |
| Mobile hamburger menu | Nav collapses on screens < 768px |
| Click-to-call | All phone numbers use `tel:` protocol |
| Click-to-email | All email addresses use `mailto:` protocol |
| Contact form | Submits via Formspree or Web3Forms; shows success state |
| No page reloads | All interactions handled client-side |

---

## 6. Design Direction & Branding

This section is **fully defined** and must be followed precisely by the coding assistant.

### 6.1 Logo

- File: `DHC_Logo_wCo.PNG` (provided asset)
- Usage: Display in the navbar (≈120px wide) and optionally in the footer (smaller, ≈80px wide)
- The logo consists of a house outline with a heart and stylized "D" inside, and the wordmark "Drew Home Care" below in bold
- Always display on a white or very light background so the blue reads clearly
- Do not recolor, crop, or alter the logo

### 6.2 Color Palette

Derived directly from the logo. These are the exact values to use:

| Role | Color | Hex |
|---|---|---|
| **Primary Brand Blue** | Logo blue | `#1A6FCC` |
| **Primary Dark** (text, headings) | Deep navy | `#0D3D6B` |
| **Primary Light** (hover states, tints) | Sky blue tint | `#E8F2FB` |
| **Accent** (CTA buttons, highlights) | Same brand blue | `#1A6FCC` |
| **Background** | Clean white | `#FFFFFF` |
| **Section Alt Background** | Very light blue-gray | `#F4F8FD` |
| **Body Text** | Dark gray | `#2D2D2D` |
| **Muted Text** (captions, labels) | Medium gray | `#6B7280` |
| **Border / Divider** | Light gray | `#E5E7EB` |

**Do not introduce any other colors.** The palette is blue and white only — this is the brand.

### 6.3 Typography

- **Headings:** `Nunito` (Google Fonts) — bold weight (700–800). Rounded, friendly, and pairs well with the logo's soft geometric style.
- **Body:** `Lato` (Google Fonts) — regular weight (400), medium (500) for emphasis. Clean and highly readable for an older audience.
- **Font sizes (desktop):**
  - H1 (hero): 48–56px
  - H2 (section titles): 32–36px
  - H3 (card titles): 20–22px
  - Body: 16–18px (lean toward 18px — the target audience includes elderly users and their families)
  - Small/caption: 14px

### 6.4 Visual Style

- **Overall tone:** Clean, professional, warm, and trustworthy. Inspired by the logo's simple geometric style.
- **Light mode only** — white backgrounds with blue accents. No dark mode.
- **Rounded corners** throughout (8–16px border-radius on cards, buttons, inputs) to match the logo's rounded aesthetic.
- **Buttons:**
  - Primary: solid `#1A6FCC` background, white text, rounded pill shape (border-radius: 50px), subtle hover darkening
  - Secondary: white background, `#1A6FCC` border and text, same pill shape
- **Cards (Services section):** White background, light drop shadow (`box-shadow: 0 2px 12px rgba(0,0,0,0.08)`), `#1A6FCC` icon color, rounded corners
- **Section alternation:** Alternate between white (`#FFFFFF`) and light blue-gray (`#F4F8FD`) backgrounds for visual rhythm
- **Icons:** Use Lucide Icons or Heroicons — outline style, colored `#1A6FCC`
- **No gradients, no dark overlays, no decorative patterns** — keep it clean and simple

### 6.5 Spacing & Layout

- Max content width: `1200px`, centered
- Section vertical padding: `80px` top and bottom on desktop, `48px` on mobile
- Generous whitespace — do not crowd elements
- The target audience includes seniors and their adult children; prioritize readability and clarity over density

### 6.6 Imagery

- Use placeholder stock photos (sourced from Unsplash or similar) showing caregivers and elderly individuals in warm, domestic settings
- Image style: bright, natural lighting, genuine and warm (not clinical or sterile)
- Owner will replace with real photos before launch

---

## 7. Out of Scope (v1)

The following are explicitly **not** included in this version:

- Blog or news section
- Client login / portal
- Online booking / scheduling system
- Google Maps embed
- Payment processing
- CMS or admin dashboard
- Live chat widget

---

## 8. Deliverables

- One deployable static website (single HTML file or folder of static assets)
- All sections above implemented with placeholder content
- Responsive layout (mobile, tablet, desktop)
- Form wired to Formspree or Web3Forms
- README with instructions on how to update placeholder content and deploy

---

*End of PRD v1.1*