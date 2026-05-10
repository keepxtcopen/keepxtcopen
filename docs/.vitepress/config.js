import { defineConfig } from 'vitepress'

function makeNav(prefix, t) {
  const p = (s) => `${prefix ? '/' + prefix : ''}${s}`
  return [
    { text: t.news, link: p('/news/') },
    { text: t.gpl, link: p('/gpl-violation') },
    { text: t.eula, link: p('/eula-tyranny') },
    { text: t.cloudBan, link: p('/cloud-ban') },
    { text: t.social, link: p('/social-monopoly') },
    { text: t.jan20, link: p('/jan20-incident') },
    { text: t.whatToDo, link: p('/what-to-do') },
  ]
}

function makeSidebar(prefix, t) {
  const p = (s) => `${prefix ? '/' + prefix : ''}${s}`
  return [
    { text: t.home, link: p('/') },
    { text: t.newsTitle, link: p('/news/') },
    { text: t.gplFull, link: p('/gpl-violation') },
    { text: t.eulaFull, link: p('/eula-tyranny') },
    { text: t.cloudBanFull, link: p('/cloud-ban') },
    { text: t.socialFull, link: p('/social-monopoly') },
    { text: t.jan20Full, link: p('/jan20-incident') },
    { text: t.whatToDoFull, link: p('/what-to-do') },
    { text: t.closing, link: p('/closing') },
  ]
}

function localeConfig(prefix, label, lang, navT, footerMsg) {
  return {
    label,
    lang,
    themeConfig: {
      nav: [{ text: navT.homeNav || 'Home', link: prefix ? `/${prefix}/` : '/' }, ...makeNav(prefix, navT)],
      sidebar: makeSidebar(prefix, navT),
      footer: { message: footerMsg },
    },
  }
}

// ---- zh sidebar (shared by zh-HK too) ----
const zh = {
  home: '文档首页', newsTitle: '最新消息',
  gplFull: 'GPL违规：闭源安卓内核', eulaFull: '用户协议霸王条款',
  cloudBanFull: '云控与封号机制', socialFull: '社交垄断与生态壁垒',
  jan20Full: '1.20事件：好友圈功能大改', whatToDoFull: '我该怎么做', closing: '最后说几句',
  news: '最新消息', gpl: 'GPL违规', eula: '霸王条款', cloudBan: '云控封号',
  social: '社交垄断', jan20: '1.20事件', whatToDo: '我该怎么做',
  homeNav: '首页',
}

const en = {
  home: 'Home', newsTitle: 'News',
  gplFull: 'GPL Violation', eulaFull: 'EULA Tyranny',
  cloudBanFull: 'Cloud Control & Account Ban', socialFull: 'Social Monopoly',
  jan20Full: 'Jan 20 Incident', whatToDoFull: 'What To Do', closing: 'Closing',
  news: 'News', gpl: 'GPL Violation', eula: 'EULA', cloudBan: 'Cloud Ban',
  social: 'Social Monopoly', jan20: 'Jan 20', whatToDo: 'What To Do',
  homeNav: 'Home',
}

const hk = {
  home: '文檔首頁', newsTitle: '最新消息',
  gplFull: 'GPL違規：閉源安卓內核', eulaFull: '用戶協議霸王條款',
  cloudBanFull: '雲控與封號機制', socialFull: '社交壟斷與生態壁壘',
  jan20Full: '1.20事件：好友圈功能大改', whatToDoFull: '我該怎麼做', closing: '最後說幾句',
  news: '最新消息', gpl: 'GPL違規', eula: '霸王條款', cloudBan: '雲控封號',
  social: '社交壟斷', jan20: '1.20事件', whatToDo: '我該怎麼做',
  homeNav: '文檔首頁',
}

const id = {
  home: 'Beranda', newsTitle: 'Berita',
  gplFull: 'Pelanggaran GPL', eulaFull: 'Perjanjian Pengguna Tirani',
  cloudBanFull: 'Kontrol Cloud & Larangan Akun', socialFull: 'Monopoli Sosial',
  jan20Full: 'Insiden 20 Jan', whatToDoFull: 'Yang Harus Dilakukan', closing: 'Penutup',
  news: 'Berita', gpl: 'Pelanggaran GPL', eula: 'Perjanjian', cloudBan: 'Larangan Cloud',
  social: 'Monopoli Sosial', jan20: 'Insiden 20 Jan', whatToDo: 'Yang Harus Dilakukan',
  homeNav: 'Beranda',
}

const ms = {
  home: 'Laman Utama', newsTitle: 'Berita',
  gplFull: 'Pelanggaran GPL', eulaFull: 'Perjanjian Pengguna Tirani',
  cloudBanFull: 'Kawalan Awan & Larangan Akaun', socialFull: 'Monopoli Sosial',
  jan20Full: 'Insiden 20 Jan', whatToDoFull: 'Apa Yang Perlu Dibuat', closing: 'Penutup',
  news: 'Berita', gpl: 'Pelanggaran GPL', eula: 'Perjanjian', cloudBan: 'Larangan Awan',
  social: 'Monopoli Sosial', jan20: 'Insiden 20 Jan', whatToDo: 'Apa Yang Perlu Dibuat',
  homeNav: 'Laman Utama',
}

const th = {
  home: 'หน้าแรก', newsTitle: 'ข่าวสาร',
  gplFull: 'การละเมิด GPL', eulaFull: 'ข้อตกลงผู้ใช้ที่ไม่เป็นธรรม',
  cloudBanFull: 'การควบคุมจากคลาวด์และการแบนบัญชี', socialFull: 'การผูกขาดทางสังคม',
  jan20Full: 'เหตุการณ์ 20 ม.ค.', whatToDoFull: 'สิ่งที่ควรทำ', closing: 'ปิดท้าย',
  news: 'ข่าวสาร', gpl: 'ละเมิด GPL', eula: 'ข้อตกลง', cloudBan: 'แบนจากคลาวด์',
  social: 'ผูกขาดทางสังคม', jan20: '20 ม.ค.', whatToDo: 'สิ่งที่ควรทำ',
  homeNav: 'หน้าแรก',
}

const vi = {
  home: 'Trang chủ', newsTitle: 'Tin tức',
  gplFull: 'Vi phạm GPL', eulaFull: 'Điều khoản người dùng bất công',
  cloudBanFull: 'Kiểm soát đám mây & Khóa tài khoản', socialFull: 'Độc quyền xã hội',
  jan20Full: 'Sự kiện 20/1', whatToDoFull: 'Cần làm gì', closing: 'Kết luận',
  news: 'Tin tức', gpl: 'Vi phạm GPL', eula: 'Điều khoản', cloudBan: 'Khóa đám mây',
  social: 'Độc quyền', jan20: 'Sự kiện 20/1', whatToDo: 'Cần làm gì',
  homeNav: 'Trang chủ',
}

const fil = {
  home: 'Tahanan', newsTitle: 'Balita',
  gplFull: 'Paglabag sa GPL', eulaFull: 'Hindi Makatarungang Kasunduan',
  cloudBanFull: 'Kontrol ng Cloud & Pagbabawal ng Account', socialFull: 'Monopolyo sa Social',
  jan20Full: 'Pangyayari noong Ene 20', whatToDoFull: 'Ano ang Gagawin', closing: 'Pangwakas',
  news: 'Balita', gpl: 'Paglabag sa GPL', eula: 'Kasunduan', cloudBan: 'Bawal sa Cloud',
  social: 'Monopolyo', jan20: 'Ene 20', whatToDo: 'Ano ang Gagawin',
  homeNav: 'Tahanan',
}

const lzh = {
  home: '首頁', newsTitle: '消息',
  gplFull: '違反GPL：內核閉源', eulaFull: '用戶協議之不公',
  cloudBanFull: '雲控與封禁', socialFull: '社交壟斷',
  jan20Full: '一月二十日事變', whatToDoFull: '何以應對', closing: '結語',
  news: '消息', gpl: '違反GPL', eula: '協議不公', cloudBan: '雲控封禁',
  social: '社交壟斷', jan20: '一月二十日', whatToDo: '何以應對',
  homeNav: '首頁',
}

const hi = {
  home: 'होम', newsTitle: 'समाचार',
  gplFull: 'GPL उल्लंघन', eulaFull: 'EULA अत्याचार',
  cloudBanFull: 'क्लाउड नियंत्रण और खाता प्रतिबंध', socialFull: 'सोशल मोनोपोली',
  jan20Full: '20 जनवरी घटना', whatToDoFull: 'क्या करें', closing: 'समापन',
  news: 'समाचार', gpl: 'GPL उल्लंघन', eula: 'EULA', cloudBan: 'क्लाउड प्रतिबंध',
  social: 'सोशल मोनोपोली', jan20: '20 जनवरी', whatToDo: 'क्या करें',
  homeNav: 'होम',
}

export default defineConfig({
  title: 'keepxtcopen',
  description: '小天才系列设备的封闭机制、权限管控、账号封禁策略、内核闭源现状与生态壁垒问题',
  lang: 'zh-CN',
  base: '/keepxtcopen/',

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'keepxtcopen 最新消息', href: '/keepxtcopen/news/rss.xml' }],
  ],

  locales: {
    root: localeConfig('', '简体中文', 'zh-CN', zh, '保留所有權利 — 內容採用 CC0 1.0許可'),
    en: localeConfig('en', 'English', 'en', en, 'All Rights Reserved — Content licensed under CC0 1.0'),
    'zh-hk': localeConfig('zh-hk', '繁體中文', 'zh-HK', hk, '保留所有權利 — 內容採用 CC0 1.0許可'),
    id: localeConfig('id', 'Bahasa Indonesia', 'id', id, 'Hak Cipta Dilindungi — Konten dilisensikan di bawah CC0 1.0'),
    ms: localeConfig('ms', 'Bahasa Melayu', 'ms', ms, 'Hak Cipta Terpelihara — Kandungan dilesenkan di bawah CC0 1.0'),
    th: localeConfig('th', 'ภาษาไทย', 'th', th, 'สงวนลิขสิทธิ์ — เนื้อหาได้รับอนุญาตภายใต้ CC0 1.0'),
    vi: localeConfig('vi', 'Tiếng Việt', 'vi', vi, 'Đã đăng ký bản quyền — Nội dung được cấp phép theo CC0 1.0'),
    fil: localeConfig('fil', 'Filipino', 'fil', fil, 'Nakalaan ang Lahat ng Karapatan — Nilalaman ay lisensyado sa ilalim ng CC0 1.0'),
    lzh: localeConfig('lzh', '文言文', 'lzh', lzh, '保留所有權利 — 內容採用 CC0 1.0許可'),
    hi: localeConfig('hi', 'हिन्दी', 'hi', hi, 'सर्वाधिकार सुरक्षित — सामग्री CC0 1.0 के तहत लाइसेंस प्राप्त है'),
  },

  themeConfig: {
    logo: false,
    search: { provider: 'local' },
  },

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
})
