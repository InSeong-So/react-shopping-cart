import { BrowserRouter } from 'react-router-dom';
//
import { Header } from '@/components';
import Routes from './Routes';
//
import type { CSSProperties } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div style={styles.root}>
        <Header />
        <main style={styles.main}>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

const styles: Record<'root' | 'main', CSSProperties> = {
  root: {
    width: '100%',
    height: '100%',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
};
