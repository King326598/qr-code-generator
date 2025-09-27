// QR Code Generator JavaScript
class QRCodeGenerator {
    constructor() {
        this.qrCanvas = document.getElementById('qrCanvas');
        this.qrPlaceholder = document.getElementById('qrPlaceholder');
        this.urlInput = document.getElementById('urlInput');
        this.generateBtn = document.getElementById('generateBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.qrSize = document.getElementById('qrSize');
        this.errorMessage = document.getElementById('errorMessage');

        this.currentQRData = null;
        this.init();
    }

    init() {
        // Event listeners
        this.generateBtn.addEventListener('click', () => this.generateQR());
        this.urlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateQR();
            }
        });
        this.downloadBtn.addEventListener('click', () => this.downloadQR());
        this.copyBtn.addEventListener('click', () => this.copyQR());
        this.qrSize.addEventListener('change', () => this.updateQRSize());

        // Initialize AdSense ads
        this.initAdSense();
    }

    generateQR() {
        const url = this.urlInput.value.trim();

        // Validation
        if (!url) {
            this.showError('Please enter a valid URL');
            return;
        }

        if (!this.isValidUrl(url)) {
            this.showError('Please enter a valid URL (e.g., https://example.com)');
            return;
        }

        this.clearError();
        this.showLoading();

        try {
            // Generate QR Code
            const qr = qrcode(0, 'M'); // Error correction level M
            qr.addData(url);
            qr.make();

            // Get size from dropdown
            const size = parseInt(this.qrSize.value);

            // Create canvas
            const ctx = this.qrCanvas.getContext('2d');
            this.qrCanvas.width = size;
            this.qrCanvas.height = size;

            // Calculate module size
            const moduleSize = Math.floor(size / qr.getModuleCount());

            // Draw QR Code
            for (let row = 0; row < qr.getModuleCount(); row++) {
                for (let col = 0; col < qr.getModuleCount(); col++) {
                    ctx.fillStyle = qr.isDark(row, col) ? '#000000' : '#ffffff';
                    ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
                }
            }

            // Show canvas, hide placeholder
            this.qrCanvas.style.display = 'block';
            this.qrPlaceholder.style.display = 'none';

            // Enable buttons
            this.downloadBtn.disabled = false;
            this.copyBtn.disabled = false;

            // Store current QR data
            this.currentQRData = {
                url: url,
                qr: qr,
                size: size
            };

            this.hideLoading();

        } catch (error) {
            this.hideLoading();
            this.showError('Error generating QR code. Please try again.');
            console.error('QR Generation Error:', error);
        }
    }

    updateQRSize() {
        if (this.currentQRData) {
            this.qrSize.value = document.getElementById('qrSize').value;
            this.generateQR(); // Regenerate with new size
        }
    }

    downloadQR() {
        if (!this.currentQRData) return;

        const link = document.createElement('a');
        link.download = `qrcode-${Date.now()}.png`;
        link.href = this.qrCanvas.toDataURL('image/png');
        link.click();
    }

    async copyQR() {
        if (!this.currentQRData) return;

        try {
            // Copy canvas as image to clipboard
            this.qrCanvas.toBlob(async (blob) => {
                const item = new ClipboardItem({ 'image/png': blob });
                await navigator.clipboard.write([item]);

                this.showSuccess('QR Code copied to clipboard!');
            });
        } catch (error) {
            // Fallback: copy URL instead
            await navigator.clipboard.writeText(this.currentQRData.url);
            this.showSuccess('QR Code URL copied to clipboard!');
        }
    }

    isValidUrl(string) {
        try {
            const url = new URL(string);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (_) {
            return false;
        }
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.urlInput.style.borderColor = '#e53e3e';
    }

    clearError() {
        this.errorMessage.textContent = '';
        this.urlInput.style.borderColor = '#e2e8f0';
    }

    showLoading() {
        this.generateBtn.disabled = true;
        this.generateBtn.innerHTML = '<span class="spinner"></span>Generating...';
        this.generateBtn.classList.add('loading');
    }

    hideLoading() {
        this.generateBtn.disabled = false;
        this.generateBtn.innerHTML = 'Generate QR Code';
        this.generateBtn.classList.remove('loading');
    }

    showSuccess(message) {
        // Create temporary success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;

        const outputSection = document.querySelector('.output-section');
        outputSection.appendChild(successDiv);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    initAdSense() {
        // AdSense initialization is handled in HTML
        // This method can be used for additional ad setup if needed
        console.log('AdSense initialized');
    }
}

// Feature detection and initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check if QR Code library is loaded
    if (typeof qrcode === 'undefined') {
        console.error('QR Code library not loaded');
        document.getElementById('errorMessage').textContent = 'Error: QR Code library not loaded. Please refresh the page.';
        return;
    }

    // Initialize the QR Code Generator
    const qrGenerator = new QRCodeGenerator();

    // Add some URL examples for users
    const urlInput = document.getElementById('urlInput');
    urlInput.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'https://example.com';
        }
    });

    urlInput.addEventListener('blur', function() {
        if (!this.value) {
            this.placeholder = 'https://example.com';
        }
    });

    // Analytics and tracking (optional)
    qrGenerator.generateBtn.addEventListener('click', () => {
        // Track QR generation events
        if (typeof gtag !== 'undefined') {
            gtag('event', 'generate_qr', {
                'event_category': 'engagement',
                'event_label': 'qr_generation'
            });
        }
    });
});

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
