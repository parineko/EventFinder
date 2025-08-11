export const getCategoryImage = (category: string): string => {
  const categoryImages = {
    music: '/EventFinder/images/categories/music.jpg',
    gourmet: '/EventFinder/images/categories/gourmet.jpg',
    culture: '/EventFinder/images/categories/culture.jpg',
    sports: '/EventFinder/images/categories/sports.jpg',
    family: '/EventFinder/images/categories/family.jpg'
  };

  return categoryImages[category as keyof typeof categoryImages] || '/EventFinder/images/categories/culture.jpg';
};
