// PWA Service Worker 注册
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[PWA] Service Worker 注册成功:', registration.scope);
          
          // 监听更新
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[PWA] 发现新版本，请刷新页面更新');
                  // 可以在这里显示更新提示
                  // showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('[PWA] Service Worker 注册失败:', error);
        });
    });
  } else {
    console.log('[PWA] 浏览器不支持 Service Worker');
  }
};

// 检查是否已安装
export const isPWAInstalled = (): boolean => {
  return window.matchMedia('(display-mode: standalone)').matches || 
         // @ts-ignore
         window.navigator.standalone === true;
};

// 检查是否支持 PWA 安装
export const canInstallPWA = (): boolean => {
  // @ts-ignore
  return 'BeforeInstallPromptEvent' in window;
};

// 获取安装提示事件（需要在 beforeinstallprompt 事件中保存）
let deferredPrompt: any = null;

export const saveInstallPrompt = (event: Event) => {
  event.preventDefault();
  deferredPrompt = event;
};

export const installPWA = async (): Promise<boolean> => {
  if (!deferredPrompt) {
    return false;
  }
  
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  
  return outcome === 'accepted';
};

// 监听安装提示事件
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', saveInstallPrompt);
}
