/**
 * MyRepublic Package Configuration
 * Edit this file to update package data across the entire site.
 */

const PACKAGES = [
  {
    id: "sahabat",
    name: "SAHABAT",
    speed: 75,
    promoSpeed: null,
    promoDuration: null,
    price: 205350,
    devices: "3-5",
    badge: null,
    features: ["Cocok untuk keluarga kecil", "Streaming HD", "Browsing & Media Sosial", "Video Call"],
    popular: false,
  },
  {
    id: "neo",
    name: "NEO",
    speed: 100,
    promoSpeed: 200,
    promoDuration: 6,
    price: 233100,
    devices: "5-8",
    badge: null,
    features: ["Cocok untuk 5-8 device", "Streaming Full HD", "Work From Home", "Online Gaming Casual"],
    popular: false,
  },
  {
    id: "velo",
    name: "VELO",
    speed: 150,
    promoSpeed: 300,
    promoDuration: 6,
    price: 277500,
    devices: "10-20",
    badge: "🔥 PALING BANYAK DIPILIH",
    features: ["Cocok untuk 10-20 device", "Streaming 4K", "Online Gaming", "Work From Home"],
    popular: true,
  },
  {
    id: "nexus",
    name: "NEXUS",
    speed: 300,
    promoSpeed: 400,
    promoDuration: 6,
    price: 333000,
    devices: "20-30",
    badge: null,
    features: ["Cocok untuk 20-30 device", "Streaming 4K Multi-Room", "Competitive Gaming", "Video Conference HD"],
    popular: false,
  },
  {
    id: "prime",
    name: "PRIME",
    speed: 500,
    promoSpeed: null,
    promoDuration: null,
    price: 555000,
    devices: "30-40",
    badge: null,
    features: ["Cocok untuk 30-40 device", "Streaming 8K", "Low Latency Gaming", "Multiple Video Conference"],
    popular: false,
  },
  {
    id: "wonder",
    name: "WONDER",
    speed: 750,
    promoSpeed: null,
    promoDuration: null,
    price: 721000,
    devices: "40-50",
    badge: null,
    features: ["Cocok untuk 40-50 device", "Streaming 8K Multi-Screen", "Esports Level Gaming", "Smart Home Ready"],
    popular: false,
  },
  {
    id: "ultra",
    name: "ULTRA",
    speed: 1000,
    promoSpeed: null,
    promoDuration: null,
    price: 943500,
    devices: "50+",
    badge: "⚡ KECEPATAN PENUH",
    features: ["50+ device sekaligus", "1 Gbps Full Speed", "Zero Lag Gaming", "Enterprise Grade"],
    popular: false,
  },
];

const SALES = {
  name: "Farchan",
  fullName: "Farchan Widayatama",
  phone: "6282126281479",
  phoneDisplay: "082126281479",
  hours: "08:00 - 22:00",
  waBase: "https://wa.me/6282126281479",
  waGeneral: "https://wa.me/6282126281479?text=Halo%20saya%20berminat%20untuk%20pasang%20Wifi%20MyRepublic",
};

function formatPrice(price) {
  return "Rp " + price.toLocaleString("id-ID");
}

function getWaLink(packageName, speed, promoSpeed) {
  const msg = promoSpeed
    ? `Halo Farchan,\n\nSaya tertarik untuk memasang Wifi MyRepublic paket ${packageName} ${speed} Mbps (Promo Upgrade ${promoSpeed} Mbps).\n\nMohon informasi mengenai:\n- Ketersediaan area\n- Jadwal pemasangan\n- Detail promo yang berlaku\n\nTerima kasih.`
    : `Halo Farchan,\n\nSaya tertarik untuk memasang Wifi MyRepublic paket ${packageName} ${speed} Mbps.\n\nMohon informasi mengenai:\n- Ketersediaan area\n- Jadwal pemasangan\n\nTerima kasih.`;
  return `https://wa.me/${SALES.phone}?text=${encodeURIComponent(msg)}`;
}
