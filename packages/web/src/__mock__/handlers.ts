import { ProductType } from 'global-types';
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
    const { item } = await req.json<{ item: ProductType }>();

    const carts = await productStore.addCarts(item);
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.patch('/carts', async (req, res, ctx) => {
    const { item } = await req.json<{ item: ProductType }>();

    const carts = await productStore.updateCartItem(item);
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.patch('/cart/item-select', async (req, res, ctx) => {
    const { productId } = await req.json<{ productId: string }>();

    const carts = await productStore.selectCartItem(productId);
    return res(ctx.status(200), ctx.delay(300), ctx.json(carts));
  }),

  rest.patch('/cart/item-select-all', async (req, res, ctx) => {
    const { isChecked } = await req.json<{ isChecked: boolean }>();

    const carts = await productStore.selectAllCartItem(isChecked);
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
