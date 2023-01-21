import { Outlet } from 'react-router-dom';
//
import { Header } from '@/components';

const DefaultLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default DefaultLayout;
