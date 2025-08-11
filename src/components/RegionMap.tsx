import React from 'react';
import { MapPin } from 'lucide-react';
import { Region } from '@/types';
import { regions } from '@/data/prefectures';

interface RegionMapProps {
  onRegionSelect?: (region: Region) => void;
}

export const RegionMap: React.FC<RegionMapProps> = ({ onRegionSelect }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
        <MapPin className="w-5 h-5 mr-2 text-green-500" />
        地域から選択
      </h3>
      <div className="grid grid-cols-1 gap-3 text-sm">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => onRegionSelect?.(region)}
            className="p-3 text-left border-2 border-blue-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:border-blue-300 transition-all duration-200 bg-white/50 backdrop-blur-sm"
          >
            🗾 {region.name}
          </button>
        ))}
      </div>
    </div>
  );
};
