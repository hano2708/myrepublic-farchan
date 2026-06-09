# MyRepublic Landing Page by Farchan 🚀

Landing page untuk sales WiFi MyRepublic dengan design modern dan performa optimal.

## 📋 Struktur Project

```
myrepublic-farchan/
├── index.html              # Entry point utama
├── package.json            # NPM configuration
├── .gitignore             # Git ignore rules
├── README.md              # Dokumentasi ini
│
├── src/                   # Source code
│   ├── styles/
│   │   └── main.css       # Custom CSS (termasuk Tailwind custom)
│   └── scripts/
│       └── main.js        # JavaScript logic (modular)
│
├── config/
│   └── packages.js        # Package configuration (easily editable)
│
└── public/
    └── images/            # Static images (untuk images di masa depan)
```

## 🎯 Fitur Utama

- ✨ Design modern dengan gradient dan glass morphism
- 📱 Fully responsive (mobile-first)
- ⚡ Performance optimized (single CSS, single JS file)
- 🎬 Smooth scroll animations dan reveal effects
- 🧮 Internet speed calculator
- 📋 FAQ accordion
- 💬 WhatsApp CTA integration
- 📊 Stats counter dengan animasi
- 🗣️ Customer testimonials section

## 🚀 Quick Start

### Development

```bash
# Install dependencies (optional)
npm install

# Start local server
npm run dev

# Or use Python
python -m http.server 8000
```

Buka `http://localhost:8000` di browser.

### File Editing

- **Paket/Pricing**: Edit `config/packages.js`
- **Styling**: Edit `src/styles/main.css`
- **JavaScript**: Edit `src/scripts/main.js`
- **Content**: Edit `index.html`

## 📦 Deploy ke GitHub

```bash
# Initialize git (jika belum)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: MyRepublic landing page"

# Add remote (ganti USERNAME)
git remote add origin https://github.com/USERNAME/myrepublic-farchan.git

# Push
git branch -M main
git push -u origin main
```

## 🌐 Deploy ke Vercel

### Option 1: Via GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select GitHub repository `myrepublic-farchan`
4. Configure:
   - Framework: Other (Static)
   - Root Directory: `.` (default)
   - Build Command: (leave empty)
   - Output Directory: `.` (default)
5. Click Deploy ✅

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## 🔧 Environment Variables

Tidak ada environment variables yang diperlukan. Semua config ada di `config/packages.js`.

## 📝 Customization

### Update WhatsApp Number

Buka `config/packages.js` dan `index.html`, cari:
```javascript
phone: "6282126281479"
```
Ganti dengan nomor Anda.

### Update Paket Harga

Edit `config/packages.js` - ubah array `PACKAGES`.

### Update Warna & Font

Edit `src/styles/main.css` - ubah CSS variables di `:root`.

## 📊 Performance Tips

- CSS file sudah minified-ready
- JS file sudah optimized dengan IIFE modules
- Tailwind CSS diload via CDN
- Font diload via Google Fonts API
- Images folder siap untuk optimized images

## 🐛 Troubleshooting

### Path Error pada Local

Jika path tidak cocok, pastikan:
- Anda membuka `index.html` dari root folder
- Folder structure sesuai dengan yang ada

### CSS/JS tidak load di Vercel

Vercel akan auto-serve static files. Pastikan:
- Path di `index.html` relatif (sudah benar di struktur ini)
- Tidak ada build step yang diperlukan

## 📄 License

MIT © 2025 Farchan Widayatama

---

**Questions?** Contact via WhatsApp: [Chat Farchan](https://wa.me/6282126281479)
