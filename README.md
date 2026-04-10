# Kidz Safari — Next.js Edition

A vibrant, Waldorf-inspired preschool website built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## 🚀 Getting Started

You'll need [Node.js](https://nodejs.org) version 18.17 or later installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

That's it. Edit any file under `app/` or `components/` and the page will hot-reload.

## 📁 Project Structure

```
kidz-safari-next/
├── app/
│   ├── layout.tsx           # Root layout (fonts, nav, footer)
│   ├── globals.css          # Tailwind + custom decorative styles
│   ├── page.tsx             # Home
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── curriculum/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx              # Sticky navigation
│   ├── Footer.tsx           # Footer with contact + socials
│   ├── Floaties.tsx         # Decorative bobbing emojis
│   └── ContactForm.tsx      # WhatsApp-connected form (client)
├── public/
│   ├── logo.png             # School logo
│   └── brochure.pdf         # ⚠️ Add your brochure here
├── tailwind.config.ts       # Brand colors live here
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## 🎨 Brand Colors

All colors are defined as Tailwind tokens in `tailwind.config.ts` under the `brand` namespace:

- `bg-brand-yellow` `#FFCB05`
- `bg-brand-green` `#1F5E2B`
- `bg-brand-green-deep` `#0F3D18`
- `bg-brand-red` `#E63946`
- `bg-brand-cream` `#FFF8E7`
- ...and more (orange, blue, purple, paw, ink)

Change them in one place and the whole site updates.

## 🛠️ Things to Customize Before Going Live

1. **Photos** — Hero, gallery, programs, and principal photos all use `picsum.photos` placeholders. Replace them by:
   - Saving your images in `public/` (e.g. `public/principal.jpg`)
   - Updating the `src` prop to `/principal.jpg` in the relevant `page.tsx` file
2. **Brochure PDF** — Drop your `brochure.pdf` into the `public/` folder. All download buttons already link to `/brochure.pdf`.
3. **Instagram URL** — In `components/Footer.tsx`, the Instagram link is currently `https://instagram.com/kidzsafari`. Update if your handle differs.
4. **Phone number** — If you ever change the WhatsApp number, search for `919711333568` in `components/ContactForm.tsx` and `components/Footer.tsx`.

## 📦 Building for Production

```bash
npm run build
npm start
```

## ☁️ Deployment

The easiest path is **Vercel** (made by the creators of Next.js):

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com), sign up free, click "New Project"
3. Import your repo → Vercel auto-detects Next.js → Deploy
4. You get a free URL like `kidz-safari.vercel.app`. Connect your custom domain in settings.

Alternatives: Netlify, Railway, Cloudflare Pages, or any Node host.

## 🧩 How the Floaties Work

The decorative bobbing emojis are a single component:

```tsx
<Floaties variant="toys" />
```

Available variants: `toys`, `books`, `nature`, `animals`, `party`, `services`, `india`, `faq`. Add new ones by editing `components/Floaties.tsx`. Their positions and animation live in `app/globals.css` under the `.floaties` rules.

## 💬 Contact Form

The form on the contact page is a client component (`components/ContactForm.tsx`) that opens WhatsApp with a pre-filled message addressed to `+91 97113 33568`. No backend needed.
# kidz-safari
