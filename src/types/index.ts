// イベントの型定義
export interface Event {
  id: number;
  name: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  prefecture: string;
  lat: number;
  lng: number;
  url: string;
}

// カテゴリの型定義
export interface Category {
  id: string;
  name: string;
  color: string;
}

// 都道府県の座標型定義
export interface PrefectureCoordinates {
  lat: number;
  lng: number;
}

// 都道府県座標データの型定義
export interface PrefectureCoordinatesMap {
  [key: string]: PrefectureCoordinates;
}

// 検索フィルターの型定義
export interface SearchFilters {
  selectedPrefecture: string;
  selectedCategory: string;
  selectedRegion: string; // 地域フィルターを追加
  startDate: string;
  endDate: string;
}

// ソートオプションの型定義
export type SortOption = 'date' | 'dayOfWeek' | 'distance';

// ビューモードの型定義
export type ViewMode = 'card' | 'list';

// 地域の型定義
export interface Region {
  id: string;
  name: string;
  prefectures: string[];
}
