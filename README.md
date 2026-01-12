# Dev Services Website

A modern, responsive React website showcasing professional development services with a configurable theme system.

## Features

- 🎨 **Configurable Theme System** - All colors, gradients, and shadows can be customized via `src/config/theme.json`
- 🚀 **Modern Design** - Beautiful UI with smooth animations and transitions
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- 🎯 **Service Showcase** - Comprehensive display of 8 development services

## Services Offered

1. **Web Development** - Custom web applications with modern technologies
2. **Mobile Development** - iOS and Android apps with native performance
3. **Web Design** - Beautiful, intuitive user interfaces
4. **Logo Design** - Professional brand identity creation
5. **Web Hosting** - Reliable hosting with 99.9% uptime
6. **API Development** - RESTful and GraphQL API services
7. **Web Redesign** - Modernization of existing websites
8. **Frontend Development** - React, Vue, and Angular solutions

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Customizing the Theme

The entire color scheme can be customized by editing `src/config/theme.json`:

```json
{
  "colors": {
    "primary": "#6366f1",
    "secondary": "#8b5cf6",
    "background": "#0f172a",
    ...
  },
  "gradients": {
    "primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    ...
  },
  "shadows": {
    "glow": "0 0 20px rgba(139, 92, 246, 0.1)",
    ...
  }
}
```

Simply change the values and the entire site will update automatically!

## Project Structure

```
whopsite/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── theme.json       # Theme configuration
│   ├── data/
│   │   └── services.js      # Services data
│   ├── hooks/
│   │   └── useTheme.js      # Theme hook
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Base styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom properties and modern layouts
- **JavaScript ES6+** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
