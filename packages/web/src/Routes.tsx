import { Routes as ProjectRoutes, Route, Navigate } from 'react-router-dom';
//
import {
  ProductListPage,
  ProductDetailPage,
  CartPage,
  OrderListPage,
  OrderDetailPage,
  OrderPage,
} from './pages';

const Routes = () => (
  <ProjectRoutes>
    <Route path="/product-detail" element={<ProductDetailPage />} />
    <Route path="/products" element={<ProductListPage />} />
    <Route path="/carts" element={<CartPage />} />
    <Route path="/order" element={<OrderPage />} />
    <Route path="/order-detail" element={<OrderDetailPage />} />
    <Route path="/orders" element={<OrderListPage />} />
    <Route path="*" element={<Navigate replace to="/products" />} />
  </ProjectRoutes>
);

export default Routes;
