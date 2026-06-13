# Sri Revathi Pollybags – Corporate Website

## 📌 Project Summary
A premium, enterprise‑grade corporate website for **Sri Revathi Pollybags**, a subsidiary of **Sri Revathi Enterprises**.  The site showcases the manufacturing process, product catalogue, social impact, and contact information.  Built with **Next.js 15 (App Router)**, **TypeScript**, **TailwindCSS v4**, **Framer Motion**, and **Lucide‑React**.

---

## 📁 Repository Structure
```
├─ .env.local               # Runtime values (see below)
├─ .env.local.example       # Template you can copy to .env.local
├─ next.config.ts           # Image config (formats + qualities)
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ public/
│   ├─ favicon.svg          # SVG favicon
│   └─ images/              # AI‑generated images (replace with real assets)
├─ src/
│   ├─ app/
│   │   ├─ layout.tsx       # Root layout – fonts, SEO, JSON‑LD, favicon
│   │   ├─ page.tsx         # Home page
│   │   ├─ about/           # About page + metadata
│   │   ├─ products/        # Products page + metadata
│   │   ├─ manufacturing/   # Manufacturing page + metadata
│   │   ├─ gallery/         # Gallery page + metadata
│   │   └─ contact/         # Contact page + metadata
│   └─ components/          # Reusable UI components
│       ├─ Navbar.tsx
│       ├─ Footer.tsx
│       ├─ ScrollReveal.tsx
│       ├─ AnimatedCounter.tsx
│       ├─ SectionHeading.tsx
│       ├─ PageHero.tsx
│       ├─ WhatsAppCTA.tsx
│       └─ LoadingScreen.tsx
├─ globals.css               # Tailwind + custom utilities (glassmorphism, gradients)
└─ .gitignore
```
---

## ⚙️ Prerequisites (Windows)
- **Portable Node.js** is already extracted at `D:\SRE\nodejs\node-v22.16.0-win-x64`.  No global install is required.
- **PowerShell** (default shell on Windows).

> **⚡ Tip:** If you encounter the *execution‑policy* error when running `npm` commands, use the Windows‑specific `npm.cmd` wrapper instead of the `npm` alias (see the *Running Commands* section).

---

## 🚀 Running the Project Locally
### 1. Set the Node.js path (once per terminal session)
```powershell
$env:Path = "D:\SRE\nodejs\node-v22.16.0-win-x64;" + $env:Path
```
### 2. Install dependencies (only needed the first time or after adding packages)
```powershell
npm install          # or `npm.cmd install` if you hit the execution‑policy error
```
### 3. Development server
```powershell
npx next dev --port 3000   # starts the site at http://localhost:3000
```
Open the URL in a browser – you should see the full homepage with all sections.

### 4. Production build (optional)
```powershell
npm run build        # creates an optimized .next folder
npm start            # serves the built site on http://localhost:3000
```
---

## 🔧 Editing Environment Variables
All dynamic contact/social data is read from **`.env.local`** using `process.env.NEXT_PUBLIC_*`.

1. Copy the template if the file does not exist:
```powershell
Copy-Item .env.local.example .env.local
```
2. Edit `.env.local` with your real values (any text editor will do).  Example:
```env
NEXT_PUBLIC_PHONE=+919876543210
NEXT_PUBLIC_WHATSAPP=+919876543210
NEXT_PUBLIC_EMAIL=info@srirevathipollybags.com
NEXT_PUBLIC_ADDRESS="Chittoor, Andhra Pradesh, India - 517002"

NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourprofile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/yourcompany
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?...   # Replace with your factory embed URL
```
3. **Restart** the dev server (`Ctrl+C` → `npx next dev`) for the new values to take effect.

### Where the vars are used
- **Contact cards** on `/contact`
- **Footer** social icons
- **WhatsAppCTA** floating button
- **Google Maps** iframe on the Contact page
- **Open Graph / JSON‑LD** schema (social URLs) in `src/app/layout.tsx`
---

## 🧪 Testing the Site
### Quick sanity‑check script (PowerShell)
```powershell
$pages = @("/", "/about", "/products", "/manufacturing", "/gallery", "/contact")
foreach ($p in $pages) {
  try {
    $r = Invoke-WebRequest -Uri "http://localhost:3000$p" -TimeoutSec 30 -UseBasicParsing
    Write-Host "$p - Status: $($r.StatusCode) - Size: $($r.Content.Length) bytes"
  } catch {
    Write-Host "$p - ERROR: $_"
  }
}
```
All routes should return **200**.

### Visual review
Open the site and scroll through the following sections (each has its own micro‑animation):
- Hero
- Stats Bar
- About Preview
- Products showcase
- Manufacturing Process timeline
- Why Choose Us
- Women Empowerment
- Sustainability
- Testimonials & CTA
- Footer
If you see any layout breakage, broken image links, or text overflow, please let me know.
---

## 🛠️ Known Issues & Fixes (Windows)
| Symptom | Cause | Fix |
|---------|-------|-----|
| `npm : File ...\npm.ps1 cannot be loaded because running scripts is disabled` | PowerShell execution‑policy blocks the `npm` shim script. | Use the Windows‑specific wrapper: `npm.cmd`. Example: `npm.cmd install`, `npm.cmd run lint`. |
| Image quality warning (`Image … is using quality "90" which is not configured in images.qualities`) | `next.config.ts` missing `qualities`. | Already fixed – `qualities: [75,85,90]` added. |
| Favicon not showing | Favicon placed in `src/app/favicon.svg` but not in `public`. | Run `Copy-Item src/app/favicon.svg public/favicon.svg`. Already executed. |
| Build fails | None – the latest `npm run build` completed successfully (`Compiled successfully`). |
| Lint fails on Windows | Same execution‑policy issue as above. Use `npm.cmd run lint`. |
---

## 📦 Deploying (optional)
1. Push the repo to Git (GitHub, GitLab, etc.).
2. Connect the repo to **Vercel** (or any Node‑compatible host).  Vercel auto‑detects Next.js and respects the environment variables you set in the dashboard.
3. Add the same env vars in the Vercel project settings.
4. Deploy – Vercel will build (`npm run build`) and serve the site at a public URL.
---

## 🎯 Future Enhancements (quick ideas)
- Replace AI‑generated placeholder images with real product/factory photos.
- Add a **blog** for SEO content marketing.
- Hook the contact form up to an email service (SendGrid, Mailgun, etc.).
- Implement a **dark‑mode toggle** using Tailwind’s `media` strategy.
- Add a **client testimonial carousel** with dynamic data.
---

## ✅ All Done!
You now have a fully functional, premium‑looking corporate website that can be run locally, tested, and deployed.  Edit the `.env.local` file to personalize contact details, and you’re ready to go.

If you need any further code review, additional features, or run into a new error, just let me know!
