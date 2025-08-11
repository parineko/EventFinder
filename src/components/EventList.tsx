import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '@/types';
import { formatDate } from '@/utils/dateFormatter';
import { getCategoryInfo } from '@/data/categories';
import { getCategoryImage } from '@/utils/imageMapper';

interface EventListProps {
  events: Event[];
  distanceTexts?: { [key: number]: string };
}

export const EventList: React.FC<EventListProps> = ({ events, distanceTexts }) => {
  return (
    <div className="space-y-4">
      {events.map(event => {
        const categoryInfo = getCategoryInfo(event.category);
        const distanceText = distanceTexts?.[event.id];
        
        return (
          <div key={event.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex gap-6">
              {/* 画像 */}
              <img
                src={getCategoryImage(event.category)}
                alt={event.name}
                className="w-20 h-16 object-cover rounded-xl"
                loading="lazy"
                onError={(e) => {
                  const basePath = import.meta.env.BASE_URL || '/';
                  e.currentTarget.src = `${basePath}images/categories/culture.jpg`;
                }}
              />
              
              {/* イベント情報 */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-900">
                    {event.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryInfo.color}`}>
                    {categoryInfo.name}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
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
                
                <div className="mt-4">
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
          </div>
        );
      })}
    </div>
  );
};
