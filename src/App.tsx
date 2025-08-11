import React, { useState, useMemo, useEffect } from 'react';
import { SearchFilters } from '@/components/SearchFilters';
import { Toolbar } from '@/components/Toolbar';
import { EventCard } from '@/components/EventCard';
import { EventList } from '@/components/EventList';
import { events } from '@/data/events';
import { prefectureCoordinates, regions } from '@/data/prefectures';
import { calculateDistance } from '@/utils/distanceCalculator';
import { getDayOfWeek } from '@/utils/dateFormatter';
import { SearchFilters as SearchFiltersType, SortOption, ViewMode } from '@/types';

const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFiltersType>({
    selectedPrefecture: '',
    selectedCategory: '',
    selectedRegion: '',
    startDate: '',
    endDate: ''
  });
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [loading, setLoading] = useState(false);

  // フィルタリングとソート（修正版）
  const filteredEvents = useMemo(() => {
    let filtered = events.filter(event => {
      // カテゴリフィルター
      if (filters.selectedCategory && event.category !== filters.selectedCategory) return false;
      
      // 日付フィルター
      if (filters.startDate && event.endDate < filters.startDate) return false;
      if (filters.endDate && event.startDate > filters.endDate) return false;
      
      // 地域フィルター
      if (filters.selectedRegion) {
        const selectedRegion = regions.find(region => region.name === filters.selectedRegion);
        if (selectedRegion && !selectedRegion.prefectures.includes(event.prefecture)) {
          return false;
        }
      }
      
      return true;
    });

    // ソート処理
    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.startDate) - new Date(b.startDate);
      }
      if (sortBy === 'dayOfWeek') {
        const dayA = getDayOfWeek(a.startDate);
        const dayB = getDayOfWeek(b.startDate);
        if (dayA !== dayB) return dayA - dayB;
        return new Date(a.startDate) - new Date(b.startDate);
      }
      if (sortBy === 'distance' && filters.selectedPrefecture) {
        const baseLoc = prefectureCoordinates[filters.selectedPrefecture];
        if (baseLoc) {
          const distA = calculateDistance(baseLoc.lat, baseLoc.lng, a.lat, a.lng);
          const distB = calculateDistance(baseLoc.lat, baseLoc.lng, b.lat, b.lng);
          return distA - distB;
        }
      }
      return 0;
    });
    
    return filtered;
  }, [filters, sortBy]);

  // ローディング状態の管理を別のuseEffectで実装
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [filters, sortBy]);

  // 距離テキストの計算
  const distanceTexts = useMemo(() => {
    if (sortBy === 'distance' && filters.selectedPrefecture) {
      const baseLoc = prefectureCoordinates[filters.selectedPrefecture];
      if (baseLoc) {
        const texts: { [key: number]: string } = {};
        filteredEvents.forEach(event => {
          texts[event.id] = `${calculateDistance(baseLoc.lat, baseLoc.lng, event.lat, event.lng)}km`;
        });
        return texts;
      }
    }
    return {};
  }, [filteredEvents, sortBy, filters.selectedPrefecture]);

  // 個別イベントの距離テキスト取得
  const getEventDistanceText = (event: any) => {
    if (sortBy === 'distance' && filters.selectedPrefecture) {
      const baseLoc = prefectureCoordinates[filters.selectedPrefecture];
      if (baseLoc) {
        return `${calculateDistance(baseLoc.lat, baseLoc.lng, event.lat, event.lng)}km`;
      }
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 shadow-lg relative overflow-hidden group cursor-pointer">
        {/* グラデーション背景のホバーエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300/30 via-blue-400/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* 光の効果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="group">
            <h1 className="text-3xl font-bold text-white mb-2 header-title group-hover:scale-105 transition-all duration-300 animate-fadeInUp">
              <span className="inline-block group-hover:rotate-12 transition-transform duration-300 mr-3">🌅</span>
              観光イベント検索
            </h1>
            <p className="text-sky-100 text-lg header-subtitle animate-fadeInUp delay-200">
              全国のイベント情報をまとめて検索・あなたの旅をもっと楽しく
            </p>
            
            {/* インタラクティブな下線効果 */}
            <div className="mt-3 h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white/60 rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* サイドバー（検索フィルタ） */}
          <div className="lg:col-span-1">
            <SearchFilters 
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* メインコンテンツ */}
          <div className="lg:col-span-3">
            {/* ツールバー */}
            <Toolbar
              eventCount={filteredEvents.length}
              sortBy={sortBy}
              viewMode={viewMode}
              onSortChange={setSortBy}
              onViewModeChange={setViewMode}
              showDistanceSort={!!filters.selectedPrefecture}
              loading={loading}
            />

            {/* イベント一覧 */}
            {filteredEvents.length > 0 ? (
              viewMode === 'card' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEvents.map(event => (
                    <EventCard
                      key={event.id}
                      event={event}
                      distanceText={getEventDistanceText(event)}
                    />
                  ))}
                </div>
              ) : (
                <EventList
                  events={filteredEvents}
                  distanceTexts={distanceTexts}
                />
              )
            ) : (
              filteredEvents.length === 0 && !loading && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
                  <div className="text-6xl mb-6 animate-bounce">
                    🔍
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    イベントが見つかりませんでした
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    検索条件を変更してお試しください
                  </p>
                  
                  {/* 検索のヒント */}
                  <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                    <h4 className="font-semibold text-blue-800 mb-2">💡 検索のコツ</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 日付範囲を広げてみてください</li>
                      <li>• カテゴリを「すべて」にしてみてください</li>
                      <li>• 地域フィルターを変更してみてください</li>
                      <li>• 出発地を変更してみてください</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => {
                        setFilters({
                          selectedPrefecture: '',
                          selectedCategory: '',
                          selectedRegion: '',
                          startDate: '',
                          endDate: ''
                        });
                      }}
                      className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-sky-600 transition-all duration-200 font-semibold"
                    >
                      🔄 すべてリセット
                    </button>
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, selectedCategory: '', selectedRegion: '' }))}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-semibold"
                    >
                      📂 カテゴリ・地域のみリセット
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
