export const getCategoryImage = (category: string): string => {
  // GitHub Pages環境とローカル環境の両方で動作するパス
  // 現在のURLからベースパスを動的に取得
  const basePath = window.location.pathname.includes('/EventFinder/') ? '/EventFinder/' : '/';
  
  const categoryImages = {
    music: `${basePath}images/categories/music.jpg`,
    gourmet: `${basePath}images/categories/gourmet.jpg`,
    culture: `${basePath}images/categories/culture.jpg`,
    sports: `${basePath}images/categories/sports.jpg`,
    family: `${basePath}images/categories/family.jpg`
  };

  return categoryImages[category as keyof typeof categoryImages] || `${basePath}images/categories/culture.jpg`;
};
