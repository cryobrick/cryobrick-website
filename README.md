# CryoBrick Website

Official website for CryoBrick - Secure, Affordable, Inconspicuous Bitcoin Custody.

## About

CryoBrick is a self-custodial Bitcoin wallet built for feature phones that turns your feature phone device into an air-gapped cold-storage device. No internet connection required, no personal information collected, no waiting for shipping, and the setup process is simple with zero cost for the user.

## Features

- **Plausible Deniability**: Looks like a normal feature phone
- **Air-Gapped Security**: Absolute physical separation from networks
- **Zero Cost**: No hardware purchase required
- **No Shipping**: Works on any feature phone
- **No Personal Information**: Complete privacy
- **Standard Support**: Full PSBT signing and Native SegWit support

## Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router
- **Markdown**: react-markdown
- **UI Components**: Radix UI

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── pages/          # Page components (LandingPage, BlogPost)
├── components/      # Reusable UI components
├── content/        # Markdown content (manifesto.md)
├── lib/            # Utility functions
└── App.tsx         # Main app component with routing
```

## License

© 2026 Cryobrick. All rights reserved.

---

_Secure. Affordable. Inconspicuous. Bitcoin Custody Reimagined._
