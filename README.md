# Aso & Thread

A five-page website for **Aso & Thread**, a fictional Lagos fashion label that cuts Nigerian cloth (aso-oke, adire, ankara, lace) into ready-to-wear, contemporary and traditional dress. Built as a portfolio concept with React, Vite, JavaScript and plain CSS.

> Aso & Thread is fictional. Products, prices, studio details and delivery terms are sample content. No customers, testimonials, press or partnerships are claimed.

## Run it

```bash
npm install
npm run dev       # development server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

The site uses client-side routing. `public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to `index.html`; other hosts need the same single-page fallback.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, intro, the collections, new arrivals, the cloth, how a WhatsApp order works |
| `/collections` | Product grid with collection, audience and sort filters (kept in the URL, e.g. `?c=traditional&for=men`) |
| `/product/:slug` | Reusable product page: gallery, colour and size selection, quantity, live WhatsApp message, add to bag |
| `/about` | Name, beliefs, process, cloth sources, photo credits |
| `/contact` | Contact details and a validated form |

## Before launch: placeholders to replace

- **WhatsApp number**: `src/config.js` → `WHATSAPP_NUMBER` is the placeholder `2340000000000` (shown as `+234 000 000 0000`). Replace it with the real business number in international format, digits only.
- **Email**: `hello@asoandthread.example` uses the reserved `.example` domain on purpose.
- **Social links** point at the platform home pages, not real accounts.
- **Products and prices**: `src/data/products.js`. Each colour can point at its own photograph via `image`.
- **Delivery rates, studio hours and lead times** on Home, Product and Contact are samples.
- **Contact form** validates in the browser only. With no message service connected, it prepares the message for the visitor's own email app or WhatsApp and says that nothing has been sent.
- **Photography**: every image in `public/images/` is from Unsplash and stands in for the label's own shoots. Credits are listed in `src/data/credits.js` and shown at `/about#credits`.

## How ordering works

Visitors choose colour, size and quantity. The product page shows the exact WhatsApp message as it is built (`src/components/OrderNote.jsx`). **Order on WhatsApp** opens `wa.me` with that message pre-filled. **Add to bag** collects several pieces (saved in `localStorage`), and the bag sends them as one message. There is no payment gateway.

## Structure

```
src/
  config.js            placeholder contact details
  data/                products, collections, photo credits
  lib/                 naira formatting, WhatsApp message builder
  context/BagContext   bag state (React context + reducer)
  hooks/               scroll entrances, scroll-scaled wordmark
  components/          Header, Footer, BagDrawer, Notice, ProductTile, OptionPicker, OrderNote, QuantityStepper
  pages/               Home, Collections, Product, About, Contact, NotFound
  styles/global.css    design tokens and base styles
```

Fonts (Anton, Work Sans) are self-hosted through `@fontsource`. Design decisions are recorded in `DESIGN.md`, product context in `PRODUCT.md`.
