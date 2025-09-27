# QR Code Generator - Free Online Tool

A simple, fast, and free QR code generator website that allows users to create QR codes from any web link. Built with vanilla HTML, CSS, and JavaScript for optimal performance and zero hosting costs.

![QR Code Generator](https://via.placeholder.com/800x400/667eea/white?text=QR+Code+Generator)

## ✨ Features

- **Free QR Code Generation**: Create QR codes from any valid URL
- **Multiple Sizes**: Choose from small (200px), medium (300px), or large (400px) QR codes
- **Download Support**: Save QR codes as PNG images
- **Copy to Clipboard**: Copy QR codes directly to clipboard
- **Mobile Responsive**: Works perfectly on all devices
- **Fast & Lightweight**: No server processing required
- **Clean UI**: Modern, intuitive interface

## 🚀 Quick Start

### Local Development

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start generating QR codes!

### GitHub Pages Deployment

Follow these steps to deploy your QR Code Generator to GitHub Pages for free:

#### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner → "New repository"
3. Name your repository (e.g., `qr-code-generator`)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (since you already have one)
6. Click "Create repository"

#### Step 2: Upload Your Files

**Option A: Using Git (Recommended)**
```bash
# Clone your new repository
git clone https://github.com/yourusername/qr-code-generator.git

# Copy your project files to the repository
cp -r /path/to/your/qr-code-generator/* /path/to/qr-code-generator/

# Add files to git
cd qr-code-generator
git add .

# Commit files
git commit -m "Initial commit: QR Code Generator"

# Push to GitHub
git push origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all your project files (`index.html`, `style.css`, `script.js`)
4. Click "Commit changes"

#### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (tab)
2. Scroll down to **Pages** section
3. Under **Source**, select **"main"** branch
4. Click **Save**
5. Your site will be available at: `https://yourusername.github.io/qr-code-generator/`

#### Step 4: Custom Domain (Optional)

To use a custom domain:
1. Buy a domain from Namecheap, GoDaddy, etc. (~$10/year)
2. In your repository Settings → Pages
3. Under **Custom domain**, enter your domain
4. Follow the instructions to configure DNS

## 📁 Project Structure

```
qr-code-generator/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks, pure JS
- **QR Code Library**: [qrcode-generator](https://github.com/davidshimjs/qrcodejs)
- **Google Fonts**: Inter font family

## 💰 Monetization (Google AdSense)

This project is set up for Google AdSense integration:

### AdSense Setup Steps:

1. **Create AdSense Account**:
   - Go to [adsense.google.com](https://adsense.google.com)
   - Sign up with your Google account

2. **Add Your Site**:
   - In AdSense dashboard, click "Add site"
   - Enter your GitHub Pages URL (e.g., `yourusername.github.io`)

3. **Get Ad Code**:
   - Create ad units in AdSense
   - Copy the ad code to `index.html`

4. **Replace Placeholder Code**:
   - In `index.html`, replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID
   - Replace slot IDs with your actual ad slot IDs

### Ad Placement Strategy:
- **Banner Ad**: Top of page (728x90)
- **Responsive Ad**: Sidebar/bottom for mobile
- **Non-intrusive**: Doesn't interfere with QR generation

## 🎯 SEO Optimization

The site is optimized for search engines:

- **Meta Description**: Clear, keyword-rich description
- **Semantic HTML**: Proper heading structure
- **Fast Loading**: Minimal resources
- **Mobile-Friendly**: Responsive design
- **Keywords**: QR code, generator, free, online tool

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
}
```

### Adding Features
- **Logo**: Add to header in `index.html`
- **Analytics**: Add Google Analytics script
- **Social Links**: Add to footer

## 🐛 Troubleshooting

**QR Code Not Generating:**
- Check browser console for errors
- Ensure URL is valid (starts with http:// or https://)
- Try refreshing the page

**GitHub Pages Not Working:**
- Wait 2-3 minutes after enabling Pages
- Check repository is public
- Ensure all files are uploaded
- Check spelling of repository name in URL

**AdSense Not Showing Ads:**
- Wait 24-48 hours for approval
- Ensure ad code is correctly placed
- Check browser doesn't block ads

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Support

If you find this project helpful, please consider:
- Starring the repository
- Sharing with others
- Reporting bugs or suggesting features

---

**Made with ❤️ for the open source community**
