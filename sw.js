const CACHE_NAME = 'gas-dok-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Biarkan request upload ke Google Drive lewat langsung (network only)
  if (event.request.url.includes('googleapis.com')) {
    return;
  }
  
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Fitur Background Sync (Opsional untuk nanti)
self.addEventListener('sync', (event) => {
  if (event.tag === 'upload-queue') {
    console.log('Sinkronisasi antrean upload berjalan...');
  }
});
