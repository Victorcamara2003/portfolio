/* ================================================================
   SERVICE WORKER — Portfolio Victor Camara (PWA)
   ================================================================
   Stratégie de cache :
   - App Shell (HTML, manifest, icônes) → Cache First
   - Polices Google Fonts & Font Awesome → Stale While Revalidate
   - Tout le reste → Network First avec repli sur le cache
   ================================================================ */

const CACHE_VERSION   = 'v1.0.0';
const CACHE_NAME      = `victor-portfolio-${CACHE_VERSION}`;
const RUNTIME_CACHE    = `victor-runtime-${CACHE_VERSION}`;

/* Fichiers essentiels mis en cache dès l'installation (App Shell) */
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-512-maskable.png',
  './assets/icons/apple-touch-icon.png',
];

/* ----------------------------------------------------------------
   INSTALL — pré-cache l'app shell
---------------------------------------------------------------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => console.warn('[SW] Précache échouée :', err))
  );
});

/* ----------------------------------------------------------------
   ACTIVATE — nettoie les anciens caches
---------------------------------------------------------------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ----------------------------------------------------------------
   FETCH — stratégie adaptée par type de ressource
---------------------------------------------------------------- */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Ignorer les requêtes non-GET (ex: envoi du formulaire FormSubmit) */
  if (request.method !== 'GET') return;

  /* Ne jamais mettre en cache les appels API/formulaire (FormSubmit) */
  if (url.hostname.includes('formsubmit.co')) {
    event.respondWith(fetch(request));
    return;
  }

  /* App shell (même origine) → Cache First avec mise à jour en arrière-plan */
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached); /* hors-ligne → reposer sur le cache */
        return cached || networkFetch;
      })
    );
    return;
  }

  /* Ressources externes (polices, CDN, icônes) → Stale While Revalidate */
  event.respondWith(
    caches.open(RUNTIME_CACHE).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    )
  );
});

/* ----------------------------------------------------------------
   MESSAGE — permet de forcer une mise à jour depuis la page
---------------------------------------------------------------- */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
