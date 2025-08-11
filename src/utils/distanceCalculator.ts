/**
 * 2点間の距離を計算する（ハーバーサイン公式）
 * @param lat1 地点1の緯度
 * @param lng1 地点1の経度
 * @param lat2 地点2の緯度
 * @param lng2 地点2の経度
 * @returns 距離（km、整数値）
 */
export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // 地球の半径（km）
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c); // kmで整数値
};

/**
 * 都道府県からの距離を取得
 * @param eventLat イベントの緯度
 * @param eventLng イベントの経度
 * @param prefectureLat 都道府県の緯度
 * @param prefectureLng 都道府県の経度
 * @returns 距離テキスト（例: "150km"）
 */
export const getDistanceText = (eventLat: number, eventLng: number, prefectureLat: number, prefectureLng: number): string => {
  const distance = calculateDistance(prefectureLat, prefectureLng, eventLat, eventLng);
  return `${distance}km`;
};
