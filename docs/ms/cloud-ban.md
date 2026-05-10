# Kawalan Awan & Sekatan Akaun

> Ini mungkin **perkara paling sukar diterima** tentang peranti siri Xiaotiancai.

---

## Apa itu "Kawalan Awan"

Kawalan Awan (kawalan dari pusat) sebenarnya tak misteri — peranti ada perkhidmatan latar yang sentiasa berkomunikasi dengan pelayan, pengeluar boleh hantar arahan dari awan untuk laksanakan operasi tertentu.

Pada jam tangan kanak-kanak, mekanisme ini boleh lakukan:

- Lumpuhkan fungsi tertentu dari jauh
- Padam aplikasi tertentu dari jauh
- Kunci peranti dari jauh
- Sekat akaun (peranti jadi bata)

Kebolehan ini tak semuanya buruk — cth. ibu bapa kawal penggunaan jam tangan anak melalui APP, pun guna mekanisme serupa.

Masalahnya: **Bila pengeluar guna mekanisme ini untuk menghukum pengguna.**

---

## Bentuk spesifik kawalan awan semasa

Peranti yang dikenakan kawalan awan tak terus jadi bata. Sebenarnya, kawalan awan Xiaotiancai adalah **hukuman berperingkat**, jenis dan tahap "kesalahan" berbeza ada had berbeza. Berikut adalah bentuk had yang biasa dilihat:

### WeiChat disekat

Pengguna buka WeiChat akan nampak notis sekatan:

```plaintext

Kandungan yang diterbitkan baru-baru ini melanggar "Konvensyen Komuniti Xiaotiancai"
```

Kemudian fungsi WeiChat dihadkan, tak boleh hantar mesej, tak boleh balas. Tapi ganjilnya — "Konvensyen Komuniti" ni apa sebenarnya, kenyataan mana yang langgar, tempoh hukuman berapa lama, semua tak diberitahu.

Awak bukan berurusan dengan peraturan yang telus. Awak berurusan dengan kotak hitam.

### Tak boleh terbitkan status di Bulatan Rakan

Fungsi Bulatan Rakan dihadkan sebahagian. Bentuk spesifik:

- Tak nampak kemas kini Bulatan Rakan
- Sendiri tak boleh terbit kemas kini baru
- Tapi kandungan sejarah yang dah diterbitkan mungkin masih nampak

Ini terus potong fungsi sosial. Untuk kanak-kanak yang guna jam tangan untuk berinteraksi dengan kawan sekelas, had ini pada dasarnya hapuskan kegunaan sosial utama jam tangan.

### Kebanyakan fungsi tunjuk "Ralat Rangkaian"

Ini bentuk paling mengelirukan. Bukan awak tak boleh online, tapi fungsi tertentu tunjuk ralat rangkaian:

- Muka surat tertentu tak boleh muat
- Fungsi klik masuk tunjuk "Ralat sambungan rangkaian, sila cuba sebentar lagi"
- Tapi fungsi lain pada peranti sama mungkin masih berfungsi normal

Had "lembut" ni lebih teruk daripada sekatan langsung — awak tak pasti sama ada masalah peranti, masalah rangkaian, atau kena hadkan.

### Pelayan pulangkan kod ralat tertentu

Untuk pengguna berlatar belakang teknikal, boleh guna tangkapan paket untuk nampak isyarat sekatan yang lebih jelas. Peranti yang dihadkan akan terima respons berikut bila meminta API:

```json
{"code":"000007","desc":"request parameter is invalid."}
```

"Parameter permintaan tak sah" — nampak macam parameter salah hantar, sebenarnya ni respons seragam pelayan untuk akaun yang dihadkan.

Bukan parameter betul-betul tak sah. Tapi pelayan tentukan permintaan ni tak patut diproses, pulangkan mesej ralat yang kabur.

Reka bentuk ini sengaja: **Tak bagi mesej ralat yang jelas, biar pengguna ingat masalah peranti sendiri, bukan kena hadkan.**

---

## Kes sebenar sekatan akaun

Internet China penuh dengan laporan pengguna Xiaotiancai yang alami situasi berikut:

**Kes A: Pasang aplikasi pihak ketiga terus dikunci**
Pengguna guna cara tertentu (adb install atau kaedah lain) pasang aplikasi bukan dari kedai rasmi. Selepas beberapa ketika, jam tangan keluar notis akaun langgar peraturan, fungsi dihadkan. Fungsi panggilan, WeiChat tak boleh guna.

**Kes B: Root terus disekat**
Pengguna cuba dapatkan akses root peranti, nak nyahpasang perisian pra-pasang atau optimumkan sistem. Dikesan dari awan, akaun disekat.

**Kes C: Tak boleh aktifkan selepas tetapan semula kilang**
Ada pengguna laporkan selepas tetapan semula kilang, bila aktifkan semula keluar notis "peranti sudah diikat", proses berbincang dengan khidmat pelanggan sangat rumit.

---

## Pokok masalah

Pasai sekatan akaun, ada tiga isu utama:

### 1. Tak ditulis dalam perjanjian

Macam yang disebut sebelum ni, perjanjian pengguna **tak ada klausa jelas** yang kata "root akan menyebabkan sekatan akaun" atau "pasang aplikasi pihak ketiga akan menyebabkan sekatan akaun". Pengguna langgar peraturan tanpa tahu peraturan tu.

Kalau satu peraturan boleh buat peranti beribu ringgit yang awak beli jadi bata, peraturan ni sekurang-kurangnya patut ditulis hitam putih, kan?

### 2. Pemilikan peranti vs hak guna

Awak beli satu jam tangan, secara fizikal ia milik awak. Tapi mekanisme kawalan awan Xiaotiancai maksudkan: **Dari jauh mereka boleh tentukan sama ada peranti awak boleh guna dengan normal.**

Ini sangat halus — apa sebenarnya yang awak beli, "peranti milik awak" atau "peranti yang mereka izinkan awak guna"?

### 3. Langsung tiada saluran rayuan

Selepas akaun disekat, pengguna pada dasarnya tiada saluran rayuan berkesan. Cari khidmat pelanggan = beratur, dipindah-pindah, main bola sepak. Cari dalam talian pasal Xiaotiancai sekat akaun, majoriti tak dapat penyelesaian memuaskan.

---

## Kenapa mereka buat begini

Secara adil, Xiaotiancai ada "alasan" mereka:

- Pastikan keselamatan peranti (cegah perisian hasad)
- Cegah fungsi yang ibu bapa tak nak dihidupkan
- Pastikan kestabilan sistem (peranti kanak-kanak rosak ibu bapa akan komplen)

Tapi sama ada "alasan" ni munasabah, dan sama ada "cara ni wajar", adalah dua perkara berbeza.

Masalahnya:

Android sendiri ada mekanisme keselamatan kotak pasir aplikasi dan kebenaran. Guna kawalan awan sebagai cara kawalan utama, pada asasnya adalah **kawalan dimensi lampau** — melangkaui pengurusan kebenaran sistem operasi sendiri, guna sistem lain di awan.

Awak tak perlu ikat tangan pengguna sepenuhnya untuk cegah dia buat salah.

---

## Kenapa ni lebih teruk

Pengguna jam tangan kanak-kanak ialah kanak-kanak, tapi pembeli ialah ibu bapa. Apa keperluan utama ibu bapa beli?

1. Boleh hubungi anak
2. Tahu anak di mana
3. Anak boleh guna dengan tenang

Kalau sebab "kesalahan" yang ibu bapa mungkin langsung tak tahu, jam tangan jadi bata — **anak tak boleh hubungi ibu bapa, ibu bapa tak tahu anak di mana.**

Ini guna keselamatan anak sebagai cagaran.

---

### Secara objektif

Saya faham pengeluar perlu kawal peranti, cegah perisian hasad, cegah anak langgar kawalan ibu bapa. Tapi masalahnya: langkah kawalan awak patut telus, ada sempadan, ada mekanisme rayuan, bukan bersembunyi di gelap, pengguna langgar peraturan yang tak diketahui terus rosakkan peranti.
