import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'

// 画像コピー用カスタムプラグイン（確実に動作）
const copyImagesPlugin = () => {
  return {
    name: 'copy-images',
    writeBundle() {
      try {
        const sourceDir = path.resolve(__dirname, 'public/images')
        const targetDir = path.resolve(__dirname, 'dist/images')
        
        console.log('🔄 Starting image copy process...')
        console.log('Source:', sourceDir)
        console.log('Target:', targetDir)
        
        if (existsSync(sourceDir)) {
          // ディレクトリを再帰的に作成
          mkdirSync(targetDir, { recursive: true })
          console.log('✅ Created target directory')
          
          // カテゴリフォルダをコピー
          const categoriesSource = path.join(sourceDir, 'categories')
          const categoriesTarget = path.join(targetDir, 'categories')
          
          if (existsSync(categoriesSource)) {
            mkdirSync(categoriesTarget, { recursive: true })
            console.log('✅ Created categories directory')
            
            const files = readdirSync(categoriesSource)
            console.log('📁 Found files:', files)
            
            files.forEach(file => {
              const sourcePath = path.join(categoriesSource, file)
              const targetPath = path.join(categoriesTarget, file)
              copyFileSync(sourcePath, targetPath)
              console.log(`✅ Copied: ${file}`)
            })
            
            console.log('🎉 All images copied successfully!')
          } else {
            console.log('⚠️ Categories source directory not found')
          }
        } else {
          console.log('⚠️ Source directory not found')
        }
      } catch (error) {
        console.error('❌ Error during image copy:', error)
        // エラーが発生してもビルドを継続
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyImagesPlugin()],
  base: '/EventFinder/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public',
})
