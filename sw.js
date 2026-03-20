// ⬆️ Cambiá este número cada vez que subas una actualización al repositorio
const VERSION = '1';
const CACHE = 'asistencia-v' + VERSION;

// Al instalar: cachea el index.html inmediatamente
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(['/']))
      .then(() => self.skipWaiting())
  );
});

// Al activar: borra cachés viejos automáticamente
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: red primero, caché como respaldo offline
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Actualiza el caché con la versión más nueva
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
