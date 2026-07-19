# Kidzvidz Main App - Quick Start Guide

Since the packaged apps have permission issues on macOS, here's the easiest way to run the app:

## Option 1: Run Directly (Recommended)

### Requirements
- Node.js installed ([Download](https://nodejs.org/))

### Steps
1. Clone or download this repository
2. Open Terminal and navigate to this folder:
```bash
cd /path/to/kidzvidz-main
```

3. Install dependencies (first time only):
```bash
npm install
```

4. Start the app:
```bash
npm start
```

That's it! The app will launch automatically.

---

## Option 2: Rebuild the Packaged Version

If you want to try the packaged version again:

1. Make sure Electron binary has execute permissions:
```bash
chmod +x node_modules/electron/dist/Electron.app/Contents/MacOS/Electron
```

2. Start the app:
```bash
npm start
```

---

## Troubleshooting

### "Command not found: npm"
- Install Node.js from https://nodejs.org/
- Then try again

### "File is damaged" error
- Use Option 1 (Run Directly) instead - it works 100% reliably

---

## Features

✅ Apple TV-style sidebar navigation  
✅ Light & Dark Mode  
✅ Search functionality  
✅ Expandable menu with submenus  

Enjoy!
