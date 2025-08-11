import React from 'react';
import { Search, Navigation } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '@/types';
import { prefectures } from '@/data/prefectures';
import { categories } from '@/data/categories';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key: keyof SearchFiltersType, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const resetFilters = () => {
    onFiltersChange({
      selectedPrefecture: '',
      selectedCategory: '',
      selectedRegion: '',
      startDate: '',
      endDate: ''
    });
  };

  // 地域選択の処理
  const handleRegionSelect = (regionName: string) => {
    // 既に選択されている地域をクリックした場合は選択解除
    if (filters.selectedRegion === regionName) {
      onFiltersChange({
        ...filters,
        selectedRegion: ''
      });
    } else {
      // 新しい地域を選択
      onFiltersChange({
        ...filters,
        selectedRegion: regionName
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* 検索条件 */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
          <Search className="w-5 h-5 mr-2 text-blue-500" />
          検索条件
        </h2>

        {/* 地域フィルター */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            地域で絞り込み
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { name: '北海道・東北', icon: '🏔️' },
              { name: '関東', icon: '🏙️' },
              { name: '中部', icon: '🗻' },
              { name: '関西', icon: '🏯' },
              { name: '中国・四国', icon: '⛩️' },
              { name: '九州・沖縄', icon: '🌺' }
            ].map(region => (
              <button
                key={region.name}
                onClick={() => handleRegionSelect(region.name)}
                className={`p-2 rounded-lg border-2 transition-all duration-200 text-center ${
                  filters.selectedRegion === region.name
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="text-sm mb-1">{region.icon}</div>
                <div className="text-xs font-medium">{region.name}</div>
              </button>
            ))}
          </div>
          {filters.selectedRegion && (
            <p className="text-xs text-blue-600 mt-2">
              💡 {filters.selectedRegion}地域のイベントのみ表示中
            </p>
          )}
        </div>

        {/* 都道府県選択（出発地） */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Navigation className="w-4 h-4 mr-1 text-blue-500" />
            出発地（距離計算の基準）
          </label>
          <select
            value={filters.selectedPrefecture}
            onChange={(e) => handleFilterChange('selectedPrefecture', e.target.value)}
            className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
          >
            <option value="">出発地を選択</option>
            {prefectures.map(pref => (
              <option key={pref} value={pref}>{pref}</option>
            ))}
          </select>
          {filters.selectedPrefecture && (
            <p className="text-xs text-blue-600 mt-2">
              💡 {filters.selectedPrefecture}からの距離で並び替えできます
            </p>
          )}
        </div>

        {/* カテゴリ選択 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            カテゴリ
          </label>
          <select
            value={filters.selectedCategory}
            onChange={(e) => handleFilterChange('selectedCategory', e.target.value)}
            className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
          >
            <option value="">すべてのカテゴリ</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* 日付範囲 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            開催日
          </label>
          <div className="space-y-3">
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
              placeholder="開始日"
            />
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
              placeholder="終了日"
            />
          </div>
        </div>

        {/* リセットボタン */}
        <button
          onClick={resetFilters}
          className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium"
        >
          🔄 条件をリセット
        </button>
      </div>
    </div>
  );
};
