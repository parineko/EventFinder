/**
 * 日付を日本語形式でフォーマット
 * @param startDate 開始日
 * @param endDate 終了日
 * @returns フォーマットされた日付文字列
 */
export const formatDate = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // 曜日の配列
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  
  // 日付フォーマット関数（曜日付き）
  const formatWithWeekday = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = weekdays[date.getDay()];
    return `${year}/${month}/${day} (${weekday})`;
  };
  
  if (startDate === endDate) {
    return formatWithWeekday(start);
  } else {
    return `${formatWithWeekday(start)} - ${formatWithWeekday(end)}`;
  }
};

/**
 * 日付から曜日を取得
 * @param dateString 日付文字列
 * @returns 曜日（0=日曜日, 1=月曜日, ...）
 */
export const getDayOfWeek = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getDay();
};

/**
 * 曜日名を日本語で取得
 * @param dayOfWeek 曜日（0-6）
 * @returns 日本語の曜日名
 */
export const getDayOfWeekName = (dayOfWeek: number): string => {
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  return weekdays[dayOfWeek];
};
