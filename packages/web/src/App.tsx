import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//
import { Header } from '@/components';
import Routes from './Routes';
//
import { CSSProperties } from 'react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div style={styles.root}>
          <Header />
          <main style={styles.main}>
            <Routes />
          </main>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

const styles: Record<'root' | 'main', CSSProperties> = {
  root: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',

    padding: '80px 0',
  },
};
