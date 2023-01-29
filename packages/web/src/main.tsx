import './global.css';
//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//
import App from './App';
import initializeMockupWorker from './__mock__';

initializeMockupWorker().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
