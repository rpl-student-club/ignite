# Rencana Pengembangan Website IGNITE

Berdasarkan dokumen panduan flow aplikasi dan struktur database/file yang sudah di-setup, berikut adalah panduan kebutuhan dan pembagian tugas untuk tim:

## 1. Arsitektur & Tech Stack
Proyek ini menggunakan **Laravel + Inertia.js + React + Tailwind CSS + Radix UI**.
Struktur database telah disiapkan dan selaras dengan kebutuhan registrasi tim:
- `users`: Untuk autentikasi (menyimpan Nama Tim, Username, dan Password).
- `team_data`: Menyimpan detail kompetisi (Asal Univ, Pembimbing, Link Drive KTM, dan Link Dokumen Lomba).
- `members`: Menyimpan detail tiap anggota tim (Nama, Program Studi, Peran Leader/Member).
- `competitions`: Menyimpan kategori lomba (ITEACH, IGAME).

---

## 2. Struktur Halaman & Pembagian Tugas Tim

### A. Landing Page (Tugas: Lian)
**File Target:** `resources/js/Pages/welcome.tsx`
**Kebutuhan:**
- **Hero Section:** Judul utama dan call-to-action.
- **About IGNITE:** Penjelasan singkat mengenai event IGNITE.
- **Informasi Lomba:**
  - **ITEACH:** Detail singkat lomba dan tombol "Daftarkan Tim Kamu" yang mengarah ke form register.
  - **IGAME:** Detail singkat dan tombol CTA Discord.

### B. Detail Page ITeach & IGame (Tugas: Ray)
**File Target:** `resources/js/Pages/i-teach.tsx` & `resources/js/Pages/i-game.tsx`
**Kebutuhan ITEACH:**
- Penjelasan Lomba
- Timeline pelaksanaan
- FAQ (Frequently Asked Questions)
**Kebutuhan IGAME:**
- Penjelasan Lomba
- Label "Coming Soon"

### C. Upload Berkas Pendaftaran Tim (Tugas: Harmoni)
**File Target:** `resources/js/Pages/auth/register.tsx` (dan Form Controllers di Backend)
**Kebutuhan Form (Multi-step atau Single-step):**
- **Section 1:** Asal Universitas, Data Anggota (Nama, Asal Program Studi), Nama Pembimbing, Link Drive Kumpulan KTM Anggota.
- **Section 2:** Nama Tim, Username Tim, Password.
*Catatan Backend:* Pastikan request disimpan ke tabel `users` (sebagai tim), `team_data`, dan `members`.

### D. Login, Manage Team & Upload Berkas Lomba (Tugas: Rafi)
**File Target:** `resources/js/Pages/auth/login.tsx` & `resources/js/Pages/dashboard.tsx`
**Kebutuhan Login:**
- Field untuk **Username Tim** dan **Password**.
**Kebutuhan Dashboard / Halaman Profil:**
- **Profile Tim:** Menampilkan Nama Tim, Universitas, dan Nama Pembimbing.
- **Manage Anggota:** List anggota dengan Nama & Program Studi.
- **Submission (Upload Berkas):**
  - Timeline Overview.
  - Section Pengumpulan Berkas Lomba ITEACH (S&K & Form input Link Drive). Update kolom `document_link` di tabel `team_data`.

---

## 3. Langkah Selanjutnya untuk Setup Kebutuhan

1. **Jalankan Database:**
   Pastikan environment `DB_*` di file `.env` sudah sesuai (MySQL/PostgreSQL/SQLite) lalu jalankan:
   ```bash
   php artisan migrate
   ```
2. **Install & Jalankan Frontend:**
   ```bash
   pnpm install  # (Atau npm install)
   pnpm dev      # Menjalankan Vite server
   ```
3. **Jalankan Backend Server:**
   ```bash
   php artisan serve
   ```
4. **Kolaborasi UI/UX:**
   Setiap developer bisa langsung membuka link Figma yang tercantum di PDF dan mencocokkan desain Radix UI / Tailwind yang sudah ter-install di package.json dengan desain figma tersebut.
