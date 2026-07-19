# Kidzvidz Main App

A modern, Apple TV-style desktop streaming app for Kidzvidz, built with Electron and React.

## Features

- **Light & Dark Mode**: Toggle between light and dark themes, with persistent preference
- **Navigation Menu**: Sidebar menu with main categories and submenu support (inspired by Apple TV)
- **Responsive Design**: Clean, modern UI that adapts to theme changes
- **Search**: Quick search functionality in the sidebar
- **User Profile**: User account management in the sidebar footer

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the React app:
```bash
npm run build
```

3. Start the app:
```bash
npm start
```

## Development

For development with auto-rebuild:
```bash
npm run dev
```

## Project Structure

```
kidzvidz_main/
├── main.js              # Electron main process
├── preload.js           # Electron preload script
├── build.js             # Build script for bundling React
├── public/
│   ├── index.html       # Main HTML file
│   ├── app.js           # Bundled React app (generated)
│   └── app.css          # Bundled CSS (generated)
├── assets/
│   └── icon.png         # App icon
└── src/
    ├── App.jsx          # Main React component
    ├── App.css          # App styles
    ├── index.jsx        # React entry point
    ├── index.css        # Global styles
    └── components/
        ├── Sidebar.jsx      # Navigation sidebar
        ├── Sidebar.css
        ├── MainContent.jsx  # Main content area
        └── MainContent.css
```

## Menu Structure

The app includes the following navigation items:

- **Home** - Welcome and overview
- **Apple TV** - Premium content
- **Formula 1** - Sports content
- **MLS** - Soccer content
- **Store** - Content store
- **Library** (expandable)
  - Recently Added
  - Movies
  - TV Shows
  - 4K HDR

## Theme System

The app supports both light and dark modes:

- **Light Mode**: Clean white interface with dark text
- **Dark Mode**: Dark interface with light text
- Toggle button in the sidebar footer
- Theme preference is saved to localStorage

## Customization

### Add New Menu Items

Edit `src/components/Sidebar.jsx` and add to the `menuItems` array:

```javascript
{ 
  id: 'new-item', 
  label: 'New Item', 
  icon: '🎬', 
  submenu: null 
}
```

### Change Colors

Edit the CSS files in `src/components/` and `src/` to customize:
- Light mode colors (white, light gray)
- Dark mode colors (dark background, light text)
- Highlight colors (blue for active states)

## Building for Distribution

To create a production build, use `electron-builder`:

```bash
npm install --save-dev electron-builder
```

Add to package.json:
```json
{
  "build": {
    "appId": "com.kidzvidz.main",
    "productName": "Kidzvidz",
    "files": [
      "main.js",
      "preload.js",
      "public/**/*",
      "assets/**/*",
      "node_modules/**/*"
    ],
    "mac": {
      "target": ["dmg", "zip"]
    },
    "win": {
      "target": ["installer", "portable"]
    }
  }
}
```

Then run:
```bash
electron-builder
```

## License

ISC
