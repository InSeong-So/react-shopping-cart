import { worker } from './browser';
import { productStore } from './store';

const initializeMockupWorker = async () => {
  await Promise.all([productStore.init(), worker.start({ onUnhandledRequest: 'bypass' })]);
};

export default initializeMockupWorker;
