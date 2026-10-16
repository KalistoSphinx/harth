# HARTH COFFEE — Premium Specialty Coffee Shop Website

A complete, responsive, visually polished specialty coffee shop website crafted with **HTML5, CSS3, and vanilla JavaScript**, with buttery smooth scrolling powered by **Lenis**.

Inspired by editorial typography, warm sunlit café spaces, and contemporary minimalist design principles.

---

## Features

- **Editorial Split Hero**: Left-aligned typography with an expressive serif headline (`Playfair Display`), warm brown accents, customer & location stats, and a high-resolution sunlit café photograph with delicate editorial typographic stamps.
- **Interactive Seasonal Menu**:
  - Four featured cards matching the reference aesthetic: *Classic Latte ($4.50)*, *Iced Vanilla ($5.00)*, *Avocado Toast ($8.50)*, and *Almond Croissant ($4.90)*.
  - Category filters (*All Items, Coffee, Cold Brew, All Day Kitchen, Bakery*).
  - Every card opens a full **Product Details Modal** containing high-res photography, complete description, ingredient pills, flavor profile tasting notes, dietary & allergen notices, size/customization selectors, and tasting sample feedback.
  - Full keyboard accessibility (Tab, Enter, Space to activate, Escape to dismiss) and background scroll locking.
- **Asymmetric "Our Story" Section**:
  - Deep espresso dark panel with brand mission.
  - Sunlit table photograph with coffee and curated Kinfolk publication.
  - Light cream panel with tracked editorial typography (*"GOOD PEOPLE / GOOD COFFEE / Always A Warmer Tomorrow"*).
- **Brand Values Bar**:
  - Clean horizontal strip detailing *Sustainably Sourced*, *Locally Roasted*, *Cozy Spaces*, and *Specialty Drinks* with custom lightweight line icons.
- **Locations & Directions**:
  - Three distinct café profiles (*Downtown Flagship*, *Arts District Roastery*, *West End Conservatory*) with hours, transit information, atmosphere notes, and interactive modal directions.
- **Newsletter Subscription**:
  - Client-side validation with helpful feedback explaining static behavior honestly.
- **Lenis Smooth Scroll**:
  - Silk-smooth scrolling with physics-based easing.
  - Intelligently pauses when modals are open to prevent background scrolling.
  - Fully respects `prefers-reduced-motion: reduce`.

---

## Project Structure

```text
harth-coffee/
├── index.html              # Semantic HTML5 markup and accessible modal dialogs
├── css/
│   └── style.css           # Design tokens, responsive grid, typography & animations
├── js/
│   ├── lenis.min.js        # Lenis smooth scroll engine
│   └── script.js           # Menu data, modal handlers, and interactions
├── assets/
│   └── images/             # High-resolution local image assets with warm editorial tone
└── README.md               # Documentation and customization guide
```

---

## How to Run

### Method 1: Python Built-in HTTP Server (Recommended)
Open your terminal in the `harth-coffee` folder:
```bash
python -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in any modern web browser.

### Method 2: Node.js `npx serve` or `http-server`
```bash
npx serve .
```

### Method 3: Direct File Opening
You can also directly double-click or open `index.html` in your browser.

---

## Customization Guide

### Updating Menu Items, Images, or Prices
All menu items are cleanly organized in `js/script.js` inside the `MENU_ITEMS` array:
```javascript
{
  id: 'classic-latte',
  name: 'Classic Latte',
  category: 'COFFEE',
  categoryKey: 'coffee',
  price: 4.50,
  tagline: 'Rich. Smooth. Timeless.',
  description: 'Double shot of our seasonal house espresso...',
  ingredients: [...],
  flavorProfile: [...],
  dietary: 'Vegetarian · Alternative milk available...',
  sizeOptions: ['8 oz Cortado size', '12 oz Standard', '16 oz Large'],
  customizations: [...],
  image: 'assets/images/latte.jpg',
  featured: true
}
```

### Updating Colors & Design Tokens
All color tokens and font variables are located at the top of `css/style.css` in `:root`:
- `--color-bg`: `#F4EBDD` (Soft Warm Cream)
- `--color-coffee-brown`: `#70452F` (Rich Roast Brown)
- `--color-text-primary`: `#261B16` (Deep Espresso Charcoal)
- `--color-dark-footer`: `#211914` (Espresso Dark Footer)

### Updating Locations & Contact Information
Modify `LOCATIONS_DATA` in `js/script.js` and the corresponding location markup in `index.html`.

---

## Accessibility & Performance

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>` patterns).
- Explicit `aria-label`, `aria-hidden`, `aria-expanded`, and `role` attributes on interactive elements.
- Keyboard navigation: Escape key closes all active modals, Tab navigates interactive elements with visible focus rings.
- Smooth scrolling automatically disabled for users with `prefers-reduced-motion` enabled.
- Fully responsive across desktop, tablet, and mobile screens without horizontal overflow.
