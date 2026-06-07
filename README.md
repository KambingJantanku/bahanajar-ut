# 📦 SITTA - Sistem Informasi Tiras dan Transaksi Bahan Ajar UT

Aplikasi website *Single Page Application* (SPA) sederhana untuk manajemen pemesanan dan distribusi Bahan Ajar di Universitas Terbuka (UT)[cite: 2]. Proyek ini dibangun sebagai pemenuhan **Tugas Praktik 3 - Pemrograman Web** dengan menerapkan arsitektur *vanilla* menggunakan **Vue.js 2 (via CDN)** tanpa bantuan *build tools* seperti Node.js atau Webpack[cite: 2].

## 🚀 Fitur Utama

Aplikasi ini dibagi menjadi beberapa tab fungsional utama:

### 1. 📚 Manajemen Stok Bahan Ajar
*   **List Rendering & Formatting:** Menampilkan daftar stok dengan pemformatan mata uang (Rp) untuk harga dan imbuhan teks (buah) untuk kuantitas menggunakan *Vue Filter*[cite: 2].
*   **Indikator Status Cerdas:** Menampilkan status visual berdasarkan kondisi stok (Hijau: 'Aman', Orange: 'Menipis', Merah: 'Kosong') menggunakan *Conditional Rendering* (`v-if`, `v-else`)[cite: 2].
*   **Interactive Tooltips:** Menampilkan catatan format HTML saat melakukan *hover* pada status menggunakan *directive* `v-html`[cite: 2].
*   **Advanced Filter & Sort:** 
    *   Filter *dependent options*: Pilihan Kategori Mata Kuliah hanya muncul setelah memilih UT-Daerah[cite: 2].
    *   Filter *Quick Action* untuk menampilkan barang yang perlu di-*reorder* (Stok < Safety / Stok = 0)[cite: 2].
    *   *Sorting* data secara instan berdasarkan Judul, Stok, dan Harga tanpa me-render ulang seluruh halaman (menggunakan *Computed Properties*)[cite: 2].
*   **CRUD Operations:** Fitur Tambah, Edit, dan Hapus data bahan ajar dengan validasi input sederhana dan dukungan navigasi *keyboard* (`Enter` untuk submit)[cite: 2].

### 2. 🚚 Tracking Delivery Order (DO)
*   **Pencarian Cepat:** Pencarian status pengiriman berdasarkan Nomor DO atau NIM dengan *event handler* tombol `Enter` untuk mencari dan `Esc` untuk *reset*[cite: 2].
*   **Automasi Form Pemesanan Baru:**
    *   *Auto-generate* Nomor DO dengan format dinamis (`DO` + `Tahun Berjalan` + `Sequence Number`)[cite: 2].
    *   Tanggal pengiriman otomatis diatur menggunakan Local Time[cite: 2].
    *   Detail isi paket akan muncul secara dinamis saat kode paket dipilih dari *dropdown*[cite: 2].

## 🛠️ Teknologi yang Digunakan

*   **HTML5 & CSS3** (Styling minimalis responsif)
*   **JavaScript (ES6)**
*   **Vue.js 2 (CDN)** - *State management*, *Component-based architecture*, *Data binding*[cite: 2].

## 📂 Struktur Direktori

Sistem pengorganisasian file dipisah secara modular (Vue Components & Templates) untuk mempermudah pemeliharaan kode[cite: 2]:

```text
tugas3-vue-ut/
├── index.html               # Root: mount #app & Templates HTML
├── assets/
│   └── css/
│       └── style.css        # Gaya global
├── data/
│   └── dataBahanAjar.json   # Sumber data dummy (JSON)
└── js/
    ├── app.js               # Inisialisasi Vue root
    ├── components/          # Kumpulan Vue Components
    │   ├── stock-table.js 
    │   ├── do-tracking.js 
    │   ├── order-form.js  
    │   ├── status-badge.js
    │   └── app-modal.js   
    └── services/
        └── api.js           # Fetch JSON / Data handler
