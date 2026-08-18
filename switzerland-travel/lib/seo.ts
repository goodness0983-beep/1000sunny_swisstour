export const siteConfig = {
  name: "瑞士旅遊專賣店｜瑞士旅遊懶人包與行程規劃",
  shortName: "瑞士旅遊專賣店",
  description:
    "瑞士旅遊懶人包：從認識瑞士、最佳旅遊季節、交通攻略，到9天冬雪奇緣、18天純鐵道深度之旅，加入 LINE 好友即可免費諮詢客製化瑞士自由行行程。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://switzerland-travel.vercel.app",
  locale: "zh_TW",
  keywords: [
    "瑞士旅遊",
    "瑞士自由行",
    "瑞士旅遊懶人包",
    "瑞士行程",
    "瑞士旅遊行程",
    "瑞士跟團",
    "瑞士旅行團",
    "瑞士鐵道旅遊",
    "瑞士旅遊推薦",
    "瑞士9天",
    "瑞士18天",
  ],
};

export const lineConfig = {
  displayName: "瑞士旅遊專賣店",
  lineId: "@switzerlandtravel",
  addFriendUrl: "https://lin.ee/r5lfH6e",
};

// 品牌標語，用於 Footer／Header 等需要簡短介紹的地方
export const tagline = "瑞士旅遊專賣，從景點到體驗都專精。";

// Footer 快速連結（僅連到外部既有頁面，不在本站另外建立內容）
export const footerLinks = [
  { label: "匯率查詢", href: "https://rate.bot.com.tw/xrt?Lang=zh-tw&redirect=true" },
  {
    label: "天氣查詢",
    href: "https://www.myswitzerland.com/zh-hant/planning/weather-climate/forecast-for-switzerland/",
  },
  { label: "防詐騙提醒", href: "https://switzerland-travel.tw/anti-fraud-reminder/" },
  { label: "隱私權政策", href: "https://switzerland-travel.tw/privacy-policy/" },
];

// 服務專員與公司合法登記資訊（旅行社網站慣例必須揭露，也是重要的信任背書 SEO 元素）
export const companyInfo = {
  agentName: "鄧涵榛 (小榛)",
  agentTitle: "熱情服務專員",
  bookingPhone: "(02)7742-0417",
  bookingPhoneHref: "0277420417",
  companyName: "千陽號旅行社有限公司中山分公司",
  companyType: "甲種旅行社",
  address: "台北市中山區民生東路一段13號3樓",
  representative: "李榮朋",
  travelBureauNo: "868201",
  qualityAssuranceNo: "北2690號",
  mainPhone: "02-2599-3552",
  mainPhoneHref: "0225993552",
  fax: "02-2521-0349",
  email: "tour@1000sunnytour.com.tw",
};
