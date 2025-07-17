# Buevn Bakehouse Backend

Backend API untuk aplikasi Buevn Bakehouse — toko donat Jepang otentik. Dibangun dengan Express.js (Node.js).

## ✨ Fitur Utama

- REST API produk donat (CRUD)
- Testimonial pelanggan (GET, POST, DELETE)
- Order online (POST, GET, simpan ke file lokal)
- Data dummy di file (tanpa database, mudah dikembangkan)
- CORS & JSON body parsing

## 🚀 Instalasi & Menjalankan

1. **Clone repo & install dependencies**

   ```bash
   cd caseThreeBE
   npm install
   ```

2. **Buat file .env** (opsional, default sudah pakai PORT=5038)

   ```env
   PORT=5038
   ```

3. **Jalankan server**
   ```bash
   npm run dev
   # atau
   npm start
   ```
   Server berjalan di [http://localhost:5038](http://localhost:5038)

## 📁 Struktur Folder Penting

```
caseThreeBE/
├── data/              # Data produk, testimonial, order (JSON/JS)
│   ├── donuts.js
│   ├── testimonials.js
│   └── orders.json
├── routes/            # Route modular (products, testimonials, orders)
│   ├── products.js
│   ├── testimonials.js
│   └── orders.js
├── index.js           # Entry point utama
├── .env               # Konfigurasi environment 
├── package.json
└── ...
```

## 🔗 Endpoint Utama

### Produk Donat

- `GET    /api/products` : List semua produk
- `GET    /api/products/:id` : Detail produk by id
- `POST   /api/products` : Tambah produk
- `PUT    /api/products/:id` : Edit produk
- `DELETE /api/products/:id` : Hapus produk

### Testimonial

- `GET    /api/testimonials` : List semua testimonial
- `POST   /api/testimonials` : Tambah testimonial
- `DELETE /api/testimonials/:idx`: Hapus testimonial by index

### Order

- `POST   /api/orders` : Kirim order baru
- `GET    /api/orders` : List semua order (admin/testing)

## 🧪 Testing dengan Postman

- Import file `buevn-postman.json` ke Postman untuk langsung mencoba semua endpoint
- Contoh request & response sudah tersedia di collection tersebut

## 📝 Pengembangan Lanjutan

- Integrasi database (MongoDB/MySQL)
- Email notifikasi order
- Autentikasi admin
- Dashboard statistik

---

> Made with ❤️ by Septian Dwi Cahyo
