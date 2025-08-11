import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '@/types';
import { formatDate } from '@/utils/dateFormatter';
import { getCategoryInfo } from '@/data/categories';
import { getCategoryImage } from '@/utils/imageMapper';

interface EventCardProps {
  event: Event;
  distanceText?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, distanceText }) => {
  const categoryInfo = getCategoryInfo(event.category);

  // デバッグ用（一時的）
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  console.log('Generated image path:', getCategoryImage(event.category));

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* デバッグ用（一時的） */}
      <div style={{fontSize: '12px', color: 'red', padding: '4px'}}>
        Debug: {getCategoryImage(event.category)}
      </div>
      
      <img
        src={getCategoryImage(event.category)}
        alt={event.name}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={(e) => {
          const basePath = import.meta.env.BASE_URL;
          e.currentTarget.src = `${basePath}images/categories/culture.jpg`;
        }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-900 leading-tight">
            {event.name}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryInfo.color}`}>
            {categoryInfo.name}
          </span>
        </div>
        
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            {formatDate(event.startDate, event.endDate)}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-500" />
            {event.location}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold">
              📍 {event.prefecture}
            </span>
            {distanceText && (
              <span className="text-orange-600 font-medium text-xs bg-orange-50 px-2 py-1 rounded-full">
                🚗 {distanceText}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-5">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            詳細を見る
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
