# Pelanggaran GPL: Kernel Android Tertutup

> Bukan "mereka mungkin melanggar", tapi "mereka benar-benar tidak mematuhi GPL".

---

## Penjelasan Singkat tentang GPL

GPL (GNU General Public License) adalah lisensi open source. Secara sederhana:

- Kamu bisa menggunakan kode berlisensi GPL secara gratis
- **Tapi jika kamu memodifikasi kode dan mendistribusikan produk, kamu harus membuka kode sumber yang telah dimodifikasi**
- Kernel Linux menggunakan GPLv2, ini adalah kewajiban mutlak, bukan bisa ditawar

Arloji Xiaotiancai menjalankan sistem Android, dan lapisan dasar Android adalah kernel Linux. Artinya, selama kamu menggunakan kernel Linux untuk membuat produk dan menjualnya, kamu harus menyediakan kode sumber kernel (termasuk bagian yang kamu modifikasi).

Ini bukan area abu-abu. Google sendiri dengan patuh menaruh kode sumber kernel Pixel di [kernel.google.com](https://kernel.google.com). Samsung melakukannya, Xiaomi melakukannya (meskipun lambat), OPPO juga melakukannya.

## Xiaotiancai Tidak Melakukannya

Hingga hari proyek ini dibuat, Xiaotiancai tidak pernah merilis kode sumber kernel perangkat apa pun melalui saluran publik mana pun.

Kamu cari di situs resmi mereka, tidak ada.
Kamu cari "xiaotiancai" atau "imoo kernel" di GitHub, tidak ketemu.
Kamu cari di milis kernel, juga tidak ada.

Ini bukan masalah "tidak bisa ditemukan" -- mereka memang tidak merilisnya.

## Kenapa Ini Melanggar

Ketentuan GPLv2 menyatakan dengan jelas:

> If you distribute copies of such a program, you must also make the source code available.

Kamu menjual arloji yang berisi kernel Linux -- itu berarti "distribute copies" -- kamu wajib menyediakan kode sumber. Tidak ada pengecualian.

Beberapa perusahaan beralasan "menggunakan kernel yang tidak dimodifikasi", tetap saja kamu harus menyediakan kode sumber. Terlebih lagi arloji Xiaotiancai pasti sudah dimodifikasi -- mereka harus menyesuaikan SoC Spreadtrum atau lainnya, melakukan adaptasi driver, melakukan berbagai penalaan hardware, tidak mungkin tidak dimodifikasi.

## Kenapa Banyak Perusahaan Tidak Merilis

Ini masalah realistis. Di antara produsen perangkat Android di China, yang tidak mematuhi GPL bukan hanya Xiaotiancai. Banyak pabrik kecil, perangkat OEM tidak merilis. Tapi ini tidak berarti itu benar.

Hanya saja sebelumnya tidak ada yang memperhatikan kategori arloji anak-anak.

## Apa Dampak Nyatanya

Kode sumber kernel tidak dirilis, artinya:

1. **Penelitian keamanan tidak bisa dilakukan.** Ada backdoor? Ada celah keamanan? Tidak ada yang bisa mengaudit
2. **ROM pihak ketiga tidak mungkin.** Sistem bawaan jelek pun kamu harus bertahan
3. **Siklus hidup perangkat sepenuhnya dikendalikan vendor.** Vendor bilang tidak ada pembaruan, perangkatmu mati
4. **Mau perbaiki bug sendiri?** Tidak ada kesempatan

Perangkat untuk anak-anak, dalam kondisi kotak hitam, tidak mengizinkan siapa pun memeriksa kode dasarnya.

Menurutmu ini wajar?

---

### Sumber Terkait

- [Teks Asli GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- [File LICENSE Kernel Linux](https://github.com/torvalds/linux/blob/master/COPYING)
- Untuk memastikan apakah Xiaotiancai pernah merilis kode sumber, kunjungi [kernel.org](https://kernel.org) atau langsung lihat milis permintaan kode sumber GPL
