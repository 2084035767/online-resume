const CACHE_NAME = 'resume-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/avatar.jpg',
  '/images/qq-qrcode.webp',
  '/images/wechat-qrcode.webp',
];

// 安装时缓存核心资源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => {
      console.error('[Service Worker] Cache failed:', err);
    })
  );
  
  // 立即激活新的 Service Worker
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // 立即接管所有客户端
      return self.clients.claim();
    })
  );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 跳过非 GET 请求
  if (request.method !== 'GET') {
    return;
  }
  
  // 跳过 chrome-extension 请求
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  // 策略：Stale While Revalidate（先返回缓存，同时更新缓存）
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // 如果有缓存，先返回缓存
      if (cachedResponse) {
        // 后台更新缓存
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
        }).catch(() => {
          // 网络请求失败，使用缓存
        });
        
        return cachedResponse;
      }
      
      // 没有缓存，从网络获取
      return fetch(request).then((networkResponse) => {
        // 只缓存成功的 GET 请求
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        
        // 克隆响应（因为 response 只能使用一次）
        const responseToCache = networkResponse.clone();
        
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        
        return networkResponse;
      }).catch((error) => {
        console.error('[Service Worker] Fetch failed:', error);
        // 可以返回离线页面
        // return caches.match('/offline.html');
      });
    })
  );
});

// 监听消息（用于更新）
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
