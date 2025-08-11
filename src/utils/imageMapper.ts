export const getCategoryImage = (category: string): string => {
  // BASE_URLの取得とフォールバック
  let basePath = import.meta.env.BASE_URL;
  
  // BASE_URLが未定義の場合のフォールバック
  if (!basePath || basePath === undefined) {
    basePath = '/EventFinder/';
    console.warn('BASE_URL is undefined, using fallback:', basePath);
  }
  
  // 開発環境かどうかの判定
  const isDevelopment = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const imageBasePath = isDevelopment ? '/' : basePath;
  
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
  console.log('Is development:', isDevelopment);
  console.log('Image base path:', imageBasePath);
  
  const categoryImages = {
    music: normalizePath(imageBasePath, 'images/categories/music.jpg'),
    gourmet: normalizePath(imageBasePath, 'images/categories/gourmet.jpg'),
    culture: normalizePath(imageBasePath, 'images/categories/culture.jpg'),
    sports: normalizePath(imageBasePath, 'images/categories/sports.jpg'),
    family: normalizePath(imageBasePath, 'images/categories/family.jpg')
  };

  const selectedImage = categoryImages[category as keyof typeof categoryImages] || normalizePath(imageBasePath, 'images/categories/culture.jpg');
  
  // Debug logging for final path
  console.log('Category:', category);
  console.log('Generated path:', selectedImage);
  if (typeof window !== 'undefined') {
    console.log('Full URL would be:', window.location.origin + selectedImage);
  }
  console.log('========================');
  
  return selectedImage;
};
