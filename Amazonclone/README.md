# Amazon Clone

A frontend e-commerce UI inspired by Amazon, built with React and Vite. Includes a working shopping cart, live product search, and full client-side routing across all major sections of the site.

## Features

- Product catalog with real-time search and filtering
- Add-to-cart functionality with a live item count and slide-out cart drawer
- Wishlist toggle on individual product cards
- Dedicated detail page for each product
- Routed navigation for Today's Deals, Customer Service, Registry, Gift Cards, and Sell
- Custom 404 page for undefined routes

## Tech Stack

| Category | Technology |
|---|---|
| Library | React 19 |
| Build Tool | Vite |
| Routing | React Router v7 |
| Language | JavaScript (JSX) |
| Styling | Inline CSS-in-JS |

## Project Structure

```
Amazonclone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Panel.jsx
│   │   ├── Hero.jsx
│   │   ├── ShopSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartDrawer.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductPage.jsx
│   │   ├── Deals.jsx
│   │   ├── CustomerService.jsx
│   │   ├── Registry.jsx
│   │   ├── GiftCards.jsx
│   │   ├── Sell.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Routes

| Path | Description |
|---|---|
| `/` | Home page with hero and product grid |
| `/product/:id` | Individual product detail page |
| `/deals` | Today's Deals |
| `/customer-service` | Customer Service |
| `/registry` | Registry |
| `/gift-cards` | Gift Cards |
| `/sell` | Sell on Amazon |
| `*` | 404 Not Found |

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
cd Amazonclone
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Production Build

```bash
npm run build
```

The optimized build output is generated in the `dist/` directory. Use `npm run preview` to test it locally before deploying.

## Deployment

The project is a static single-page application and can be deployed to any static hosting provider.

**Vercel (recommended)**
Push the repository to GitHub and import it at vercel.com. Vercel auto-detects the Vite configuration and handles client-side routing without additional setup.

**Netlify**
Set the build command to `npm run build` and the publish directory to `dist`. Add a `public/_redirects` file containing:

```
/*    /index.html   200
```

This ensures direct navigation to nested routes (e.g. `/deals`) does not return a 404.

## Notes

- Product data is static, sourced from `src/data/products.js`; no backend or API is used.
- Cart state and search state are managed centrally in `App.jsx` and passed down via props.
- Styling is implemented entirely with inline style objects rather than a CSS framework.

## Disclaimer

This project was built for educational purposes only and is not affiliated with, endorsed by, or connected to Amazon.com, Inc. All trademarks belong to their respective owners.