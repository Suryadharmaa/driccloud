# Driccloud — Landing Page

Frontend statis Driccloud dengan pemesanan melalui [@DriccloudBot](https://t.me/DriccloudBot).

## Jalankan lokal

Gunakan Node.js 20.19 atau lebih baru. Tidak ada dependensi yang perlu diinstal.

```sh
npm run dev
```

Buka http://127.0.0.1:4173.

## Build

```sh
npm run build
```

Upload isi folder `dist/` ke hosting statis. Untuk hosting langsung dari repository, `index.html` dan `styles.css` tersedia di root.

Semua CTA pemesanan mengarah ke Telegram sesuai paket. Repository ini hanya berisi frontend; tidak membutuhkan token bot, database, atau variabel lingkungan.
