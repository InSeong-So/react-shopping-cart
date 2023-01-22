import { BrowserRouter } from 'react-router-dom';
//
import { Header } from '@/components';
import Routes from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
