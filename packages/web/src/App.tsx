import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/products" />} />
          <Route path="products" element={<Products />} />
          <Route path="carts" element={<Home />} />
          <Route path="orders" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
