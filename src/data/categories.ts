import { Category } from '@/types';

// カテゴリ定義（旅行らしい色合いに変更）
export const categories: Category[] = [
  { 
    id: 'music', 
    name: '音楽・エンタメ', 
    color: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200' 
  },
  { 
    id: 'gourmet', 
    name: 'グルメ・祭り', 
    color: 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200' 
  },
  { 
    id: 'culture', 
    name: '文化・展示', 
    color: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200' 
  },
  { 
    id: 'sports', 
    name: 'スポーツ・アウトドア', 
    color: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200' 
  },
  { 
    id: 'family', 
    name: 'ファミリー', 
    color: 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-orange-200' 
  }
];

// カテゴリIDからカテゴリ情報を取得する関数
export const getCategoryInfo = (categoryId: string): Category => {
  return categories.find(cat => cat.id === categoryId) || { 
    id: '', 
    name: '', 
    color: 'bg-gray-100 text-gray-800 border-gray-200' 
  };
};
