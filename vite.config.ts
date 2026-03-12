import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    // 启用 gzip 压缩大小报告
    reportCompressedSize: true,
    // CSS 代码分割
    cssCodeSplit: true,
    // 资源内联阈值（8KB 以下内联）
    assetsInlineLimit: 8192,
    // Rollup 输出配置
    rollupOptions: {
      output: {
        // 手动代码分割策略
        manualChunks: {
          // 将大型依赖单独打包
          'vendor-react': ['react', 'react-dom'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react', '@icons-pack/react-simple-icons'],
          // PDF 相关库单独打包（虽然会动态导入，但备用）
          'vendor-pdf': ['jspdf', 'html2canvas'],
        },
        // 入口文件命名
        entryFileNames: 'assets/[name]-[hash].js',
        // chunk 文件命名
        chunkFileNames: 'assets/[name]-[hash].js',
        // 资源文件命名
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || '')) {
            return 'images/[name]-[hash][extname]';
          }
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // 压缩选项（使用默认 esbuild）
    minify: 'esbuild',
  },
});