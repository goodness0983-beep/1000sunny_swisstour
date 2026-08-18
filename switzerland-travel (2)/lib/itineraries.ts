export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Itinerary = {
  slug: string;
  theme: string; // 主題分類標籤
  days: number;
  title: string;
  summary: string;
  highlights: string[];
  suitFor: string;
  schedule: ItineraryDay[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "classic-8-days",
    theme: "經典全覽",
    days: 8,
    title: "經典瑞士全覽 8 日遊",
    summary:
      "第一次去瑞士該怎麼排？這條路線把蘇黎世、琉森、少女峰、馬特洪峰、日內瓦等最經典的城市與山岳景點串在一起，是瑞士旅遊詢問度最高的入門行程。",
    highlights: [
      "少女峰「歐洲之巔」齒軌登山鐵路",
      "琉森湖畔與卡貝爾木橋",
      "策馬特眺望馬特洪峰",
      "日內瓦湖與大噴泉",
    ],
    suitFor: "第一次到瑞士、想一次看完各大代表景點的旅客",
    schedule: [
      { day: 1, title: "抵達蘇黎世", description: "抵達蘇黎世機場，市區漫步舊城區與班霍夫大道，感受瑞士第一大城的節奏。" },
      { day: 2, title: "蘇黎世→琉森", description: "搭乘火車前往琉森，參觀卡貝爾木橋、獅子紀念碑，傍晚沿湖散步。" },
      { day: 3, title: "琉森→皮拉圖斯山", description: "搭乘世界最陡登山齒軌鐵路登上皮拉圖斯山，俯瞰琉森湖全景。" },
      { day: 4, title: "琉森→因特拉肯", description: "轉往因特拉肯，此地是通往少女峰地區的門戶小鎮，被兩座湖泊環繞。" },
      { day: 5, title: "少女峰一日遊", description: "搭乘齒軌鐵路登上海拔 3,454 公尺的少女峰車站，眺望阿萊奇冰川。" },
      { day: 6, title: "因特拉肯→策馬特", description: "前往無車小鎮策馬特，欣賞馬特洪峰的經典山形，體驗登山纜車。" },
      { day: 7, title: "策馬特→日內瓦", description: "搭乘冰河列車路段接續南下，抵達日內瓦，漫步湖畔大噴泉與舊城。" },
      { day: 8, title: "日內瓦離境", description: "自由採買巧克力與瑞士錶紀念品，前往機場賦歸。" },
    ],
  },
  {
    slug: "honeymoon-6-days",
    theme: "蜜月浪漫",
    days: 6,
    title: "蜜月瑞士 6 日浪漫之旅",
    summary:
      "以湖光山色與全景列車為主軸，安排較舒緩的節奏與精緻住宿，適合想在瑞士度過一段浪漫時光的新人。",
    highlights: [
      "蒙投「巧克力列車」與西庸城堡",
      "少女峰景觀餐廳燭光晚餐",
      "日內瓦湖遊船",
      "琉森湖畔精品旅館",
    ],
    suitFor: "新婚夫妻、紀念日旅行、喜歡悠閒節奏的旅客",
    schedule: [
      { day: 1, title: "抵達日內瓦", description: "入住湖景旅館，傍晚沿日內瓦湖散步，欣賞百年花鐘與大噴泉夜景。" },
      { day: 2, title: "日內瓦→蒙投", description: "搭乘沿湖列車前往蒙投，參觀湖畔的西庸城堡，漫步蒙投花園步道。" },
      { day: 3, title: "蒙投→策馬特", description: "轉乘景觀列車前往策馬特，入住能眺望馬特洪峰的湖景小屋。" },
      { day: 4, title: "策馬特山區纜車", description: "搭乘冰河天堂纜車登上海拔 3,883 公尺觀景台，近距離欣賞馬特洪峰。" },
      { day: 5, title: "策馬特→少女峰地區", description: "前往因特拉肯，隔日安排少女峰景觀餐廳，享用高山浪漫晚餐。" },
      { day: 6, title: "琉森賦歸", description: "前往琉森湖畔做最後巡禮，選購紀念禮品後返程。" },
    ],
  },
  {
    slug: "family-7-days",
    theme: "親子同遊",
    days: 7,
    title: "家庭親子瑞士 7 日遊",
    summary:
      "安排較多戶外活動與互動體驗，行程節奏放慢、住宿以方便為主，讓帶著孩子的家庭也能輕鬆享受瑞士的湖光山色。",
    highlights: [
      "琉森交通博物館",
      "格林德瓦纜車與高山遊樂設施",
      "起司/巧克力手作體驗",
      "湖畔天鵝與野餐時光",
    ],
    suitFor: "帶著孩子出遊、重視體驗活動勝於趕行程的家庭",
    schedule: [
      { day: 1, title: "抵達蘇黎世", description: "入住市區家庭房，前往蘇黎世湖畔公園讓孩子放電。" },
      { day: 2, title: "蘇黎世→琉森", description: "參觀琉森交通博物館，館內互動式展區很適合親子共遊。" },
      { day: 3, title: "琉森湖區", description: "搭乘遊船遊覽琉森湖，沿岸餵天鵝、野餐，節奏放慢。" },
      { day: 4, title: "琉森→格林德瓦", description: "前往格林德瓦，入住山谷小鎮，晚間可安排起司火鍋體驗。" },
      { day: 5, title: "格林德瓦纜車與First 山", description: "搭乘纜車登上 First，體驗高山滑索與步道，適合親子活動。" },
      { day: 6, title: "巧克力手作體驗", description: "安排巧克力博物館或手作課程，讓孩子動手體驗瑞士經典甜點文化。" },
      { day: 7, title: "蘇黎世賦歸", description: "返回蘇黎世，前往機場，結束親子瑞士行。" },
    ],
  },
  {
    slug: "rail-deep-9-days",
    theme: "深度鐵道",
    days: 9,
    title: "深度瑞士登山鐵道 9 日遊",
    summary:
      "專為鐵道與登山鐵路愛好者設計，串聯冰河列車、伯連納快車等世界知名觀光路線，深入體驗瑞士精密準點的鐵路系統。",
    highlights: [
      "冰河列車全程體驗（策馬特—聖莫里茲）",
      "伯連納快車跨越阿爾卑斯山口",
      "少女峰與皮拉圖斯山齒軌鐵路",
      "聖哥達全景快車",
    ],
    suitFor: "鐵道迷、喜歡深度慢遊勝於走馬看花的旅客",
    schedule: [
      { day: 1, title: "抵達蘇黎世", description: "市區漫遊，適應時差，為接下來的鐵道行程做準備。" },
      { day: 2, title: "蘇黎世→琉森→皮拉圖斯山", description: "搭乘世界最陡齒軌鐵路登頂皮拉圖斯山。" },
      { day: 3, title: "琉森→因特拉肯→少女峰", description: "搭乘齒軌鐵路登上少女峰車站，眺望阿萊奇冰川。" },
      { day: 4, title: "因特拉肯→策馬特", description: "轉乘前往策馬特，準備隔日展開冰河列車行程。" },
      { day: 5, title: "冰河列車第一段", description: "搭乘冰河列車，穿越歐伯拉普隘口，沿途高山峽谷風光盡收眼底。" },
      { day: 6, title: "冰河列車第二段→聖莫里茲", description: "續搭冰河列車抵達聖莫里茲，入住湖畔旅館。" },
      { day: 7, title: "伯連納快車", description: "搭乘伯連納快車跨越阿爾卑斯山口，沿途高山湖泊與螺旋隧道景觀壯麗。" },
      { day: 8, title: "聖哥達全景快車", description: "體驗聖哥達全景列車，感受貫穿阿爾卑斯山脈的百年鐵路工程。" },
      { day: 9, title: "蘇黎世賦歸", description: "返回蘇黎世，結束這趟深度鐵道之旅。" },
    ],
  },
  {
    slug: "budget-5-days",
    theme: "小資精華",
    days: 5,
    title: "瑞士小資自由行 5 日精華",
    summary:
      "利用最短天數，聚焦蘇黎世、琉森、因特拉肯三大城市，搭配自由行交通票券精算行程，適合預算與假期有限的旅客。",
    highlights: [
      "Swiss Travel Pass 交通套票規劃",
      "琉森舊城與湖畔散步",
      "因特拉肯周邊平價健行步道",
      "超市與平價餐廳採買攻略",
    ],
    suitFor: "假期天數有限、想控制預算但仍想體驗經典景點的旅客",
    schedule: [
      { day: 1, title: "抵達蘇黎世", description: "以自由行交通套票展開行程，市區徒步遊覽舊城與湖畔。" },
      { day: 2, title: "蘇黎世→琉森", description: "當日往返琉森，遊覽卡貝爾木橋與獅子紀念碑，晚間返回蘇黎世住宿以節省費用。" },
      { day: 3, title: "蘇黎世→因特拉肯", description: "前往因特拉肯，入住平價旅館，沿哈德昆姆步道健行，免費欣賞雪山風光。" },
      { day: 4, title: "因特拉肯周邊健行", description: "選擇免纜車費用的平價健行路線，自備野餐午餐節省開銷。" },
      { day: 5, title: "蘇黎世賦歸", description: "返回蘇黎世，於超市採買瑞士巧克力伴手禮後前往機場。" },
    ],
  },
  {
    slug: "winter-ski-6-days",
    theme: "雪季滑雪",
    days: 6,
    title: "瑞士秋冬雪季 6 日遊",
    summary:
      "鎖定策馬特與聖莫里茲兩大滑雪勝地，安排雪地活動與溫泉放鬆行程，體驗瑞士冬季限定的銀白世界。",
    highlights: [
      "策馬特滑雪場與冰川雪地體驗",
      "聖莫里茲高山溫泉",
      "白色聖誕市集氛圍",
      "雪地纜車觀景台",
    ],
    suitFor: "喜歡滑雪、雪地活動，想體驗瑞士冬季風情的旅客",
    schedule: [
      { day: 1, title: "抵達蘇黎世", description: "市區短暫停留，感受歐洲聖誕市集的節慶氛圍。" },
      { day: 2, title: "蘇黎世→策馬特", description: "搭乘火車前往無車小鎮策馬特，入住山城旅館，晚間漫步雪地街道。" },
      { day: 3, title: "策馬特滑雪日", description: "於馬特洪峰腳下的滑雪場體驗滑雪或雪板課程，適合各程度旅客。" },
      { day: 4, title: "策馬特→聖莫里茲", description: "轉往聖莫里茲，這裡是瑞士歷史最悠久的冬季度假勝地之一。" },
      { day: 5, title: "聖莫里茲溫泉與雪地活動", description: "安排高山溫泉放鬆行程，或體驗雪鞋健行、雪橇等輕鬆雪地活動。" },
      { day: 6, title: "蘇黎世賦歸", description: "返回蘇黎世，前往機場結束雪季之旅。" },
    ],
  },
];

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}

export function getAllItinerarySlugs(): string[] {
  return itineraries.map((i) => i.slug);
}
