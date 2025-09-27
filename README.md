# QR Code Generator - GitHub Pages Setup

This repository contains a QR Code Generator website with automatic redirect from the main domain to the application.

## 📁 Project Structure

```
web/
├── index.html              # Root redirect file (redirects to /qr-code-generator/)
├── qr-code-generator/      # Main QR Code Generator application
│   ├── index.html          # QR Code Generator main page
│   ├── style.css           # Application styling
│   ├── script.js           # QR generation functionality
│   ├── sw.js              # Service worker for offline support
│   └── README.md          # Detailed application documentation
└── README.md              # This file
```

## 🔄 How the Redirect Works

The root `index.html` file automatically redirects visitors from your main GitHub Pages domain (e.g., `https://username.github.io`) to the QR Code Generator application at `https://username.github.io/qr-code-generator/`.

### Redirect Methods Used:
1. **Meta Refresh**: `<meta http-equiv="refresh" content="0; url=/qr-code-generator/">`
2. **JavaScript Redirect**: `window.location.href = "/qr-code-generator/"` (fallback)
3. **Manual Link**: Users can click the link if automatic redirect fails

## 🚀 Deployment to GitHub Pages

1. **Upload all files** to your GitHub repository
2. **Enable GitHub Pages** in repository Settings → Pages
3. **Select "main" branch** as the source
4. Your site will be available at: `https://yourusername.github.io/`

## 🎯 Google AdSense Setup

For Google AdSense approval, use your main domain (`https://yourusername.github.io`) as the site URL. The redirect ensures that:
- Google crawlers reach your main domain
- Users are seamlessly redirected to your QR code generator
- AdSense can properly verify and serve ads on your site

## 🔧 Customization

To change the redirect destination, edit the `url` parameter in the root `index.html`:
```html
<meta http-equiv="refresh" content="0; url=/your-new-path/">
```

## 📱 Features

- ✅ Automatic redirect from root domain to QR code generator
- ✅ Fallback redirect methods for compatibility
- ✅ User-friendly loading screen with manual link
- ✅ Mobile responsive design
- ✅ Google AdSense optimized setup

---

**Made with ❤️ for seamless GitHub Pages deployment**

