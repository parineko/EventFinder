export const getCategoryImage = (category: string): string => {
  const categoryImages = {
    music: '/images/categories/music.jpg',
    gourmet: '/images/categories/gourmet.jpg', 
    culture: '/images/categories/culture.jpg',
    sports: '/images/categories/sports.jpg',
    family: '/images/categories/family.jpg'
  };
  
  return categoryImages[category as keyof typeof categoryImages] || '/images/categories/culture.jpg';
};
