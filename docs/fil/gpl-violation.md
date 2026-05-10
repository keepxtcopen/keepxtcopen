# Paglabag sa GPL: Saradong Android Kernel

> Hindi "maaaring lumabag sila," kundi "talagang hindi nila sinunod ang GPL."

---

## Ano ang GPL?

Ang GPL (GNU General Public License) ay isang open-source na lisensya. Sa madaling salita:

- Maaari mong gamitin nang libre ang code na nasa ilalim ng GPL
- **Ngunit kung babaguhin mo ang code at ipamahagi ang produkto, dapat mong gawing available ang binagong source code**
- Ang Linux kernel ay gumagamit ng GPLv2, ito ay isang mahigpit na kinakailangan, hindi ito pwedeng pag-usapan

Ang relo ng Xiaotiancai ay nagpapatakbo ng Android system, at ang pundasyon ng Android ay ang Linux kernel. Ibig sabihin, kung gumamit ka ng Linux kernel upang gumawa ng produkto at ibenta ito, dapat mong ibigay ang kernel source code (kabilang ang mga bahaging binago mo).

Ito ay hindi isang gray area. Ang Google mismo ay tapat na inilalagay ang kernel source code ng Pixel sa [kernel.google.com](https://kernel.google.com). Inilabas ng Samsung, inilabas ng Xiaomi (kahit mabagal), at inilabas din ng OPPO.

## Hindi Naglabas ang Xiaotiancai

Hanggang sa araw na umiiral ang proyektong ito, hindi naglabas ang Xiaotiancai ng kernel source code ng anumang device nito sa anumang pampublikong channel.

Pumunta ka sa kanilang opisyal na website, wala.
Maghanap ka sa GitHub ng "xiaotiancai" o "imoo kernel," wala.
Maghanap ka sa kernel mailing list, wala rin.

Ito ay hindi problema ng "hindi mahanap" — hindi lang talaga nila inilabas.

## Bakit Ito Ay Paglabag

Ang mga tuntunin ng GPLv2 ay malinaw na nakasaad:

> If you distribute copies of such a program, you must also make the source code available.

Kapag ibinenta mo ang relo na naka-install ang Linux kernel, iyon ay "distribute copies," at dapat mong ibigay ang source code. Walang eksepsyon.

Ang ilang kumpanya ay nagdadahilan na "gumamit lang kami ng hindi binagong kernel," ngunit kailangan mo pa ring ibigay ang source code. Higit pa rito, tiyak na binago ng Xiaotiancai ang kernel — kailangan nilang i-adapt ang Unisoc o iba pang SoC, gumawa ng driver adaptation, at mag-tuning ng hardware. Imposibleng hindi nila ito binago.

## Bakit Maraming Kumpanya ang Hindi Naglalabas

Ito ay isang tunay na problema. Sa mga gumagawa ng Android device sa China, hindi lang Xiaotiancai ang hindi sumusunod sa GPL. Maraming maliliit na pabrika at white-label device ang hindi naglalabas. Ngunit hindi ito nangangahulugang tama ito.

Dati lang walang sumubaybay sa kategorya ng mga relo ng bata.

## Ano ang Aktuwal na Epekto Nito

Kapag hindi inilabas ang kernel source code, ibig sabihin:

1. **Hindi magagawa ang seguridad research.** May backdoor ba? May vulnerability? Walang makakapag-audit
2. **Imposible ang third-party ROM.** Kung pangit ang original system, kailangan mong tiisin ito
3. **Ang lifecycle ng device ay kontrolado ng manufacturer.** Kapag sinabi ng manufacturer na hindi na sila mag-a-update, patay na ang device mo
4. **Gustong ayusin ang bug?** Walang paraan

Isang device para sa bata, itim na kahon, hindi pinapayagan ang sinuman na suriin ang source code nito.

Sa tingin mo ba ito ay tama?

---

### Mga Kaugnay na Resource

- [Orihinal na Teksto ng GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- [LICENSE file ng Linux Kernel](https://github.com/torvalds/linux/blob/master/COPYING)
- Kung gusto mong kumpirmahin kung naglabas ng source code ang Xiaotiancai, pumunta sa [kernel.org](https://kernel.org) o tingnan ang GPL source request mailing list
