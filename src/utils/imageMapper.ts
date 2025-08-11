export const getCategoryImage = (category: string): string => {
  // Use import.meta.env.BASE_URL for Vite
  const basePath = import.meta.env.BASE_URL;
  
  // Ensure proper path joining (avoid double slashes or missing slashes)
  const normalizePath = (base: string, path: string) => {
    const cleanBase = base.endsWith('/') ? base : base + '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return cleanBase + cleanPath;
  };
  
  // Debug logging for path generation
  console.log('=== ImageMapper Debug ===');
  console.log('BASE_URL:', basePath);
  console.log('BASE_URL type:', typeof basePath);
  console.log('BASE_URL length:', basePath?.length);
  
  const categoryImages = {
    music: normalizePath(basePath, 'images/categories/music.jpg'),
    gourmet: normalizePath(basePath, 'images/categories/gourmet.jpg'),
    culture: normalizePath(basePath, 'images/categories/culture.jpg'),
    sports: normalizePath(basePath, 'images/categories/sports.jpg'),
    family: normalizePath(basePath, 'images/categories/family.jpg')
  };

  const selectedImage = categoryImages[category as keyof typeof categoryImages] || normalizePath(basePath, 'images/categories/culture.jpg');
  
  // Debug logging for final path
  console.log('Category:', category);
  console.log('Generated path:', selectedImage);
  console.log('Full URL would be:', window.location.origin + selectedImage);
  console.log('========================');
  
  return selectedImage;
};
