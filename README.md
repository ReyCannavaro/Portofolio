# Portofolio

Proyek portofolio pribadi yang dibuat menggunakan React dan Tailwind CSS.

## Cara Mengkloning dan Menjalankan Proyek

Ikuti langkah-langkah berikut untuk mengkloning repositori ini dan menjalankannya di komputer lokal Anda.

### Prasyarat

Sebelum memulai, pastikan Anda telah menginstal yang berikut ini:

* **Git**: Untuk mengkloning repositori.

* **Node.js**: Versi 14 atau lebih baru. Node.js dilengkapi dengan npm (Node Package Manager).

### Langkah-langkah

1. **Kloning Repositori**
   Buka terminal atau command prompt Anda dan jalankan perintah berikut untuk mengkloning proyek:

   ```bash
   git clone [https://github.com/ReyCannavaro/rey-portofolio.git](https://github.com/ReyCannavaro/rey-portofolio.git)
   ```

   (Catatan: Ganti URL dengan URL repositori GitHub Anda yang sebenarnya.)

2. **Masuk ke Direktori Proyek**
   Navigasi ke direktori proyek yang baru saja Anda kloning:

   ```bash
   cd rey-portofolio
   ```

3. **Instal Dependensi**
   Instal semua pustaka dan dependensi yang diperlukan dengan menjalankan perintah berikut:

   ```bash
   npm install
   ```

4. **Menjalankan Proyek**
   Setelah instalasi selesai, Anda dapat menjalankan proyek dalam mode pengembangan:

   ```bash
   npm run dev
   ```

   Ini akan memulai server pengembangan lokal. Proyek biasanya dapat diakses di `http://localhost:5173` atau port lain yang disebutkan di terminal.

5. **Membuat Build Produksi**
   Jika Anda ingin membuat versi produksi dari situs web, jalankan perintah berikut:

   ```bash
   npm run build
   ```

   Perintah ini akan membuat folder `dist` yang berisi semua file statis yang siap untuk di-deploy ke hosting seperti Netlify, Vercel, atau GitHub Pages.

## Teknologi yang Digunakan

* **React**: Pustaka JavaScript untuk membangun antarmuka pengguna.

* **Vite**: Tooling frontend modern yang sangat cepat.

* **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat dan responsif.

* **Framer Motion**: Pustaka untuk animasi.

* **React Icons**: Kumpulan ikon.

## Struktur Proyek

Proyek ini memiliki struktur direktori yang terorganisir, termasuk folder untuk komponen, data, dan bagian-bagian.

```
rey-portofolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── projects.js
│   ├── sections/
│   │   └── ProjectsSection.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Tentang Penulis

* **Nama:** Rey Cannavaro

* **GitHub:** https://github.com/ReyCannavaro
