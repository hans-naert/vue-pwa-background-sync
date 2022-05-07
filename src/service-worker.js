import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);
  
  // Demonstrates using default cache
  registerRoute(
    new RegExp('.*\\.(?:js)'),
    new NetworkFirst(),
  );
  
  // Demonstrates a custom cache name for a route.
  registerRoute(
    new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif)'),
    new CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 3,
        }),
      ],
    }),
  );