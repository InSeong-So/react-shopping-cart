import { Routes as ProjectRoutes, Route, Navigate } from 'react-router-dom';
//
import DefaultLayout from './template/DefaultLayout';
import ProductsPage from './pages/ProductsPage';
import CartsPage from './pages/CartsPage';
import OrdersPage from './pages/OrdersPage';

const Routes = () => (
  <ProjectRoutes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Navigate to="/products" />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="carts" element={<CartsPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Route>
  </ProjectRoutes>
);

export default Routes;
