# Analisis Klausul Sewenang-wenang EULA

> Analisis berikut berdasarkan perjanjian pengguna aplikasi Xiaotiancai versi 26 Juni 2023 dan Perjanjian Lisensi Perangkat Lunak Pengguna Akhir (EULA). Jika kamu menemukan pembaruan, silakan ajukan PR.

---

## Kesimpulan

Perjanjian pengguna Xiaotiancai bukan yang terburuk di industri. Tapi ada beberapa masalah yang memang ada.

Kombinasi perjanjian ini menyampaikan satu pesan: **Kamu membeli perangkat, tapi bagaimana perangkat itu digunakan dan apakah bisa terus digunakan, pada akhirnya mereka yang memutuskan.**

---

## Versi Perjanjian

- **Perjanjian Pengguna Aplikasi Xiaotiancai**: Tanggal pembaruan 26 Juni 2023
- **Perjanjian Lisensi Perangkat Lunak Pengguna Akhir (EULA)**: Tanggal pembaruan 26 Juni 2023
- **Tautan resmi**: https://static.watch.okii.com/watch/user_agreement/index.html

---

## 1. Hak untuk Mengubah Perjanjian Secara Sepihak

Banyak perjanjian pengguna memiliki klausul ini, Xiaotiancai tidak terkecuali.

**Pasal 19 Perjanjian Pengguna Aplikasi,** teks asli:

> Xiaotiancai dapat merevisi perjanjian ini sewaktu-waktu berdasarkan pembaruan Layanan ini. Ketentuan perjanjian yang diperbarui akan menggantikan ketentuan perjanjian sebelumnya segera setelah dipublikasikan.
>
> Jika revisi terhadap Layanan ini atau perjanjian ini secara signifikan memengaruhi pengguna atau secara signifikan membatasi akses atau penggunaan Layanan ini, kami akan memberi tahu Anda dalam waktu yang wajar sebelum perubahan.

Perjanjian mengatakan perubahan besar akan diberitahukan sebelumnya. Tapi masalahnya:

- Standar "secara signifikan memengaruhi pengguna" ini ditentukan oleh siapa? Jelas perusahaan sendiri
- "Waktu yang wajar" itu berapa lama? Perjanjian tidak menyebutkan
- Cara pemberitahuannya bagaimana? Perjanjian juga tidak menjelaskan
- Yang disebut "pemberitahuan" mungkin hanya memperbarui halaman di suatu sudut, pengguna tidak tahu sama sekali

Yang disebut "pemberitahuan sebelumnya", dalam praktiknya mungkin hanya pajangan.

---

## 2. Ruang Lingkup Pengumpulan Data

Pasal 5 perjanjian mencantumkan ruang lingkup fungsi aplikasi, termasuk lokasi, komunikasi sosial, olahraga dan kesehatan, manajemen aplikasi, dll. Detail pengumpulan, cara penyimpanan, ruang lingkup berbagi, ada di kebijakan privasi.

> Tautan kebijakan privasi: https://static.watch.okii.com/watch/privacy_explain/index.html

Untuk perangkat anak-anak, masalah utamanya tetap:

- Apakah prinsip kebutuhan dan minimalisasi pengumpulan diterapkan?
- Apakah langkah-langkah keamanan data memadai?
- Tidak ada audit pihak ketiga, tidak bisa diverifikasi dari luar.

---

## 3. Hak Penghentian Layanan

**Pasal 18 Perjanjian Pengguna Aplikasi (Penghentian atau Penangguhan oleh Xiaotiancai):**

> Kami dapat, sesuai dengan hukum yang berlaku, menangguhkan, membatasi, membatalkan, atau menghentikan akses Anda ke seluruh atau sebagian Layanan ini, tanpa bertanggung jawab kepada individu atau pihak ketiga mana pun.
>
> Jika terjadi keadaan berikut, kami dapat segera menangguhkan, membatasi, membatalkan, atau menghentikan akses Anda ke seluruh atau sebagian Layanan ini tanpa pemberitahuan terlebih dahulu:
> - (a) Anda melanggar atau Xiaotiancai memiliki alasan untuk meyakini bahwa Anda akan melanggar perjanjian ini
> - (b) Anda atau siapa pun yang bertindak atas nama Anda melakukan penipuan atau kegiatan ilegal
> - (c) Menanggapi permintaan dari penegak hukum atau instansi pemerintah sesuai dengan proses hukum yang berlaku
> - (d) Untuk melaksanakan pemeliharaan atau pembaruan sistem atau perangkat keras darurat
> - (e) Karena alasan teknis, keamanan, atau bisnis yang tidak terduga

Perhatikan frasa pada ayat (a) -- **"Xiaotiancai memiliki alasan untuk meyakini bahwa Anda akan melanggar perjanjian ini"**, standar ini sangat rendah. Tidak perlu kamu benar-benar melanggar, cukup perusahaan "merasa" kamu akan melanggar, layanan bisa dihentikan.

Dan penghentian layanan tidak perlu memberi tahu kamu sebelumnya, juga tidak bertanggung jawab atas apa pun. Konsekuensi penghentian layanan, bagaimana biaya ditangani, tidak dijelaskan dalam perjanjian.

**EULA Pasal 14 (Batasan Tanggung Jawab):**

> Total batas tanggung jawab Xiaotiancai atas semua kerugian Anda tidak boleh melebihi harga yang Anda bayarkan untuk membeli arloji Xiaotiancai.

Bahkan jika Xiaotiancai salah, paling banter mereka ganti rugi seharga arloji.

---

## 4. Perilaku yang Dilarang dalam Perjanjian

**EULA Pasal 4 dan Pasal 7** secara jelas melarang perilaku berikut:

> Tidak boleh menyalin, membongkar, merekayasa balik, mendekompilasi, membongkar rakit, atau membuat karya turunan dari perangkat lunak ini.
>
> Tidak boleh berusaha merusak, melewati, mengubah, membatalkan, atau menghindari sistem manajemen hak digital apa pun yang terkait dengan perangkat lunak ini.
>
> Tidak boleh melakukan tindakan apa pun yang membahayakan keamanan jaringan komputer, termasuk namun tidak terbatas pada: menyelidiki, memindai, menguji kerentanan tanpa izin, mengganggu, merusak operasi normal, dll.

Root (mendapatkan izin sistem), rekayasa balik, melewati batasan sistem -- semua ini memang memiliki ketentuan larangan yang sesuai dalam EULA.

**Masalahnya:** Perjanjian melarang tindakan teknis seperti "rekayasa balik, melewati DRM", sedangkan dalam praktik alasan pemblokiran akun adalah "memasang aplikasi pihak ketiga" atau "root perangkat" -- keduanya memang berhubungan, tapi perjanjian tidak secara gamblang menulis "jika kamu root, aku blokir akunmu." **Konsekuensi pemblokiran akun itu sendiri tidak diberitahukan secara jelas dalam perjanjian.**

Selain itu, **Pasal 9 Perjanjian Pengguna Aplikasi** mencantumkan dalam daftar perilaku yang dilarang:

> Menyalin, mengubah, merekayasa balik, membongkar rakit, mendekompilasi, membongkar, mencoba mengekspor kode sumbernya, mendekode

Klausul-klausul ini secara teknis mencakup root dan modifikasi sistem.

### Tapi Ada Kontradiksi Kunci: Lisensi Open Source

**EULA Pasal 1 Ayat (2) secara jelas menulis:**

> Arloji Xiaotiancai mungkin juga berisi komponen perangkat lunak yang dilindungi hak cipta pihak ketiga dan diberikan lisensi open source oleh pihak ketiga... Saat Anda menggunakan komponen open source ini, ketentuan lisensi open source akan berlaku. Perjanjian ini tidak mengubah hak atau kewajiban Anda berdasarkan lisensi open source tersebut. **Jika terdapat konflik antara ketentuan lisensi dalam perjanjian ini dengan lisensi open source mengenai komponen open source apa pun, lisensi open source yang akan berlaku.**

Perjanjian itu sendiri mengatakan: **Komponen open source tunduk pada lisensi open source, EULA tidak bisa mengaturnya.**

Ini menimbulkan beberapa masalah:

**Pertama, Xiaotiancai sendiri tidak mematuhi lisensi open source.** Dasar arloji adalah kernel Linux (GPLv2), sesuai ketentuan GPL harus membuka kode sumber. Xiaotiancai tidak merilisnya. Mereka sendiri tidak mematuhi lisensi open source, tapi menggunakan EULA untuk membatasi pengguna memodifikasi bagian yang juga dilindungi GPL -- ini secara logika tidak masuk akal.

**Kedua, root sebagian besar memodifikasi bagian open source.** Selain beberapa modul hook, ramdisk.cpio, modul kernel, partisi boot -- ini semua adalah turunan kernel Linux atau komponen Android Open Source Project (AOSP). Lisensi komponen-komponen ini (GPL, Apache 2.0, dll.) memang mengizinkan pengguna untuk memodifikasinya. Xiaotiancai menggunakan EULA untuk melarang pengguna memodifikasi komponen open source ini, bertentangan dengan perjanjian mereka sendiri yang mengatakan "lisensi open source didahulukan."

**Ketiga, menghapus perangkat lunak open source secara jahat.** Misalnya Yikebiao -- aplikasi open source yang tadinya ada di toko aplikasi, diklaim dihapus karena aktivitas pengembang remaja dihentikan, tapi sebenarnya karena Xiaotiancai mengembangkan "pengganti" tertutup sendiri. Ini bukan pemeriksaan keamanan teknis, ini penyensoran yang didorong model bisnis.

Jadi logika sebenarnya adalah: **Saat menguntungkan mereka, mereka pakai EULA. Saat tidak menguntungkan (lisensi open source), mereka pura-pura tidak lihat.**

---

## 5. Penyelesaian Sengketa

**Pasal 20 Perjanjian Pengguna Aplikasi:**

> Tempat penandatanganan perjanjian ini adalah Dongguan, Provinsi Guangdong, China. Jika terjadi sengketa selama pelaksanaan kontrak, kedua belah pihak harus menyelesaikannya melalui musyawarah; jika musyawarah gagal, kedua belah pihak harus mengajukan gugatan ke pengadilan yang berwenang di tempat penandatanganan perjanjian.

Perjanjian secara jelas menyebutkan pengadilan yang berwenang di Dongguan, melalui litigasi, bukan arbitrase. Jika kamu benar-benar ingin menegakkan hak, kamu harus menggugat di pengadilan Dongguan.

Bagi pengguna yang tidak tinggal di Guangdong, biaya litigasi di luar daerah sangat tinggi. Ini juga masalah khas klausul baku -- menetapkan tempat sengketa di lokasi perusahaan.

---

## 6. Kepemilikan Akun

**Pasal 7 Perjanjian Pengguna Aplikasi:**

> Kepemilikan akun adalah milik Xiaotiancai, Anda hanya memiliki hak pakai dalam batas izin yang diberikan Xiaotiancai.

Akun yang kamu daftarkan, kepemilikannya milik perusahaan. Kamu hanya punya "hak pakai". Secara teori perusahaan bisa mengambil alih akunmu dengan alasan apa pun.

---

## Catatan Tambahan

Bukan berarti Xiaotiancai harus memberi keringanan di luar hukum. Klausul yang menguntungkan perusahaan memang umum di industri.

Tapi masalahnya:

1. Ini **perangkat anak-anak**, pembuat keputusan dan penggunanya terpisah (orang tua beli, anak pakai)
2. Tingkat kontrolnya jauh melampaui perangkat pintar biasa
3. Dampak masalahnya bukan sekadar ganti ponsel -- alat komunikasi anak langsung terputus

Kalau semua ini dilihat secara keseluruhan, tidak bisa dijelaskan hanya dengan "memang seperti itu di industri."
