# Pelanggaran GPL: Kernel Android Tertutup

> Bukan "mereka mungkin melanggar", tapi "mereka sememangnya tidak mematuhi GPL".

---

## Apa itu GPL

GPL (GNU General Public License) ialah lesen sumber terbuka. Secara ringkas:

- Anda boleh guna kod berlesen GPL secara percuma
- **Tapi jika anda ubah kod dan edarkan produk, anda mesti dedahkan kod sumber yang diubah**
- Kernel Linux guna GPLv2, ini keperluan keras, bukan boleh dirunding

Jam tangan Xiaotiancai guna sistem Android, dan lapisan bawah Android ialah kernel Linux. Ini bermaksud selagi anda guna kernel Linux untuk buat produk dan jualnya, anda mesti sediakan sumber kernel (termasuk bahagian yang anda ubah).

Ini bukan zon kelabu. Google sendiri pun letak sumber kernel Pixel di [kernel.google.com](https://kernel.google.com). Samsung dah hantar, Xiaomi dah hantar (walaupun lambat), OPPO pun dah hantar.

## Xiaotiancai tak hantar

Sehingga hari projek ini wujud, Xiaotiancai tidak pernah mengeluarkan sumber kernel mana-mana peranti di mana-mana saluran awam.

Pergi ke laman web rasmi mereka, tak jumpa.
Cari "xiaotiancai" atau "imoo kernel" di GitHub, tak jumpa.
Semak senarai mel kernel, pun tak ada.

Ini bukan masalah "tak jumpa" — mereka langsung tak pernah hantar.

## Kenapa ini dikira pelanggaran

Terma GPLv2 tulis dengan jelas:

> If you distribute copies of such a program, you must also make the source code available.

Awak jual jam tangan yang dipasang kernel Linux, itu "distribute copies", awak mesti sediakan sumber. Tiada pengecualian.

Ada syarikat berdalih "guna kernel yang tak diubah", tapi awak tetap kena sediakan sumber. Lagipun jam tangan Xiaotiancai pasti diubah — mereka perlu menyesuaikan SoC Spreadtrum atau penyelesaian lain, buat pemacu, buat pelbagai pelarasan perkakasan, mustahil tak diubah.

## Kenapa banyak syarikat tak hantar

Ini masalah realiti. Antara pengeluar peranti Android di China, yang tak patuh GPL bukan hanya Xiaotiancai. Banyak pengeluar kecil, jenama OEM tak hantar. Tapi ini tak bermakna ia betul.

Cuma sebelum ni, tak ramai yang perhatikan kategori jam tangan kanak-kanak.

## Apa kesan sebenar

Sumber kernel tak dihantar, maksudnya:

1. **Penyelidikan keselamatan tak boleh dibuat.** Ada pintu belakang? Ada lubang keselamatan? Tiada siapa boleh audit
2. **ROM pihak ketiga mustahil.** Sistem asli teruk pun kena tahan
3. **Kitaran hayat peranti dikawal sepenuhnya oleh pengeluar.** Pengeluar kata tak update, peranti mati
4. **Nak baiki bug sendiri?** Langsung tak boleh

Peranti untuk kanak-kanak, dalam keadaan kotak hitam, tak benarkan sesiapa periksa kod bawahnya.

Awak rasa ini wajar?

---

### Sumber Berkaitan

- [Teks asal GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- [Fail LESEN kernel Linux](https://github.com/torvalds/linux/blob/master/COPYING)
- Kalau nak sahkan Xiaotiancai ada hantar sumber atau tak, pergi ke [kernel.org](https://kernel.org) atau tengok senarai mel permintaan sumber GPL
