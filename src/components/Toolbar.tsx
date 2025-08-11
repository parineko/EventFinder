import React from 'react';
import { Grid, List } from 'lucide-react';
import { SortOption, ViewMode } from '@/types';

interface ToolbarProps {
  eventCount: number;
  sortBy: SortOption;
  viewMode: ViewMode;
  onSortChange: (sortBy: SortOption) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
  showDistanceSort: boolean;
  loading: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  eventCount,
  sortBy,
  viewMode,
  onSortChange,
  onViewModeChange,
  showDistanceSort,
  loading
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="flex items-center gap-2 text-blue-600">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
              <span className="text-sm font-medium">検索中...</span>
            </div>
          ) : (
            <span className="text-lg text-gray-700 font-medium">
              🎉 {eventCount}件のイベント
            </span>
          )}
          
          {/* ソート */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="border-2 border-blue-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all"
          >
            <option value="date">📅 開催日順</option>
            <option value="dayOfWeek">📆 曜日順</option>
            {showDistanceSort && (
              <option value="distance">📍 距離順</option>
            )}
          </select>
        </div>

        {/* ビュー切り替え */}
        <div className="flex rounded-xl border-2 border-blue-200 overflow-hidden bg-white/50 backdrop-blur-sm">
          <button
            onClick={() => onViewModeChange('card')}
            className={`px-4 py-2 flex items-center gap-2 transition-all duration-200 ${
              viewMode === 'card' 
                ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Grid className="w-4 h-4" />
            カード
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`px-4 py-2 flex items-center gap-2 transition-all duration-200 ${
              viewMode === 'list' 
                ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-blue-50'
            }`}
          >
            <List className="w-4 h-4" />
            リスト
          </button>
        </div>
      </div>
    </div>
  );
};
