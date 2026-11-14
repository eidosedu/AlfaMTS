/* ============================================================================
   ALFAMTS - SERVICE WORKER 100% OFFLINE (sw.js)
   Cache-First para App Shell, Mídias (.webp / .ogg / .ttf) e Jogos Arcade
   ============================================================================ */
const CACHE_NAME = 'alfamts-offline-v6';

const CORE_ASSETS = [
    './',
    './index.html',
    './style.css',
    './database.js',
    './app.js',
    './manifest.json',
    './assets/img/palavras/catalog.json',
    './arcade/manifest.json',
    './arcade/baloes/index.html',
    './arcade/superchef/index.html',
    './arcade/superchef/style.css',
    './arcade/superchef/game.js',
    './arcade/cosmojump/index.html',
    './arcade/cosmojump/style.css',
    './arcade/cosmojump/game.js',
    './arcade/guardiao/index.html',
    './arcade/guardiao/style.css',
    './arcade/guardiao/game.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            for (const assetUrl of CORE_ASSETS) {
                try {
                    await cache.add(assetUrl);
                } catch (e) {
                    // Ignora silenciosamente arquivos opcionais que ainda não existam no repositório
                }
            }
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) {
                // Atualiza em segundo plano quando houver conexão (Stale-While-Revalidate)
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                }).catch(() => {});
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200) {
                    return networkResponse;
                }
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                return new Response('', { status: 404, statusText: 'Offline' });
            });
        })
    );
});
