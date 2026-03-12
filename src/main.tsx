import '@/styles/globals.css'
import '@/i18n/config'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { registerServiceWorker } from '@/utils/registerSW'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// 注册 PWA Service Worker
registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
