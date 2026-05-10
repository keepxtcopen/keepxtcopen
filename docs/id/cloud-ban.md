# Kontrol Cloud dan Mekanisme Pemblokiran Akun

> Ini mungkin bagian **paling tidak bisa diterima** dari perangkat seri Xiaotiancai.

---

## Apa itu "Kontrol Cloud"

Kontrol Cloud sebenarnya tidak misterius -- perangkat memiliki layanan latar belakang yang terus berkomunikasi dengan server, vendor bisa mengirimkan perintah dari cloud untuk membuat perangkat melakukan operasi tertentu.

Pada arloji anak-anak, mekanisme ini bisa digunakan untuk:

- Menonaktifkan fitur tertentu dari jarak jauh
- Menghapus aplikasi tertentu dari jarak jauh
- Mengunci perangkat dari jarak jauh
- Memblokir akun (perangkat menjadi batu bata)

Kemampuan ini sendiri tidak semuanya buruk -- misalnya orang tua mengontrol penggunaan arloji anak melalui aplikasi, juga diimplementasikan melalui mekanisme serupa.

Masalahnya: **Saat vendor menggunakan mekanisme ini untuk menghukum pengguna.**

---

## Manifestasi Kontrol Cloud Saat Ini

Perangkat yang terkena kontrol cloud tidak langsung menjadi batu bata. Sebenarnya, kontrol cloud Xiaotiancai bersifat **hukuman bertingkat**, dengan jenis dan tingkat keparahan "pelanggaran" yang berbeda menghasilkan tingkat pembatasan yang berbeda. Berikut adalah manifestasi pembatasan yang umum:

### Chat Mikro Dibungkam

Saat pengguna membuka chat mikro, akan muncul pemberitahuan pembungkaman:

```plaintext

Konten yang baru dipublikasikan melanggar "Perjanjian Komunitas Xiaotiancai"
```

Kemudian fungsi chat mikro dibatasi, tidak bisa kirim pesan, tidak bisa membalas. Tapi yang aneh -- apa isi "Perjanjian Komunitas" ini, pernyataan mana yang melanggar, berapa lama masa hukumannya, sama sekali tidak diberitahukan.

Kamu tidak berurusan dengan aturan yang transparan. Kamu berurusan dengan kotak hitam.

### Tidak Bisa Memposting di Lingkaran Pertemanan

Fitur Lingkaran Pertemanan (好友圈) sebagian dibatasi. Manifestasi spesifiknya:

- Tidak bisa melihat pembaruan lingkaran pertemanan
- Tidak bisa memposting kiriman baru sendiri
- Tapi konten historis yang sudah diposting mungkin masih bisa dilihat

Ini sama saja memotong fungsi sosial secara total. Bagi anak-anak yang menggunakan arloji untuk berinteraksi dengan teman sekelas, pembatasan ini pada dasarnya melumpuhkan fungsi sosial inti arloji.

### Sebagian Besar Fitur Menampilkan "Gangguan Jaringan"

Ini adalah manifestasi yang paling membingungkan. Bukan koneksi internetmu bermasalah, tapi fitur tertentu menampilkan gangguan jaringan:

- Halaman tertentu tidak bisa dimuat
- Saat masuk ke fitur, muncul "Koneksi jaringan abnormal, silakan coba lagi nanti"
- Tapi fitur lain di perangkat yang sama mungkin masih berfungsi normal

Pembatasan "lunak" semacam ini lebih menyebalkan daripada pemblokiran langsung -- kamu tidak tahu apakah ini masalah perangkat, masalah jaringan, atau kamu sedang dibatasi.

### Server Mengembalikan Kode Error Tertentu

Bagi pengguna dengan latar belakang teknis, bisa melihat sinyal pemblokiran yang lebih jelas melalui packet capture. Perangkat yang dibatasi akan menerima respons berikut saat meminta API:

```json
{"code":"000007","desc":"request parameter is invalid."}
```

"Parameter permintaan tidak valid" -- sepertinya parameter yang dikirim salah, tapi sebenarnya ini respons penolakan seragam dari server untuk akun yang dibatasi.

Bukan parameter yang benar-benar tidak valid. Tapi server menilai permintaan ini tidak boleh diproses, dan mengembalikan pesan error yang samar.

Desain ini disengaja: **Tidak memberi pesan error yang jelas, membuat pengguna mengira ini masalah perangkat mereka sendiri, bukan karena mereka dibatasi.**

---

## Kasus Nyata Pemblokiran Akun

Di internet China, banyak pengguna Xiaotiancai yang melaporkan situasi berikut:

**Kasus A: Memasang Aplikasi Pihak Ketiga Lalu Terkunci**
Pengguna memasang aplikasi non-resmi ke arloji melalui metode tertentu (instalasi adb atau cara lain). Setelah beberapa waktu, arloji menampilkan pemberitahuan pelanggaran akun, lalu fungsi perangkat dibatasi. Fungsi telepon, chat mikro, dll. tidak bisa digunakan.

**Kasus B: DiBlokir Setelah Root**
Pengguna mencoba mendapatkan hak akses root perangkat, ingin menghapus aplikasi bawaan atau mengoptimalkan sistem. Terdeteksi oleh cloud dan akun diblokir.

**Kasus C: Tidak Bisa Diaktifkan Setelah Reset Pabrik**
Pengguna melaporkan bahwa setelah mereset perangkat, saat aktivasi ulang muncul pemberitahuan "perangkat sudah terikat", proses penyelesaian dengan layanan pelanggan sangat rumit.

---

## Inti Masalahnya

Tentang pemblokiran akun, ada tiga masalah utama:

### 1. Tidak Tertulis dalam Perjanjian

Seperti yang sudah disebutkan sebelumnya, perjanjian pengguna **tidak memiliki klausul jelas** yang menyatakan bahwa "root akan menyebabkan pemblokiran akun" atau "memasang aplikasi pihak ketiga akan menyebabkan pemblokiran akun." Pengguna "melanggar" tanpa mengetahui aturannya.

Jika sebuah aturan bisa menyebabkan perangkat seharga ratusan ribu (rupiah) yang kamu beli menjadi batu bata, setidaknya aturan itu harus ditulis hitam di atas putih, bukan?

### 2. Kepemilikan Perangkat vs. Hak Pakai

Kamu membeli arloji, secara fisik itu milikmu. Tapi mekanisme kontrol cloud Xiaotiancai berarti: **Mereka bisa menentukan dari jarak jauh apakah perangkatmu bisa digunakan secara normal.**

Ini jadi sangat rumit -- apakah yang kamu bayar itu "perangkat milikmu sendiri" atau "perangkat yang mereka izinkan kamu gunakan"?

### 3. Tidak Ada Saluran Banding

Setelah akun diblokir, pengguna pada dasarnya tidak memiliki saluran banding yang efektif. Hubungi layanan pelanggan = antre, dialihkan, diombang-ambingkan. Cari pos tentang pemblokiran akun Xiaotiancai di internet, sebagian besar pengguna tidak mendapatkan penyelesaian yang memuaskan.

---

## Kenapa Mereka Melakukan Ini

Sejujurnya, Xiaotiancai punya "alasan" mereka sendiri:

- Menjamin keamanan perangkat (mencegah malware)
- Mencegah fitur yang tidak diinginkan orang tua diaktifkan
- Menjamin stabilitas sistem (perangkat anak-anak bermasalah akan dikomplain orang tua)

Tapi apakah "alasan" ini bisa diterima, dan "apakah ini wajar" adalah dua hal yang berbeda.

Masalahnya:

Sistem Android sendiri memiliki mekanisme sandbox aplikasi dan mekanisme izin untuk isolasi keamanan. Menggunakan kontrol cloud sebagai alat kontrol utama, pada dasarnya adalah **kontrol dimensi berlebih** -- melampaui manajemen izin sistem operasi itu sendiri, membuat sistem lain di cloud.

Kamu tidak perlu mengikat tangan pengguna sepenuhnya untuk mencegah mereka melakukan kesalahan.

---

## Kenapa Hal Ini Sangat Buruk

Pengguna arloji anak-anak adalah anak-anak, tapi pembelinya adalah orang tua. Apa kebutuhan inti orang tua membeli perangkat ini?

1. Bisa tetap berkomunikasi dengan anak
2. Bisa tahu di mana anak berada
3. Anak bisa menggunakannya dengan tenang

Jika karena "pelanggaran" yang mungkin tidak diketahui orang tua sama sekali, arloji langsung menjadi batu bata -- **anak tidak bisa menghubungi orang tua, orang tua tidak tahu di mana anak berada.**

Ini mempertaruhkan keselamatan anak sebagai alat tawar.

---

### Objektif

Saya paham vendor perlu mengontrol perangkat, mencegah malware, mencegah anak-anak melewati kontrol orang tua. Tapi masalahnya: langkah kontrolmu harus transparan, memiliki batas, memiliki mekanisme banding -- bukan bersembunyi di tempat gelap, lalu langsung menonaktifkan perangkat karena pengguna melanggar aturan yang tidak mereka ketahui.
