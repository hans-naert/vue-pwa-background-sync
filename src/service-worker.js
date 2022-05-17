import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst, NetworkOnly } from 'workbox-strategies';
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

const bgSyncPlugin = new BackgroundSyncPlugin('myQueueName', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes),
    onSync: (options) => {
      console.log('Sync received', options.queue);
      options.queue.replayRequests().then(console.log('Replayed requests', options.queue));
    }
  });

const networkWithBackgroundSync = new NetworkOnly({
    plugins: [bgSyncPlugin],
  });

registerRoute(/.*/, networkWithBackgroundSync,"POST");  
