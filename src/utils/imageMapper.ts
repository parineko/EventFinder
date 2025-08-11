export const getCategoryImage = (category: string): string => {
  const basePath = '/EventFinder/';
  
  const categoryImages: { [key: string]: string } = {
    music: `${basePath}images/categories/music.jpg`,
    gourmet: `${basePath}images/categories/gourmet.jpg`,
    culture: `${basePath}images/categories/culture.jpg`,
    sports: `${basePath}images/categories/sports.jpg`,
    family: `${basePath}images/categories/family.jpg`
  };

  return categoryImages[category] || categoryImages.culture;
};
