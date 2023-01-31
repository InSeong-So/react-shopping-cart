import { worker } from './browser';
import { productStore } from './store';

const initializeMockupWorker = async () => {
  await Promise.all([
    productStore.init(),
    worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url:
          process.env.NODE_ENV === 'production'
            ? '/react-shopping-cart/packages/web/public/mockServiceWorker.js'
            : '/packages/web/public/mockServiceWorker.js',
      },
    }),
  ]);
};

export default initializeMockupWorker;
