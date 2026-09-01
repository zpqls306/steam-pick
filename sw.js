// 최소한의 서비스 워커입니다. 오프라인 캐싱은 하지 않고,
// 크롬이 PWA 설치(및 공유 대상 등록) 조건으로 요구하는
// "활성 서비스 워커 + fetch 핸들러"만 충족시키는 용도입니다.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
