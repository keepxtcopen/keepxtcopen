# Co che dam may & Khoa tai khoan

> Day co le la dieu **kho chap nhan nhat** ve dong ho Xiaotiancai.

---

## "Dam may" la gi?

Dam may (dieu khien tu xa qua dam may) nghe khong co gi bi an -- don gian la thiet bi co mot dich vu ngam lien tuc giao tiep voi may chu, nha san xuat co the gui lenh tu dam may de thiet bi thuc hien mot so thao tac.

Ap dung tren dong ho tre em, co che nay co the lam nhung viec sau:

- Vo hieu hoa tu xa mot chuc nang nao do
- Xoa tu xa mot ung dung nao do
- Khoa thiet bi tu xa
- Khoa tai khoan (thiet bi thanh cuc gach)

Nhung kha nang nay tu than khong phai luc nao cung xau -- vi du phu huynh quan ly viec tre dung dong ho qua app, cung duoc thuc hien qua co che tuong tu.

Van de la: **Khi nha san xuat dung co che nay de phat nguoi dung.**

---

## Bieu hien cu the cua dam bay hien tai

Thiet bi bi dam bay khong phai lap tuc thanh cuc gach. Tren thuc te, dam bay cua Xiaotiancai la **xu ly phan cap**, cac loai va muc do "vi pham" khac nhau tuong ung voi cac muc han che khac nhau. Duoi day la nhung bieu hien thuong gap hien nay:

### Micro-chat bi cam noi

Khi nguoi dung mo micro-chat se xuat hien thong bao cam noi:

```plaintext

Noi dung dang gan day vi pham "Cong uoc Cong dong Xiaotiancai"
```

Sau do chuc nang micro-chat bi han che, khong the gui tin nhan, khong the tra loi. Nhung die ky la -- cai goi la "Cong uoc Cong dong" nay cu the la gi, tin nhan nao vi pham, thoi han phat la bao lau, tat ca deu khong duoc cho biet.

Ban khong giao dich voi mot bo quy tac minh bach. Ban dang giao dich voi mot hop den.

### Ban be khong the dang bai

Chuc nang Ban be bi han che mot phan. Bieu hien cu the:

- Khong thay cap nhat dong moi cua Ban be
- Khong the tu dang bai viet moi
- Nhung noi dung da dang truoc do co le van co the xem duoc

Dieu nay tuong duong voi viec cat bo chuc nang xa hoi. Doi voi nhung tre dung dong ho de tuong tac voi ban cung lop, han che nay co ban da vo hieu hoa cong dung xa hoi cot loi cua dong ho.

### Phan lon chuc nang bao "Loi mang"

Day la bieu hien gay hoang mang nhat. Khong phai ban khong the len mang, ma la cac chuc nang cu the bao loi mang:

- Mot so trang khong tai duoc
- Bam vao chuc nang hien thi "Ket noi mang bat thuong, vui long thu lai sau"
- Nhung cac chuc nang khac tren cung mot thiet bi co le van hoat dong binh thuong

Kieu "han che mem" nay con kho chiu hon la khoa truc tiep -- ban khong biet la thiet bi co van de, mang co van de, hay minh bi han che.

### May chu tra ve ma loi cu the

Doi voi nguoi dung co ky thuat, co the bat goi tin de thay tin hieu khoa ro rang hon. Thiet bi bi han che khi goi API se nhan phan hoi sau:

```json
{"code":"000007","desc":"request parameter is invalid."}
```

"Tham so yeu cau khong hop le" -- nhin co ve nhu tham so truyen sai, nhung thuc chat day la phan hoi tu choi thong nhat tu phia may chu danh cho tai khoan bi han che.

Khong phai tham so thuc su khong hop le. Ma la may chu xac dinh rang yeu cau nay khong nen duoc xu ly, va tra ve mot thong bao loi mo ho.

Thiet ke nay la co chu y: **Khong dua thong bao loi ro rang, khien nguoi dung nghi la thiet bi cua minh co van de, chu khong phai bi han che.**

---

## Truong hop khoa tai khoan thuc te

Tren Internet Trung Quoc co rat nhieu nguoi dung Xiaotiancai phan anh cac truong hop sau:

**Truong hop A: Cai app ben thu ba bi khoa**
Nguoi dung bang mot each nao do (cai dat qua adb hoac phuong phap khac) cai mot ung dung khong co trong cua hang chinh thuc len dong ho. Mot thoi gian sau, dong ho hien thi thong bao tai khoan vi pham, sau do chuc nang thiet bi bi han che. Goi dien, micro-chat va cac chuc nang khac khong dung duoc.

**Truong hop B: Bi khoa sau khi root**
Nguoi dung thu gian quyen root thiet bi, muon go bo phan mem cai san hoac toi uu he thong. Bi may chu phat hien va tai khoan bi khoa.

**Truong hop C: Khong the kich hoat sau khi khoi phuc cai dat goc**
Co nguoi dung phan anh sau khi khoi phuc cai dat goc, khi kich hoat lai thi bao "thiet bi da duoc lien ket", quy trinh lien he cham soc khach hang rat phuc tap.

---

## Van de cot loi

Ve viec khoa tai khoan, co ba van de trung tam:

### 1. Thoa thuan khong noi ro

Nhu da de cap truoc do, trong thoa thuan nguoi dung **khong co dieu khoan ro rang nao noi rang** "root se dan den khoa tai khoan", "cai ung dung ben thu ba se dan den khoa tai khoan". Nguoi dung "vi pham" trong khi khong biet quy tac.

Neu mot quy tac co the khien chiec dong ho ban bo ra vai tram tham chi ca nghin te mua tro thanh cuc gach, it ra quy tac nay phai duoc viet den trang giay trang muc den cho ro rang chu?

### 2. Quyen so huu thiet bi vs. quyen su dung

Ban mua mot chiec dong ho, ve mat vat ly no la cua ban. Nhung co che dam may cua Xiaotiancai co nghia la: **Ho tu xa co the quyet dinh thiet bi cua ban co dung duoc binh thuong hay khong.**

Dieu nay rat te nhi -- ban bo tien mua thuc su la "mot thiet bi thuoc ve ban", hay "mot thiet bi ho cho phep ban su dung"?

### 3. Hoan toan khong co kenh khieu nai

Sau khi bi khoa tai khoan, nguoi dung co ban khong co kenh khieu nai hieu qua. Lien he cham soc khach hang = doi, chuyen tiep, day qua day lai. Tim kiem tren mang bai viet ve khoa tai khoan Xiaotiancai, dai da so nguoi dung deu khong nhan duoc giai quyet thoa dang.

---

## Tai sao ho lam vay

Noi cong bang, Xiaotiancai lam vay co "ly do" cua ho:

- Dam bao an toan thiet bi (ngua phan mem doc hai)
- Ngan chan cac chuc nang phu huynh khong mong muon bi kich hoat
- Dam bao on dinh he thong (thiet bi tre em co van de phu huynh se khien)

Nhung nhung "ly do" nay co dung hay khong, va "lam vay co hop ly khong" la hai chuyen khac nhau.

Van de o cho:

He dieu hanh Android tu than da co co che sandbox ung dung va co che phan quyen de cach ly bao mat. Dung dam bay lam cong cu kiem soat chinh, thuc chat la mot hinh thuc **kiem soat sieu vi mo** -- vuot qua qua trinh quan ly phan quyen cua chinh he dieu hanh, tao ra mot he thong rieng tren dam may.

Ban khong can troi chat tay nguoi dung de ngan ho lam dieu sai.

---

## Tai sao dieu nay dac biet nghiem trong

Nguoi dung cua dong ho tre em la tre nho, nhung nguoi mua la phu huynh. Nhu cau cot loi cua phu huynh khi mua la gi?

1. Co the giu lien lac voi con
2. Co the biet con o dau
3. De con y tam su dung

Neu boi mot hanh vi "vi pham" ma phu huynh co the hoan toan khong biet, dong ho bien thanh cuc gach -- **Con khong lien lac duoc voi cha me, cha me cung khong biet con o dau.**

Day la lay an toan cua tre lam con bai.

---

### Noi mot cau khach quan

Toi hieu rang nha san xuat can kiem soat thiet bi, ngan phan mem doc hai, ngan tre vo hieu hoa kiem soat cua phu huynh. Nhung van de la: Bien phap kiem soat cua ban phai minh bach, co gioi han, co co che khieu nai, chu khong phai lap khuat trong bong toi, nguoi dung vi pham mot quy dinh khong biet ma truc tiep vo hieu hoa thiet bi.
