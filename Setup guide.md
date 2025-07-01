# SimplerNote

## Prerequisites

1. **Install Node.js** (version 16 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - This includes npm (Node Package Manager)

## Setup Steps

### 1. Create Project Directory
```bash
mkdir simplenote-clone
cd simplenote-clone
```

### 2. Create Project Files
Create the following files in your project directory:

- `package.json` (use the package.json artifact above)
- `main.js` (use the main.js artifact above)  
- `preload.js` (use the preload.js artifact above)
- `index.html` (use the updated HTML artifact above)

### 3. Install Dependencies
```bash
npm install
```

This will install Electron and Electron Builder based on the package.json.

### 4. Optional: Add Application Icon
- Create an `icon.png` (256x256 pixels) for the app icon
- For Windows builds, also create an `icon.ico` file
- Place these in the root directory

### 5. Run the Application
```bash
npm start
```

## Building for Distribution

### Build for Current Platform
```bash
npm run dist
```

### Build Installer (Windows)
```bash
npm run build
```

This creates a Windows installer in the `dist` folder.

## Features Added with Electron

### Markdown Support
- **Edit Mode**: Pure markdown editing
- **Split Mode**: Side-by-side editing and preview
- **Preview Mode**: Full markdown preview
- Real-time markdown rendering using the Marked library

### Enhanced File Operations
- **Import**: File → Import Note (supports .txt, .md, .markdown)
- **Export**: File → Export Note (saves as .md files with proper dialog)
- **Native file dialogs**: Proper Windows file save/open dialogs

### Keyboard Shortcuts
- `Ctrl+N`: New Note
- `Ctrl+S`: Save Note
- `Ctrl+E`: Export Note
- `Ctrl+F`: Focus Search
- `Ctrl+1`: Edit Mode
- `Ctrl+2`: Split Mode  
- `Ctrl+3`: Preview Mode

### Menu Integration
- Full application menu with File, Edit, View, and Help menus
- Context-appropriate menu items
- Proper keyboard accelerators

## Project Structure
```
simplenote-clone/
├── package.json          # Project configuration
├── main.js              # Electron main process
├── preload.js           # Secure bridge between main and renderer
├── index.html           # Application UI
├── icon.png             # App icon (optional)
├── icon.ico             # Windows icon (optional)
├── node_modules/        # Dependencies (created by npm install)
└── dist/                # Built application (created by npm run dist)
```

## Markdown Features Supported

- **Headers**: `#`, `##`, `###`, etc.
- **Emphasis**: `**bold**`, `*italic*`
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code**: `` `inline` `` or ``` code blocks ```
- **Blockquotes**: `> quote`
- **Tables**: Standard markdown tables
- **Horizontal Rules**: `---`

## Data Storage

Notes are stored locally using the browser's localStorage, making the app completely offline and private. No data is sent to any servers.

## Customization

You can customize the app by modifying:
- **Styles**: Update the CSS in `index.html`
- **Menu items**: Modify the menu template in `main.js`
- **Keyboard shortcuts**: Change accelerators in the menu template
- **Window settings**: Adjust window options in `createWindow()` function

## Troubleshooting

**App won't start**: Make sure you have Node.js installed and ran `npm install`

**Build fails**: Ensure all files are in the correct locations and try deleting `node_modules` and running `npm install` again

**Can't save files**: The app needs write permissions to the chosen directory

## Distribution

The built application (`npm run dist`) creates a standalone executable that can be distributed to other Windows machines without requiring Node.js installation.