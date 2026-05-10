# Ano ang Dapat Kong Gawin

> Hindi sapat ang pagsisi lang, kailangan mong malaman kung ano ang magagawa mo. Nasa ibaba ang mga bagay na maaaring gawin ayon sa iyong katayuan.

---

## Bilang Ordinaryong Consumer

### 1. Pag-isipan Bago Bumili

Kung isinasaalang-alang mong bilhan ng Xiaotiancai watch ang iyong anak, tanungin ang iyong sarili:

- **Para saan mo ba binibili ang relo?** Kung para lang sa lokasyon at tawag, maraming relo sa merkado ang kayang gawin ito, hindi kailangang Xiaotiancai
- **Ang mga kaklase ba ng anak mo ay lahat gumagamit ng Xiaotiancai?** Kung oo, dapat handa ka — bumili ng ibang brand, maaaring hindi makapag-add ng kaibigan ang anak mo sa pamamagitan ng relo
- **Kaya mo bang tanggapin na ang device ay hindi mo kontrolado?** Ang Xiaotiancai device ay may remote control capability, sa teorya ay pwedeng magpasya ang manufacturer anumang oras kung ano ang pwedeng gawin ng device mo
- **Kaya mo bang tanggapin na balang araw ay tatanggaling ang function o maba-ban ang account mo at wala kang mapagsabihan?** Ang user agreement ay pabor sa kumpanya, limitado ang paraan ng pagtatanggol

Walang standard na sagot sa mga tanong na ito. Iba-iba ang sitwasyon ng bawat isa. Ngunit dapat mong malaman ang mga ito bago bumili, hindi pagkatapos.

### 2. Kung Bumili Ka Na

- **Huwag ibigay nang buo ang permission ng parent app sa bata.** Ang kontrol ng Xiaotiancai device ay sa pamamagitan ng parent end, ang parent account ang may pinakamataas na awtoridad
- **Regular na suriin kung may update ang user agreement at privacy policy.** Kahit walang taong araw-araw na nagbabasa, pero at least tingnan ito kapag may major version update
- **Huwag subukang i-root o mag-install ng hindi opisyal na app.** Sa ilalim ng kasalukuyang patakaran, ito ay magreresulta sa pagba-ban at halos walang paraan ng apela
- **Kung may problema, mag-ipon muna ng ebidensya.** Screenshot, screen recording, record ng usapan sa customer service — kung sakaling kailanganin sa pagtatanggol

### 3. Isaalang-alang ang Alternatibo

Kung sigurado kang ayaw mong bumili ng Xiaotiancai, may mga sumusunod na pagpipilian sa merkado (hindi ito rekomendasyon, lista lamang):

- **Huawei Children's Watch** — medyo bukas ang ecosystem, ngunit ang social ay limitado rin sa Huawei device
- **Xiaomi Mitu Watch** — value for money, medyo basic ang function
- **360 Children's Watch** — mas matandang manlalaro, mas maliit ang market share kaysa Xiaotiancai
- **Iba pang brand sa ilalim ng BBK** — well, magkapamilya lang ito ng Xiaotiancai

> Sa totoo lang, sa kasalukuyang merkado ng relo ng bata sa China, ang social interoperability ay karaniwang isolated sa bawat isa. Hindi lang ito problema ng Xiaotiancai, problema ito ng buong industriya. Ngunit ang Xiaotiancai ang may pinakamalaking bahagi at pinakamatindi.

---

## Bilang Developer / Open Source Enthusiast

### 1. Ireport ang GPL Violation sa GNU FSF

Ang Xiaotiancai watch ay gumagamit ng Linux kernel ngunit hindi naglabas ng source code. Maaari mong i-report ito sa **Free Software Foundation** o **Software Freedom Conservancy (SFC)**.

Ang GNU website ay may espesyal na pahina para sa GPL compliance:

- **GNU GPL Compliance** — https://www.gnu.org/licenses/gpl-compliance.html
- **Software Freedom Conservancy** — https://sfconservancy.org/

Kailangan mong ibigay kapag nagre-report:

- Modelo ng device at bersyon ng Android na binili
- Patunay na gumagamit ang device ng Linux kernel (hal. screenshot ng kernel version number)
- Patunay na hindi naglabas ng source code ang manufacturer (hal. walang resulta sa paghahanap sa website at GitHub)

Matagumpay nang nai-push ng SFC ang maraming kumpanya (tulad ng LG, Samsung, Cisco) na sumunod sa GPL. Kahit pang-internasyonal na merkado ang kanilang focus, tumatanggap sila ng reports sa Chinese at English.

Kung gusto mo ring sumali sa amin, malugod na tinatanggap ang pag-fork ng proyektong ito at pag-submit ng Pull Request.

### 2. Sundan at Isulong sa GitHub

- Maghanap ng mga kaugnay na isyu sa "xiaotiancai kernel" o "imoo kernel source"
- Kung may developer na gumagawa ng decompilation o kernel analysis, sundan at makilahok
- Kung may araw na naglabas ang Xiaotiancai ng kernel source code, suriin ang compliance nito

### 3. Tulungan ang Ordinaryong User na Maunawaan ang Teknikal na Problema

- Ipaliwanag sa forum kung ano ang GPL at bakit may problema ang closed source
- Isalin at ipalaganap ang kaugnay na teknikal na nilalaman
- Kung may kakayahan, subukang suriin ang device firmware at ilathala ang mga natuklasan

---

## Bilang User na Na-ban ng Cloud Control

### 1. Alamin Kung Aling Patakaran ang Iyong Nilabag

Sa totoo lang, maraming beses ay hindi alam ng user kung bakit sila na-ban. Mga karaniwang sitwasyon:

- Nag-install ng APK sa pamamagitan ng adb
- Nagtangkang kumuha ng root permission
- Nag-bound ng bot
- Nag-reverse engineer at tumawag ng API <- (karanasan ng may-akda)
- Na-misjudge ng system (bihira)

**Ngunit ang pangunahing problema ay: Ang mga "patakarang" ito ay hindi malinaw na nakasulat sa user agreement.**

Kaya una sa lahat, ikaw ay "pinarusahan ng isang patakarang hindi mo alam."

### 2. Mga Paraan ng Pagtatanggol

**Unang hakbang: Makipag-ugnayan sa customer service**

Kahit malamang na walang resulta, ito ay precondition para sa ibang paraan — kailangan mong patunayan na sinubukan mong makipag-ayos sa manufacturer.

- Xiaotiancai official customer service hotline: 400-610-3999
- Itago ang lahat ng recording ng tawag at chat records

**Ikalawang hakbang: Magreklamo sa 12315**

Pambansang consumer complaint hotline. Maaari kang maghanap ng "National 12315 Platform" sa WeChat mini-program upang direktang magreklamo.

Mga punto ng reklamo:

- Ang binili na device ay na-restrict ng manufacturer dahil sa unilateral na paghuhusga ng paglabag
- Ang user agreement ay hindi malinaw na naglilista ng mga tiyak na patakaran sa pagba-ban
- Ang pagba-ban ay nagdulot na hindi magamit nang normal ang device, na nakaapekto sa normal na komunikasyon at kaligtasan ng bata

**Ikatlong hakbang: Magreklamo sa MIIT**

Kung may kinalaman sa paghihigpit ng communication function, o kung nabigo ang nakaraang hakbang, maaaring magreklamo sa MIIT Telecommunications User Complaint Center.

Website: https://www.chinatcc.gov.cn/

**Ikaapat na hakbang: Media exposure**

- Mag-post sa Black Cat reklamo (https://tousu.sina.com.cn/)
- Mag-post sa Zhihu tungkol sa iyong karanasan
- Makipag-ugnayan sa tech blogger o social media

Ang Xiaotiancai ay sensitibo sa brand image. Maaaring walang pakialam ang isang indibidwal na nagtatanggol, ngunit kung kumalat ang isyu, magkakaroon sila ng pressure.

### 3. Posibilidad ng Kolektibong Pagtatanggol

Ang problema ng pagba-ban ng relo ng bata ay hindi iisang kaso. Kung na-ban ka, malamang na marami pang ibang tulad mo.

Maaaring subukan:

- Maghanap ng mga taong may parehong karanasan sa Coolapk, Tieba, Zhihu
- Kolektibong magreklamo sa 12315 o MIIT (mas epektibo ang kolektibong reklamo kaysa indibidwal)
- Kung may access sa abogado, magtanong kung ito ay kwalipikado para sa class action lawsuit

---

## Panghuli

Mahirap ang pagtatanggol ng karapatan, alam ko iyon.

Ang iyong kalaban ay hindi isang customer service representative, hindi isang tindahan, kundi isang kumpanyang may legal team, PR team, at halos kalahati ng merkado.

Ngunit ang resulta ng walang ginagawa ay: **Pakiramdam nila ay walang problema ang ginagawa nila.**

Kahit isang tao lang ang gumawa ng ibang desisyon dahil sa proyektong ito, may dahilan na ang proyektong ito para umiral.
