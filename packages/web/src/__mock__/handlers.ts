import { rest } from 'msw';
import { productStore } from './store';

export const handlers = () => {
  return [...productHandlers];
};

const productHandlers = [
  rest.get('/products', async (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search);
    const start = parseInt(searchParams.get('start') || '');
    const end = parseInt(searchParams.get('end') || '');

    if (isNaN(start) || isNaN(end))
      return res(ctx.status(404), ctx.json({ message: '유효하지 않은 요청입니다.' }));

    const products = await productStore.getProducts(start, end);
    return res(ctx.status(200), ctx.delay(500), ctx.json(products));
  }),

  rest.get('/product', async (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search);
    const productId = searchParams.get('productId') || '';
    if (productId.length <= 0)
      return res(ctx.status(404), ctx.json({ message: '유효하지 않은 요청입니다.' }));

    const product = await productStore.getProductById(productId);
    return res(ctx.status(200), ctx.delay(300), ctx.json(product));
  }),

  rest.get('/carts', async (req, res, ctx) => {
    const carts = await productStore.getCarts();
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.post('/carts', async (req, res, ctx) => {
    const { item } = await req.json();

    const carts = await productStore.addCarts(item);
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.patch('/carts', async (req, res, ctx) => {
    const { item } = await req.json();

    const carts = await productStore.updateCartItem(item);
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.delete('/carts', async (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search);
    const productId = searchParams.get('productId') || '';
    if (productId.length <= 0)
      return res(ctx.status(404), ctx.json({ message: '유효하지 않은 요청입니다.' }));

    const product = await productStore.deleteCartItem(productId);
    return res(ctx.status(200), ctx.delay(300), ctx.json(product));
  }),
];
