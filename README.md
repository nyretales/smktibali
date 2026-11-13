# Company Profile SMK TI Bali Global Singaraja

Website statis company profile dengan **Tailwind CSS v4** dan pendekatan **Mobile-First**.

## Teknologi
- HTML statis
- Tailwind CSS v4 (utility classes dan responsive variants `sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- CSS komponen khusus untuk overlay foto, efek visual, dan animasi
- JavaScript vanilla untuk hero slider, swipe, hover/touch card, dan animated counters

## Menjalankan secara lokal
1. Install Node.js LTS.
2. Buka terminal pada folder proyek ini.
3. Jalankan `npm install`.
4. Jalankan `npm run build` untuk membangun CSS Tailwind production.
5. Buka `index.html` melalui local server (misalnya VS Code Live Server).

Untuk pengembangan sambil mengubah class Tailwind, jalankan `npm run dev`.

## Deploy ke Vercel
- Import repository proyek ke Vercel.
- Framework Preset: **Other**.
- Build Command: `npm run build`.
- Output Directory: `.` (folder proyek ini).
- Pastikan `index.html`, `assets/`, `src/`, dan `package.json` berada di root repository.

CSS production yang sudah dibangun tersedia di `assets/css/tailwind.css`, sehingga website tetap dapat dibuka langsung sebagai website statis. Jalankan build lagi setelah mengubah utility classes.

## Responsive behavior
- Default: mobile.
- `sm:`: layar kecil/tablet.
- `md:`: tablet dan layar menengah.
- `lg:`: laptop.
- `xl:` dan `2xl:`: desktop dan layar lebar.

Foto-foto tetap berasal dari folder `assets/` proyek awal. Tidak ada foto stok atau foto AI yang ditambahkan.

## Tema visual Claymorphism

Tema antarmuka Claymorphism menggunakan palet Soft Lavender dan Deep Navy berada di `assets/css/claymorphism.css`. File ini dimuat setelah CSS utama agar perubahan tampilan tidak mengubah konten, aset foto, maupun JavaScript interaksi. Jika menjalankan build Tailwind, file tema tersebut tetap dipertahankan dan tidak perlu dikompilasi ulang.
