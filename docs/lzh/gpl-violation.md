# GPL違規：閉源安卓內核

> 非曰「彼或違規」，而曰「彼實未遵GPL」。

---

## 先釋GPL

GPL（GNU General Public License）者，開源許可證也。簡言之：

- 可免費使用基於GPL協議之代碼
- **然若修改代碼而分發產品，須將修改後之源碼一併公開**
- Linux內核所用者為GPLv2，此為硬性要求，無可商榷

小天才手錶運行Android系統，而Android底層即Linux內核。是故，凡用Linux內核製作產品而售出者，必將內核源碼（含所修改部分）公之於眾。

此非灰色地帶。Google自身亦老實將Pixel內核源碼置於[kernel.google.com](https://kernel.google.com)。三星已發，小米已發（雖遲），OPPO亦已發。

## 小天才未發

截至此項目存世之日，小天才未在任何公開渠道發布任何一款設備之內核源碼。

君往其官網尋之，不得。
君往GitHub搜「xiaotiancai」或「imoo kernel」，不得。
君往內核郵件列表翻檢，亦不得。

此非「尋而不獲」——實乃彼未曾發布。

## 何以謂之違規

GPLv2條款書之甚明：

> If you distribute copies of such a program, you must also make the source code available.

爾將裝有Linux內核之手錶售出，即「distribute copies」，必當提供源碼。無一例外。

或有公司辯曰「所用者為未改之內核」，然即便如此，亦須提供源碼。況小天才手錶必經修改——彼須適配展銳或其他方案之SoC，須做驅動適配，須做各類硬件調校，安得不改？

## 何以不發者眾

此乃現實問題。國內安卓設備廠商中，不守GPL者遠非小天才一家。諸多小廠、白牌設備皆不發布。然此非謂其為是。

特以向來無人關注兒童手錶此類別耳。

## 此有何實際影響

內核源碼不發，意味著：

1. **安全研究無從進行。** 有無後門？有無漏洞？無人能審
2. **第三方ROM不可得。** 原廠系統雖劣，亦只能忍受
3. **設備生命周期全由廠商掌控。** 廠商曰不再更新，設備即死
4. **欲自修bug？** 絕無可能

一臺予兒童用之設備，黑箱狀態，不許任何人審查其底層代碼。

君以為此合宜乎？

---

### 相關資源

- [GPLv2原文](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- [Linux內核LICENSE文件](https://github.com/torvalds/linux/blob/master/COPYING)
- 若欲確認小天才曾否發布源碼，可往[kernel.org](https://kernel.org)或查閱GPL源碼請求郵件列表
