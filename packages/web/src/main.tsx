import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//
import App from './App';
import GlobalStyle from './GlobalStyle';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
