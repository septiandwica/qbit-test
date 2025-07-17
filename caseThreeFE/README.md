# Buevn Bakehouse Frontend

Frontend aplikasi Buevn Bakehouse — toko donat Jepang otentik. Dibangun dengan React + Vite + TypeScript + Tailwind CSS.

## ✨ Fitur Utama

- Landing page modern & responsif
- Slider produk populer
- Testimonial pelanggan (dari API)
- Halaman order online (integrasi backend)
- Halaman contact, about, menu, outlet, dsb
- **Admin: kelola produk (add, edit, delete), lihat daftar order**
- Integrasi GoFood & Google Maps outlet
- Tema warna amber/orange, font Poppins

## 🚀 Instalasi & Menjalankan

1. **Clone repo & install dependencies**

   ```bash
   cd caseThreeFE
   npm install
   ```

2. **Jalankan development server**

   ```bash
   npm run dev
   ```

   Buka [http://localhost:5173](http://localhost:5173) di browser.

3. **Pastikan backend berjalan**
   - Backend Express harus running di port yang sama dengan setting fetch API (default: 5038)
   - Lihat [../caseThreeBE/README.md](../caseThreeBE/README.md) untuk setup backend

## ⚙️ Environment

- Tidak perlu .env khusus untuk FE, kecuali ingin override endpoint API (bisa pakai VITE_API_URL)

## 📁 Struktur Folder Penting

```
caseThreeFE/
├── public/              # Asset publik (logo, gambar, dsb)
├── src/
│   ├── api/             # Semua pemanggilan API (products, popularProducts, testimonial, order)
│   ├── components/      # Komponen reusable (DonutCard, TestimonialCard, dsb)
│   ├── pages/
│   │   ├── landing/     # Halaman utama (Home, Testimonial, PopularProduct)
│   │   ├── admin/       # Halaman admin (OrderList, AddProduct, EditProduct)
│   │   └── ...          # Halaman lain (Order, Contact, About, Product)
│   ├── App.tsx          # Routing utama
│   └── ...
├── package.json
└── ...
```

## 🔗 Integrasi Backend & Struktur API

- Semua logic pemanggilan API sudah **dipisahkan di folder `src/api/`**
  - `src/api/products.ts` — CRUD produk
  - `src/api/popularProducts.ts` — Produk populer
  - `src/api/testimonial.ts` — Testimonial
  - `src/api/order.ts` — Order
- Komponen hanya import fungsi dari folder `api/`, contoh:
  ```ts
  import { getProducts } from "../api/products";
  import { createOrder } from "../api/order";
  ```
- **Keuntungan:**
  - Kode lebih rapi, mudah maintain
  - Jika ada perubahan endpoint, cukup edit di satu tempat
  - Komponen lebih fokus ke UI & state

## 🛠️ Fitur Admin

- **Add Product:** `/admin/product/add` — Tambah produk baru ke sistem
- **Edit Product:** `/admin/product/edit/:id` — Edit data produk
- **Delete Product:** (tombol di halaman list produk/order)
- **Order List:** `/admin/order` — Lihat daftar order masuk

Admin dapat mengelola produk (tambah, edit, hapus) dan melihat order langsung dari frontend.

## 📝 Pengembangan Lanjutan

- Tambahkan autentikasi admin
- Integrasi database (MongoDB/MySQL)
- Fitur notifikasi/email order
- Dashboard statistik

---

> Made with ❤️ by Septian Dwi Cahyo
