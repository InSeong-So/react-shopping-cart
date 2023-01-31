import { memo } from 'react';
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
    <Route path={페이지.상품_상세} element={<ProductDetailPage />} />
    <Route path={페이지.상품_목록} element={<ProductListPage />} />
    <Route path={페이지.장바구니} element={<CartPage />} />
    <Route path={페이지.주문_결제} element={<OrderPage />} />
    <Route path={페이지.주문_상세} element={<OrderDetailPage />} />
    <Route path={페이지.주문_목록} element={<OrderListPage />} />
    <Route path="*" element={<Navigate replace to={페이지.상품_목록} />} />
  </ProjectRoutes>
);

export default memo(Routes);

export const 페이지 = {
  상품_목록: '/products',
  상품_상세: '/product-detail',
  장바구니: '/cart',
  주문_결제: '/order',
  주문_목록: '/orders',
  주문_상세: '/order-detail',
};
