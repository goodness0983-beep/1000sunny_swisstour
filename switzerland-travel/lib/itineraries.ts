export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Itinerary = {
  slug: string;
  theme: string;
  days: number;
  title: string;
  summary: string;
  highlights: string[];
  suitFor: string;
  priceFrom: string;
  sourceUrl: string;
  schedule: ItineraryDay[];
};

// 只上架這 2 條實際銷售中的行程，內容整理自 switzerland-travel.tw 官網對應行程頁面。
export const itineraries: Itinerary[] = [
  {
    slug: "9days-swisswinter",
    theme: "冬雪奇緣",
    days: 9,
    title: "9天冬雪奇緣超值團",
    summary:
      "團費不到 10 萬，專為瑞士首遊族與小資族設計。9 天濃縮少女峰、白朗峰南針峰纜車、黃金列車頭等艙與瑞士湖區山城，不用請太多假，也能完成一趟真正的瑞士夢。",
    highlights: [
      "少女峰 Jungfraujoch",
      "白朗峰南針峰纜車",
      "黃金景觀列車頭等艙",
      "瑞士湖區山城",
    ],
    suitFor: "第一次去歐洲、假期有限、想用實惠預算圓瑞士夢的旅客",
    priceFrom: "NT$86,800 元起",
    sourceUrl: "https://switzerland-travel.tw/journey/9days/9days-swisswinter/",
    schedule: [
      {
        day: 1,
        title: "桃園 → 北京轉機 → 飛往日內瓦",
        description:
          "於桃園國際機場集合，搭機飛往北京轉機，稍作停留後續飛日內瓦，班機於隔日抵達，夜宿機上。",
      },
      {
        day: 2,
        title: "日內瓦市區觀光 → 夏慕尼 → 南針峰纜車遠眺白朗峰",
        description:
          "漫遊日內瓦湖畔大噴泉與舊城，接著前往法國邊境小鎮夏慕尼，搭乘南針峰纜車近距離眺望歐洲最高峰白朗峰。",
      },
      {
        day: 3,
        title: "塔許 → 策馬特快線 → 策馬特 → 塔許",
        description:
          "從無車小鎮的門戶塔許搭乘策馬特快線深入策馬特，在馬特洪峰腳下的無車山城漫步，感受純淨的高山小鎮氛圍。",
      },
      {
        day: 4,
        title: "塔許 → 蒙特勒 → 西庸古堡 → 黃金列車頭等艙 → 少女峰大區",
        description:
          "參觀日內瓦湖畔的水上城堡西庸古堡，接著搭乘黃金列車頭等艙穿越山野湖泊，抵達少女峰大區入住，準備隔日的高山探險。",
      },
      {
        day: 5,
        title: "少女峰大區 → 格林德瓦 → 琉森",
        description:
          "少女峰大區可自費升級高山行程，途經登山中轉站格林德瓦後，前往保留中世紀風貌的湖畔古城琉森。",
      },
      {
        day: 6,
        title: "琉森市區觀光 → 瑞吉山 → 琉森湖 → 蘇黎世",
        description:
          "漫步卡貝爾橋與獅子紀念碑，搭乘登山鐵道登上「山中之后」瑞吉山俯瞰琉森湖全景，再前往瑞士最大城市蘇黎世。",
      },
      {
        day: 7,
        title: "萊茵瀑布 → 蘇黎世市區觀光 → 伯恩市區觀光",
        description:
          "參觀歐洲流量最大的萊茵瀑布，接著遊覽金融重鎮蘇黎世舊城，再前往世界文化遺產古城伯恩，欣賞中世紀噴泉與大教堂。",
      },
      {
        day: 8,
        title: "日內瓦 → 北京轉機",
        description:
          "早餐後前往機場辦理退稅與登機手續，搭機經北京轉機飛返台灣，夜宿機上。",
      },
      {
        day: 9,
        title: "抵達臺北",
        description: "帶著滿滿的瑞士回憶平安返抵國門，結束這趟冬雪奇緣之旅。",
      },
    ],
  },
  {
    slug: "18days-railways",
    theme: "純鐵道深度",
    days: 18,
    title: "18天瑞士純鐵道漫遊",
    summary:
      "千陽號旗艦純瑞 18 日，真正把瑞士玩透。深度收藏六大名峰、七大名列、十大名鎮，全程搭乘冰河列車、黃金列車、伯連納列車等世界級景觀鐵道，以慢遊節奏完整感受瑞士雪山、湖泊與小鎮交織的夢幻國度。",
    highlights: [
      "冰河列車 Glacier Express",
      "黃金列車 GoldenPass",
      "伯連納列車 Bernina Express",
      "少女峰、馬特洪峰、白朗峰、鐵力士峰等六大名峰",
    ],
    suitFor: "想深度慢遊、不趕行程，或第一次去瑞士就想一次玩透的旅客",
    priceFrom: "NT$258,000 元起",
    sourceUrl: "https://switzerland-travel.tw/journey/18days/18days-railways/",
    schedule: [
      { day: 1, title: "桃園 → 飛往米蘭", description: "於國際機場集合搭機飛往米蘭，班機於隔日清晨抵達，夜宿機上。" },
      {
        day: 2,
        title: "米蘭 → 提拉諾 → 伯連納列車 → 聖莫里茲",
        description:
          "搭乘世界遺產級的伯連納列車，穿越 55 座隧道、翻越 196 座橋梁，沿途飽覽蘭德瓦薩拱橋與 360 度布魯西奧迴旋鐵路橋的壯觀景致，抵達度假勝地聖莫里茲。",
      },
      {
        day: 3,
        title: "聖莫里茲 → 魔女峰 → 庫爾",
        description:
          "感受聖莫里茲「香檳天氣」的奢華低調氛圍，登上魔女峰欣賞冰川與三千米山峰全景，再前往瑞士最古老的城市庫爾。",
      },
      {
        day: 4,
        title: "庫爾 → 冰河列車 → 策馬特",
        description:
          "搭乘瑞士三大景觀列車之一的冰河列車，沿途欣賞田園風光、冰川與山谷地形，抵達馬特洪峰腳下的無車小鎮策馬特。",
      },
      {
        day: 5,
        title: "策馬特 → 哥諾葛拉特登山列車 → 馬特洪峰",
        description:
          "搭乘歐洲最高的露天齒軌鐵路列車登上哥諾葛拉特之巔，近距離眺望金字塔般聳立的馬特洪峰，以及周邊 29 座四千米以上高峰。",
      },
      {
        day: 6,
        title: "策馬特 → 白朗峰快車 → 霞慕尼 → 南針峰",
        description:
          "搭乘白朗峰快車穿越野生峽谷抵達法國小鎮霞慕尼，登上南針峰近距離眺望歐洲最高峰白朗峰全景。",
      },
      {
        day: 7,
        title: "霞慕尼 → 蒙投 → 西庸古堡",
        description:
          "前往日內瓦湖畔的度假勝地蒙投，入內參觀矗立於湖中巨岩上的西庸古堡，感受這座瑞士最受歡迎歷史建築的魅力。",
      },
      {
        day: 8,
        title: "蒙投 → 黃金列車 → 圖恩湖遊船 → 伯恩",
        description:
          "搭乘黃金列車穿越八座湖泊與三座山口的世界文化遺產路段，於圖恩古城搭船遊圖恩湖，再前往世界文化遺產古城伯恩。",
      },
      {
        day: 9,
        title: "伯恩 → 歐士能湖 → 因特拉肯",
        description:
          "造訪有「高山藍湖」之稱的歐士能湖，途經少女峰山腳下的度假小鎮因特拉肯，感受兩湖之間的好山好水。",
      },
      {
        day: 10,
        title: "因特拉肯 → 格林德瓦 → 少女峰 → 艾格快線",
        description:
          "搭乘少女峰齒軌列車登上海拔 3,454 公尺、歐洲最高的少女峰車站，並體驗最新交通工具艾格快線纜車。",
      },
      {
        day: 11,
        title: "格林德瓦 → 菲斯特懸崖步道 → 巴克普湖 → 琉森",
        description:
          "挑戰菲斯特懸崖天空步道近距離感受艾格峰北壁震撼，健行前往「高山明鏡」巴克普湖，再前往湖畔古城琉森。",
      },
      {
        day: 12,
        title: "琉森 → 鐵力士山 → 獅子紀念碑 → 卡貝爾橋",
        description:
          "搭乘世界首創的旋轉登山纜車登上鐵力士峰，體驗冰河吊橋與冰洞，再漫步琉森舊城的獅子紀念碑與卡貝爾橋。",
      },
      {
        day: 13,
        title: "琉森 → 小米滕山 → 啤酒桶纜車 → 蘇黎世",
        description:
          "遠眺小米滕山經典山景，體驗耗資鉅額打造的「世界最陡纜車」Stoos Bahn，再前往瑞士最大城市蘇黎世。",
      },
      {
        day: 14,
        title: "蘇黎世 → 萊茵瀑布遊船 → 聖加侖",
        description:
          "搭船近距離感受歐洲第一大瀑布萊茵瀑布的磅礴氣勢，再前往以世界文化遺產聖加侖修道院聞名的東北大城聖加侖。",
      },
      {
        day: 15,
        title: "聖加侖 → 阿爾卑斯山麓列車 → 盧加諾",
        description:
          "搭乘阿爾卑斯山麓列車穿越連綿丘陵與風景如畫的村莊果園，前往義大利語區的南部湖濱城市盧加諾。",
      },
      {
        day: 16,
        title: "盧加諾自由活動",
        description:
          "在瑞士三大金融中心之一、洋溢義大利倫巴底風情的盧加諾自由漫步，品味悠閒的南歐式湖畔生活。",
      },
      {
        day: 17,
        title: "米蘭 → 飛返桃園",
        description: "搭乘舒適客機從米蘭啟程飛返台灣，夜宿機上。",
      },
      {
        day: 18,
        title: "抵達臺北",
        description: "結束這趟深度感受瑞士雪山、湖泊、鐵道與小鎮的 18 天旅程，平安返抵國門。",
      },
    ],
  },
];

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}

export function getAllItinerarySlugs(): string[] {
  return itineraries.map((i) => i.slug);
}
