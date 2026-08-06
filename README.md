# Zaman tyre Trader - Modern Tire Shop Website

A modern, responsive, and SEO-optimized website for Zaman tyre Trader, a tire shop in Wah Cantt, Pakistan. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Dunlop Tires website
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive SEO with meta tags, schema markup, and sitemap
- **Fast Performance**: Optimized images, lazy loading, and caching
- **Mobile-First**: Mobile-optimized with floating call button
- **Accessibility**: WCAG compliant with proper semantic HTML

## 📱 Pages

- **Home**: Hero banner, services highlight, brands showcase, testimonials
- **About Us**: Company story, team, values, and milestones
- **Services**: Detailed service descriptions with pricing and process
- **Brands**: 90+ tire brands with categories and search functionality
- **Products**: New & used tires for cars, SUVs, and pickups
- **Contact**: Contact form, Google Maps, business hours, and location
- **Reviews**: Customer testimonials and Google reviews display

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd zaman-tires-trader
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

The site builds as a **fully static export** (`output: "export"`), so the shared host only serves static files — no Node process runs, which keeps usage well below the host's process limit.

### Build for Production

```bash
npm install
npm run build
```

`prebuild` automatically dumps the SQLite database into `public/data/*.json`
(products, brands, diameters), so the exported pages are built with the latest
data. The output is written to the `out/` folder.

### Deploy to Shared Hosting (cPanel / CloudLinux)

1. Upload the contents of the `out/` folder to your document root (e.g. `public_html/`).
2. In cPanel, stop/remove the Node.js app (the site no longer needs it).
3. Optionally add `.htaccess` redirects for any old paths.

### Updating Products

The SQLite database is the source of truth. To publish changes:

1. Update the data in the database (edit `dev.db` locally, or replace it with the
   production database file).
2. Rebuild: `npm run build` (re-exports data automatically).
3. Re-upload the new `out/` folder.

> Tip: you can also regenerate the data files only, without a full rebuild:
> `node scripts/export-data.mjs`

> Note: `/admin` and the `/api/*` routes were removed in the static export — they
> require a Node server. Product updates now go through the rebuild flow above.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically (Vercel serves the static export with no server)

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`. Main colors:

- Primary: Blue (#2563eb)
- Secondary: Gray (#64748b)
- Accent: Red (#ef4444)

### Content

Update content in the respective component files:

- Business information in `components/Header.tsx`
- Services in `components/DetailedServices.tsx`
- Brands in `components/AllBrands.tsx`

### Images

Replace placeholder images in the `public` folder:

- `hero-tires.jpg` - Hero section background
- `og-image.jpg` - Social media preview image
- `icon-*.png` - PWA icons

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Schema Markup**: Local business schema for tire shop
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media preview optimization
- **Performance**: Core Web Vitals optimization

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://zamantyretrader.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

### Google Maps Integration

1. Get a Google Maps API key
2. Add it to your environment variables
3. Update the map embed in `components/GoogleMap.tsx`

## 📱 Mobile Features

- **Floating Call Button**: Quick access to phone number
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized for mobile networks
- **PWA Ready**: Progressive Web App capabilities

## 🎯 Business Information

- **Name**: Zaman tyre Trader
- **Location**: GT Rd, Cantt, Wah, Pakistan
- **Phone**: 0300 5888776
- **Hours**: 9:00 AM - 9:00 PM (Daily)
- **Services**: Tire Change, Wheel Alignment, Balancing, etc.
- **Brands**: 90+ tire brands available

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic code splitting for faster loads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
## 🆘 Deployed 
 - https://zamantyretrader.com/


## 🆘 Support

For support or questions:

- Email: contact@zamantyre.com
- Phone: 0300 5888776
- Visit: GT Rd, Cantt, Wah, Pakistan

---

Built with ❤️ for Zaman tyre Trader
