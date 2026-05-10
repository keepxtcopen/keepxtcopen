# Yang Harus Saya Lakukan

> Marah-marah saja tidak berguna, harus tahu apa yang bisa dilakukan. Berikut hal-hal yang bisa dilakukan berdasarkan peran masing-masing.

---

## Sebagai Konsumen Biasa

### 1. Pikirkan Matang-matang Sebelum Membeli

Jika kamu sedang mempertimbangkan membelikan arloji Xiaotiancai untuk anakmu, tanyakan pada dirimu:

- **Untuk apa kamu membeli arloji?** Jika hanya untuk pelacakan lokasi dan telepon, banyak arloji di pasaran yang bisa melakukan itu, tidak harus Xiaotiancai
- **Apakah semua teman sekelas anakmu pakai Xiaotiancai?** Jika iya, kamu harus siap -- beli merek lain, anak mungkin tidak bisa menambah teman sekelas lewat arloji
- **Apa kamu bisa menerima perangkat yang tidak kamu kendalikan sendiri?** Perangkat Xiaotiancai memiliki kemampuan kendali jarak jauh, secara teori vendor bisa kapan saja menentukan apa yang bisa dan tidak bisa dilakukan perangkatmu
- **Apa kamu bisa menerima suatu hari fitur dihapus, akun diblokir, dan tidak ada tempat untuk mengadu?** Perjanjian pengguna menguntungkan perusahaan, saluran penegakan hak terbatas

Pertanyaan-pertanyaan ini tidak punya jawaban standar. Situasi setiap orang berbeda. Tapi setidaknya kamu harus tahu ini sebelum membeli, bukan setelah membeli baru menyadarinya.

### 2. Jika Sudah Membeli

- **Jangan berikan izin aplikasi orang tua sepenuhnya kepada anak.** Kontrol perangkat Xiaotiancai pada akhirnya diimplementasikan melalui aplikasi orang tua, akun orang tua adalah izin tertinggi
- **Periksa secara berkala apakah perjanjian pengguna dan kebijakan privasi diperbarui.** Meskipun tidak ada yang mau baca setiap hari, setidaknya lihat sekilas saat pembaruan versi besar
- **Jangan coba root atau pasang aplikasi tidak resmi.** Di bawah kebijakan saat ini, ini akan menyebabkan pemblokiran akun dan hampir tidak ada saluran banding
- **Jika ada masalah, simpan bukti dulu.** Screenshot, rekaman layar, catatan percakapan layanan pelanggan, mungkin berguna jika sampai harus menuntut hak

### 3. Pertimbangkan Alternatif

Jika kamu yakin tidak mau membeli Xiaotiancai, masih ada pilihan ini di pasaran (bukan rekomendasi, hanya daftar):

- **Jam Tangan Huawei** -- Ekosistem relatif lebih terbuka, tapi sosial juga terbatas sesama perangkat Huawei
- **Jam Tangan Xiaomi Mitu** -- Jalur nilai, fungsi relatif dasar
- **Jam Tangan 360** -- Pemain yang cukup mapan, pangsa pasar tidak sebanyak Xiaotiancai
- **Merek lain di bawah BBK** -- Ya, sebenarnya satu grup dengan Xiaotiancai

> Sejujurnya, saat ini pasar arloji anak-anak di China pada dasarnya masing-masing bermain sendiri dalam hal interkoneksi sosial. Ini bukan masalah Xiaotiancai saja, ini masalah seluruh industri. Cuma Xiaotiancai yang pangsa pasarnya terbesar dan paling keterlaluan.

---

## Sebagai Developer / Penggemar Open Source

### 1. Laporkan Pelanggaran GPL ke GNU FSF

Arloji Xiaotiancai menggunakan kernel Linux tapi tidak membuka kode sumber. Kamu bisa melaporkan ke **Free Software Foundation** atau **Software Freedom Conservancy (SFC)**.

Situs web GNU memiliki halaman kepatuhan GPL khusus:

- **GNU GPL Compliance** -- https://www.gnu.org/licenses/gpl-compliance.html
- **Software Freedom Conservancy** -- https://sfconservancy.org/

Saat melapor, perlu menyediakan:

- Model perangkat dan versi Android yang digunakan
- Bukti bahwa perangkat menggunakan kernel Linux (misalnya screenshot nomor versi kernel)
- Bukti bahwa vendor tidak menyediakan kode sumber (misalnya pencarian di situs resmi dan GitHub tidak membuahkan hasil)

SFC di masa lalu berhasil mendorong banyak perusahaan (seperti LG, Samsung, Cisco) untuk mematuhi GPL. Meskipun mereka terutama fokus di pasar luar negeri, laporan dalam bahasa Mandarin dan Inggris sama-sama diterima.

Jika kamu juga ingin bergabung dengan kami, silakan fork proyek ini dan ajukan Pull Request.

### 2. Ikuti dan Dorong di GitHub

- Cari isu terkait "xiaotiancai kernel" atau "imoo kernel source"
- Jika ada developer yang sudah melakukan pekerjaan reverse engineering atau analisis kernel, ikuti dan berpartisipasi
- Jika suatu hari Xiaotiancai merilis kode sumber kernel, periksa kepatuhannya

### 3. Bantu Pengguna Biasa Memahami Masalah Teknis

- Di forum, bantu orang menjelaskan apa itu GPL, kenapa source tertutup itu masalah
- Terjemahkan dan sebarkan konten teknis terkait
- Jika punya kemampuan, coba analisis firmware perangkat dan publikasikan temuan

---

## Sebagai Pengguna yang Akunnya Diblokir oleh Kontrol Cloud

### 1. Pastikan Dulu Aturan Mana yang Kamu Langgar

Sejujurnya, sering kali pengguna sendiri tidak tahu kenapa diblokir. Situasi umum:

- Pernah instal APK melalui adb
- Pernah mencoba mendapatkan hak akses root
- Mengikat bot
- Melakukan reverse engineering dan memanggil API <- (pengalaman penulis)
- Kesalahan sistem (jarang terjadi)

**Tapi masalah utamanya adalah: "Aturan" ini tidak tertulis secara jelas dalam perjanjian pengguna.**

Jadi pertama-tama kamu adalah "dihukum karena aturan yang tidak kamu ketahui."

### 2. Saluran Penegakan Hak

**Langkah 1: Hubungi Layanan Pelanggan**

Meskipun kemungkinan besar tidak membuahkan hasil, ini prasyarat untuk menggunakan saluran lain -- kamu harus membuktikan sudah mencoba bernegosiasi dengan vendor.

- Hotline layanan pelanggan resmi Xiaotiancai: 400-610-3999
- Simpan semua rekaman telepon dan catatan obrolan

**Langkah 2: Komplain ke 12315**

Hotline pengaduan konsumen nasional China. Bisa cari di mini program WeChat "platform 12315 Nasional" untuk mengadu langsung.

Poin pengaduan:

- Perangkat yang dibeli dibatasi penggunaan normalnya karena pelanggaran sepihak yang ditentukan vendor
- Aturan spesifik pemblokiran akun tidak tercantum dalam perjanjian pengguna
- Pemblokiran akun menyebabkan perangkat tidak bisa digunakan normal, memengaruhi komunikasi dan keamanan anak

**Langkah 3: Komplain ke Kementerian Perindustrian dan Teknologi Informasi (MIIT)**

Jika menyangkut pembatasan fungsi komunikasi, atau jika langkah sebelumnya gagal, bisa mengadu ke Pusat Pengaduan Pengguna Telekomunikasi MIIT.

Situs web: https://www.chinatcc.gov.cn/

**Langkah 4: Ekspos Media**

- Posting di Black Cat Complaint (https://tousu.sina.com.cn/)
- Posting pengalamanmu di Zhihu
- Hubungi blogger teknologi atau media sosial

Xiaotiancai sangat peduli dengan citra merek. Mungkin tidak ada yang peduli dengan satu pengguna, tapi jika topiknya meledak, mereka akan tertekan.

### 3. Kemungkinan Penegakan Hak Kolektif

Masalah pemblokiran akun arloji anak bukan kasus individual. Jika akunmu diblokir, kemungkinan besar masih banyak orang lain yang sama.

Bisa coba:

- Cari orang dengan nasib sama di Coolapk, Tieba, Zhihu
- Komplain kolektif ke 12315 atau MIIT (komplain kolektif lebih efektif daripada individu)
- Jika punya akses pengacara, konsultasikan apakah memenuhi syarat gugatan class action

---

## Terakhir

Menuntut hak itu sulit, saya tahu.

Lawannya bukan seorang staf layanan pelanggan, bukan seorang kasir, tapi sebuah perusahaan dengan tim hukum, tim humas, yang menguasai sebagian besar pasar.

Tapi jika tidak melakukan apa pun, hasilnya: **Mereka akan selalu merasa tidak ada masalah dengan apa yang mereka lakukan.**

Bahkan jika hanya satu orang yang membuat keputusan berbeda karena membaca proyek ini, maka proyek ini sudah punya alasan untuk ada.
