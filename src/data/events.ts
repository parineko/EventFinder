import { Event } from '@/types';

// ダミーデータ（緯度経度付き）30件
export const events: Event[] = [
  // 音楽・エンタメ (6件)
  {
    id: 1,
    name: '京都音楽祭2025',
    prefecture: '京都府',
    category: 'music',
    startDate: '2025-08-15',
    endDate: '2025-08-17',
    location: '京都コンサートホール',
    url: 'https://example.com/kyoto-music',
    lat: 35.0116,
    lng: 135.7681
  },
  {
    id: 2,
    name: '沖縄ジャズナイト',
    prefecture: '沖縄県',
    category: 'music',
    startDate: '2025-09-05',
    endDate: '2025-09-05',
    location: '那覇文化芸術劇場',
    url: 'https://example.com/okinawa-jazz',
    lat: 26.2124,
    lng: 127.6792
  },
  {
    id: 3,
    name: '福岡ロックフェス',
    prefecture: '福岡県',
    category: 'music',
    startDate: '2025-08-28',
    endDate: '2025-08-29',
    location: 'マリンメッセ福岡',
    url: 'https://example.com/fukuoka-rock',
    lat: 33.6064,
    lng: 130.4181
  },
  {
    id: 4,
    name: '札幌クラシック音楽祭',
    prefecture: '北海道',
    category: 'music',
    startDate: '2025-09-10',
    endDate: '2025-09-12',
    location: '札幌コンサートホール',
    url: 'https://example.com/sapporo-classic',
    lat: 43.0642,
    lng: 141.3469
  },
  {
    id: 5,
    name: '名古屋ジャズフェスティバル',
    prefecture: '愛知県',
    category: 'music',
    startDate: '2025-10-05',
    endDate: '2025-10-07',
    location: '名古屋国際会議場',
    url: 'https://example.com/nagoya-jazz',
    lat: 35.1802,
    lng: 136.9066
  },
  {
    id: 6,
    name: '仙台音楽の夕べ',
    prefecture: '宮城県',
    category: 'music',
    startDate: '2025-09-20',
    endDate: '2025-09-20',
    location: '仙台国際センター',
    url: 'https://example.com/sendai-music',
    lat: 38.2682,
    lng: 140.8721
  },

  // グルメ・祭り (6件)
  {
    id: 7,
    name: '北海道グルメフェスティバル',
    prefecture: '北海道',
    category: 'gourmet',
    startDate: '2025-08-20',
    endDate: '2025-08-22',
    location: 'さっぽろ大通公園',
    url: 'https://example.com/hokkaido-gourmet',
    lat: 43.0642,
    lng: 141.3469
  },
  {
    id: 8,
    name: '広島お好み焼き祭り',
    prefecture: '広島県',
    category: 'gourmet',
    startDate: '2025-09-15',
    endDate: '2025-09-17',
    location: '平和記念公園',
    url: 'https://example.com/hiroshima-okonomiyaki',
    lat: 34.3963,
    lng: 132.4596
  },
  {
    id: 9,
    name: '青森ねぶた祭り',
    prefecture: '青森県',
    category: 'gourmet',
    startDate: '2025-08-16',
    endDate: '2025-08-16',
    location: '青森市内',
    url: 'https://example.com/aomori-nebuta',
    lat: 40.8244,
    lng: 140.7400
  },
  {
    id: 10,
    name: '大阪たこ焼きフェス',
    prefecture: '大阪府',
    category: 'gourmet',
    startDate: '2025-08-25',
    endDate: '2025-08-26',
    location: '大阪城公園',
    url: 'https://example.com/osaka-takoyaki',
    lat: 34.6937,
    lng: 135.5023
  },
  {
    id: 11,
    name: '新潟酒祭り',
    prefecture: '新潟県',
    category: 'gourmet',
    startDate: '2025-09-28',
    endDate: '2025-09-29',
    location: '朱鷺メッセ',
    url: 'https://example.com/niigata-sake',
    lat: 37.9026,
    lng: 139.0232
  },
  {
    id: 12,
    name: '長崎カステラフェア',
    prefecture: '長崎県',
    category: 'gourmet',
    startDate: '2025-10-12',
    endDate: '2025-10-14',
    location: '長崎駅前広場',
    url: 'https://example.com/nagasaki-castella',
    lat: 32.7448,
    lng: 129.8737
  },

  // 文化・展示 (6件)
  {
    id: 13,
    name: '東京現代美術展',
    prefecture: '東京都',
    category: 'culture',
    startDate: '2025-08-25',
    endDate: '2025-09-10',
    location: '東京都現代美術館',
    url: 'https://example.com/tokyo-art',
    lat: 35.6762,
    lng: 139.6503
  },
  {
    id: 14,
    name: '金沢工芸展',
    prefecture: '石川県',
    category: 'culture',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    location: '金沢21世紀美術館',
    url: 'https://example.com/kanazawa-craft',
    lat: 36.5944,
    lng: 136.6256
  },
  {
    id: 15,
    name: '熊本城復興イベント',
    prefecture: '熊本県',
    category: 'culture',
    startDate: '2025-08-21',
    endDate: '2025-08-23',
    location: '熊本城',
    url: 'https://example.com/kumamoto-castle',
    lat: 32.7898,
    lng: 130.7417
  },
  {
    id: 16,
    name: '奈良歴史文化祭',
    prefecture: '奈良県',
    category: 'culture',
    startDate: '2025-10-01',
    endDate: '2025-10-03',
    location: '奈良国立博物館',
    url: 'https://example.com/nara-history',
    lat: 34.6851,
    lng: 135.8049
  },
  {
    id: 17,
    name: '岩手伝統工芸展',
    prefecture: '岩手県',
    category: 'culture',
    startDate: '2025-09-25',
    endDate: '2025-09-27',
    location: '岩手県民会館',
    url: 'https://example.com/iwate-craft',
    lat: 39.7036,
    lng: 141.1527
  },
  {
    id: 18,
    name: '鹿児島文化祭',
    prefecture: '鹿児島県',
    category: 'culture',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    location: '鹿児島市民文化ホール',
    url: 'https://example.com/kagoshima-culture',
    lat: 31.5602,
    lng: 130.5581
  },

  // スポーツ・アウトドア (6件)
  {
    id: 19,
    name: '富士山登山フェス',
    prefecture: '静岡県',
    category: 'sports',
    startDate: '2025-08-30',
    endDate: '2025-08-30',
    location: '富士山五合目',
    url: 'https://example.com/fuji-climbing',
    lat: 34.9769,
    lng: 138.3831
  },
  {
    id: 20,
    name: '琵琶湖マラソン大会',
    prefecture: '滋賀県',
    category: 'sports',
    startDate: '2025-09-22',
    endDate: '2025-09-22',
    location: '琵琶湖畔',
    url: 'https://example.com/biwako-marathon',
    lat: 35.0045,
    lng: 135.8686
  },
  {
    id: 21,
    name: '長野アルプス登山祭',
    prefecture: '長野県',
    category: 'sports',
    startDate: '2025-10-08',
    endDate: '2025-10-10',
    location: '上高地',
    url: 'https://example.com/nagano-alps',
    lat: 36.6513,
    lng: 138.1810
  },
  {
    id: 22,
    name: '沖縄マリンスポーツ大会',
    prefecture: '沖縄県',
    category: 'sports',
    startDate: '2025-09-18',
    endDate: '2025-09-19',
    location: '美ら海水族館周辺',
    url: 'https://example.com/okinawa-marine',
    lat: 26.2124,
    lng: 127.6792
  },
  {
    id: 23,
    name: '群馬温泉ウォーキング',
    prefecture: '群馬県',
    category: 'sports',
    startDate: '2025-10-20',
    endDate: '2025-10-21',
    location: '草津温泉',
    url: 'https://example.com/gunma-walking',
    lat: 36.3911,
    lng: 139.0608
  },
  {
    id: 24,
    name: '高知四万十川カヌー大会',
    prefecture: '高知県',
    category: 'sports',
    startDate: '2025-09-07',
    endDate: '2025-09-08',
    location: '四万十川',
    url: 'https://example.com/kochi-canoe',
    lat: 33.5597,
    lng: 133.5311
  },

  // ファミリー (6件)
  {
    id: 25,
    name: 'ファミリー夏祭り',
    prefecture: '大阪府',
    category: 'family',
    startDate: '2025-08-18',
    endDate: '2025-08-19',
    location: '大阪城公園',
    url: 'https://example.com/osaka-family',
    lat: 34.6937,
    lng: 135.5023
  },
  {
    id: 26,
    name: '横浜こどもフェスタ',
    prefecture: '神奈川県',
    category: 'family',
    startDate: '2025-09-13',
    endDate: '2025-09-15',
    location: 'みなとみらい21',
    url: 'https://example.com/yokohama-kids',
    lat: 35.4478,
    lng: 139.6425
  },
  {
    id: 27,
    name: '千葉親子動物ふれあい祭',
    prefecture: '千葉県',
    category: 'family',
    startDate: '2025-10-26',
    endDate: '2025-10-27',
    location: '千葉市動物公園',
    url: 'https://example.com/chiba-animal',
    lat: 35.6074,
    lng: 140.1061
  },
  {
    id: 28,
    name: '福島ファミリーキャンプ',
    prefecture: '福島県',
    category: 'family',
    startDate: '2025-09-23',
    endDate: '2025-09-24',
    location: '猪苗代湖畔',
    url: 'https://example.com/fukushima-camp',
    lat: 37.7503,
    lng: 140.4676
  },
  {
    id: 29,
    name: '山口ファミリー釣り大会',
    prefecture: '山口県',
    category: 'family',
    startDate: '2025-10-04',
    endDate: '2025-10-05',
    location: '下関漁港',
    url: 'https://example.com/yamaguchi-fishing',
    lat: 34.1858,
    lng: 131.4706
  },
  {
    id: 30,
    name: '栃木親子いちご狩り祭',
    prefecture: '栃木県',
    category: 'family',
    startDate: '2025-10-11',
    endDate: '2025-10-12',
    location: 'とちぎファームランド',
    url: 'https://example.com/tochigi-strawberry',
    lat: 36.5658,
    lng: 139.8836
  }
];
