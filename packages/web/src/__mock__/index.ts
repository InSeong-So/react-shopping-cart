import { worker } from './browser';
import { productStore } from './store';

const url = {
  url:
    process.env.NODE_ENV === 'production' ? '/react-shopping-cart/mockServiceWorker.js' : undefined,
};

const initializeMockupWorker = async () => {
  await Promise.all([
    productStore.init(),
    worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: { ...url },
    }),
  ]);
};

export default initializeMockupWorker;
