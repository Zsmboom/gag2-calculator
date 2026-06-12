# Website Template

A modern, responsive website template built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🌙 Dark mode support (via Tailwind)
- 🎭 Framer Motion animations
- 📝 TypeScript support
- 🔍 SEO optimized
- 📊 Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gamemuban
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── privacy/      # Privacy policy page
│   │   ├── disclaimer/   # Disclaimer page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   └── lib/              # Utility functions and configs
├── public/               # Static assets
└── docs/                 # Documentation
```

## Customization

### Update Site Metadata

Edit `src/app/layout.tsx` to update:
- Site title and description
- Meta tags
- Open Graph data
- Twitter card data

### Update Branding

1. Replace logo in `public/images/logo/logo.svg`
2. Update favicon in `public/favicon.svg` and `public/favicon.ico`
3. Update `src/components/Header.tsx` and `src/components/Footer.tsx` with your brand name

### Update Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Features**: Edit `src/components/Features.tsx`
- **About Page**: Edit `src/app/about/page.tsx`
- **Contact Page**: Edit `src/app/contact/page.tsx`

### Configure Analytics (Optional)

Update tracking IDs in `src/app/layout.tsx`:
- Google Analytics
- Google AdSense
- Microsoft Clarity

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the repository or contact us at your-email@example.com.
