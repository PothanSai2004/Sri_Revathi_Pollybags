# Sri Revathi Pollybags — Corporate Manufacturing Website

Build a world-class, premium, enterprise-grade corporate website for **Sri Revathi Pollybags**, a subsidiary of Sri Revathi Enterprises. The site must look comparable to modern industrial corporations (think Apple/Stripe/Vercel polish applied to industrial manufacturing).

---

## User Review Required

> [!IMPORTANT]
> **Contact details**: The spec requires phone, WhatsApp, email, and social media URLs loaded from environment variables. I'll create a `.env.local.example` file with placeholder keys. You'll need to fill in your actual values before deploying. Is that acceptable?

> [!IMPORTANT]
> **Images**: Since we don't have real factory/product/founder photos, I will generate placeholder images using AI image generation for the hero, products, founder, factory, and team sections. You can swap these with real photos later. The folder structure will be `public/images/`.

> [!IMPORTANT]
> **Google Maps**: I'll embed a Google Maps iframe centered on Chittoor, AP. No API key is needed for a basic embed. If you want an interactive Maps integration, you'd need a Google Maps API key.

> [!IMPORTANT]  
> **TailwindCSS Version**: The spec requests TailwindCSS. I'll use **TailwindCSS v4** (the latest, bundled with Next.js 15). Please confirm if you'd prefer v3 instead.

---

## Open Questions

> [!NOTE]
> **Founder photo**: Do you have a real photo of T. Muninagaraju to use, or should I generate a professional placeholder?

> [!NOTE]
> **Client logos**: Do you have logos of actual clients, or should I create generic professional placeholder logos?

> [!NOTE]
> **Factory video for hero**: Do you have a factory video file, or should I use a static image with parallax as the hero background?

---

## Proposed Changes

### Project Setup

#### [NEW] `d:\SRE\sri-revathi-pollybags\` (entire project)

- Initialize with `npx -y create-next-app@latest ./` (Next.js 15, TypeScript, TailwindCSS, App Router, ESLint)
- Install dependencies: `framer-motion`, `lucide-react`
- Create `.env.local.example` with all contact/social environment variable keys

**Tech Stack:**
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15 | Framework (App Router) |
| TypeScript | 5.x | Language |
| TailwindCSS | v4 | Styling |
| Framer Motion | 12.x | Animations |
| Lucide React | Latest | Icons |

---

### Design System & Global Styles

#### [NEW] `tailwind.config.ts`
Custom theme extending TailwindCSS with:
- **Primary**: `#0B3D91` (deep industrial blue)
- **Secondary**: `#F97316` (vibrant orange accent)
- **Background**: `#FFFFFF`
- **Neutral**: `#F8FAFC`
- **Typography**: Montserrat (headings), Inter (body) via Google Fonts
- Custom spacing, border-radius, and shadow tokens

#### [NEW] `src/app/globals.css`
- TailwindCSS directives
- Custom CSS for smooth scrolling, cursor glow effect, scrollbar styling
- Custom animations (fade-in, slide-up, counter-spin, etc.)

#### [NEW] `src/app/layout.tsx`
- Root layout with Google Fonts (Montserrat + Inter)
- Global metadata for SEO (title, description, keywords, Open Graph, Twitter cards)
- JSON-LD schema markup (Organization, LocalBusiness, Product)
- Navbar and Footer components
- Loading animation wrapper

---

### Shared Components (`src/components/`)

#### [NEW] `src/components/Navbar.tsx`
- Sticky glassmorphic header with logo + navigation
- Mobile hamburger menu with slide-in drawer
- Active link highlighting, scroll-aware background change

#### [NEW] `src/components/Footer.tsx`
- Multi-column footer (Company, Products, Quick Links, Contact)
- Contact info loaded from env vars
- Social media icons, copyright notice

#### [NEW] `src/components/AnimatedCounter.tsx`
- Scroll-triggered number counter with Framer Motion
- Supports suffix (+, %) and prefix formatting

#### [NEW] `src/components/SectionHeading.tsx`
- Reusable section title with subtitle, decorative accent line
- Scroll-reveal animation

#### [NEW] `src/components/ScrollReveal.tsx`
- Wrapper component using Framer Motion `useInView` for scroll-triggered reveals
- Configurable direction (up, down, left, right), delay, duration

#### [NEW] `src/components/MagneticButton.tsx`
- Button with magnetic hover effect (follows cursor within bounds)
- Premium gradient backgrounds, hover elevation

#### [NEW] `src/components/ProductCard.tsx`
- Card with image, title, description
- Hover elevation + subtle scale animation

#### [NEW] `src/components/ProcessTimeline.tsx`
- Interactive vertical/horizontal timeline for manufacturing process
- Step-by-step reveal on scroll with numbered nodes

#### [NEW] `src/components/TestimonialCard.tsx`
- Client testimonial with avatar, name, company, quote
- Subtle card elevation effect

#### [NEW] `src/components/Gallery.tsx`
- Masonry grid layout with category filter tabs
- Lightbox modal with zoom, navigation, close
- Smooth transition animations

#### [NEW] `src/components/LoadingScreen.tsx`
- Full-screen loading animation with company logo
- Smooth fade-out on page load

#### [NEW] `src/components/WhatsAppCTA.tsx`
- Floating WhatsApp button (bottom-right corner)
- Pulse animation, loads number from env var

---

### Page 1: Homepage (`src/app/page.tsx`)

Sections (in order):
1. **Hero** — Full-viewport with factory image background, dark overlay, headline, subheadline, two CTA buttons ("Request a Quote", "Explore Products"), parallax effect
2. **About Preview** — Brief company intro with image, "Learn More" link
3. **Stats Bar** — Animated counters (10,000+ bags/day, 2020+ est., 3+ states, 100+ clients)
4. **Products Overview** — Grid of top 6 product categories with cards, "View All Products" CTA
5. **Manufacturing Process** — Interactive process timeline (9 steps)
6. **Why Choose Us** — Premium card grid with icons (10 reasons)
7. **Women Empowerment** — Emotional storytelling section with image + text
8. **Sustainability** — Infographic-style section with eco stats
9. **Clients & Testimonials** — Logo carousel + testimonial slider
10. **CTA Section** — "Request a Quote" with gradient background

---

### Page 2: About (`src/app/about/page.tsx`)

Sections:
1. **Page Hero** — "About Sri Revathi Pollybags" with breadcrumb
2. **Company Story** — Vision, mission, founded 2020, parent company
3. **Founder Section** — T. Muninagaraju bio, image, vision statement, journey timeline
4. **Women Empowerment** (detailed) — DWAKRA SHG employment, financial independence, skill development, CSR-quality presentation
5. **Sustainability** (detailed) — Environmental commitment, eco-friendly PP bags
6. **Registrations** — GST, MSME badges

---

### Page 3: Products (`src/app/products/page.tsx`)

Sections:
1. **Page Hero** — "Our Products" with breadcrumb
2. **Product Categories Grid** — All 12 product types with images, descriptions
3. **Customization Options** — Visual cards for all 8 customization capabilities
4. **Bulk Order CTA** — Premium call-to-action for bulk orders

---

### Page 4: Manufacturing (`src/app/manufacturing/page.tsx`)

Sections:
1. **Page Hero** — "Manufacturing Excellence"
2. **Process Timeline** — Full 9-step interactive timeline with details
3. **Infrastructure** — Machinery showcase (4 machine types) with images
4. **Stats Section** — Animated counters
5. **Quality Assurance** — QA process and commitment

---

### Page 5: Gallery (`src/app/gallery/page.tsx`)

Sections:
1. **Page Hero** — "Gallery"
2. **Category Filter** — Tabs: All, Factory, Machinery, Team, Products, Process
3. **Masonry Grid** — Filtered image grid with lightbox

---

### Page 6: Contact (`src/app/contact/page.tsx`)

Sections:
1. **Page Hero** — "Contact Us"
2. **Contact Info Cards** — Phone, Email, Address, Business Hours (from env vars)
3. **Contact Form** — Name, Email, Phone, Subject, Message, Submit
4. **Google Maps Embed** — Chittoor location
5. **WhatsApp CTA** — Direct chat button

---

### Environment Configuration

#### [NEW] `.env.local.example`
```
NEXT_PUBLIC_PHONE="+91XXXXXXXXXX"
NEXT_PUBLIC_WHATSAPP="+91XXXXXXXXXX"
NEXT_PUBLIC_EMAIL="info@srirevathipollybags.com"
NEXT_PUBLIC_ADDRESS="Chittoor, Andhra Pradesh, India - 517002"
NEXT_PUBLIC_FACEBOOK_URL=""
NEXT_PUBLIC_INSTAGRAM_URL=""
NEXT_PUBLIC_LINKEDIN_URL=""
NEXT_PUBLIC_TWITTER_URL=""
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=""
```

---

### SEO & Metadata

- **Root layout**: Organization schema, site-wide meta tags
- **Per-page metadata**: Unique title, description, keywords for each page
- **Schema markup**: LocalBusiness, Product, Organization JSON-LD
- **Open Graph & Twitter cards** per page
- **Sitemap** via Next.js built-in
- **robots.txt** configuration

---

### AI-Generated Images

I'll generate the following images using the image generation tool:
1. Hero background (factory/industrial setting)
2. Product images (PP woven bags varieties)
3. Manufacturing process images
4. Founder placeholder
5. Women empowerment section image
6. Sustainability section image

---

## Verification Plan

### Automated Tests
```bash
npm run build   # Verify production build succeeds with no errors
npm run lint    # ESLint passes
```

### Manual Verification
- Run `npm run dev` and verify all pages load correctly
- Test responsive design at mobile (375px), tablet (768px), desktop (1440px)
- Verify all animations trigger on scroll
- Verify environment variables load correctly
- Check Lighthouse score targets (Performance > 95, Accessibility > 95, SEO > 95)
- Verify all navigation links work
- Test contact form submission UX
