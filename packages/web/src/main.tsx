import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import App from './App';
import reset from './styles/reset';
import global from './styles/global';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Global styles={[reset, global]} />
    <App />
  </StrictMode>,
);
