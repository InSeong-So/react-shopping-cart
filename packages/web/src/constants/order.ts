import type { OrdersType, OrderType } from 'domain';

export const 단일_주문: OrderType = {
  response: {
    id: 1,
    orderDetails: [
      {
        id: 1,
        price: 10000,
        name: '치킨',
        imageUrl: 'http://example.com/chicken.jpg',
        quantity: 5,
      },
      {
        id: 2,
        price: 20000,
        name: '피자',
        imageUrl: 'http://example.com/pizza.jpg',
        quantity: 3,
      },
    ],
  },
};

export const 주문_리스트: OrdersType = {
  response: [
    {
      id: 1,
      orderDetails: [
        {
          id: 1,
          price: 10000,
          name: '치킨',
          imageUrl: 'http://example.com/chicken.jpg',
          quantity: 5,
        },
        {
          id: 2,
          price: 20000,
          name: '피자',
          imageUrl: 'http://example.com/pizza.jpg',
          quantity: 3,
        },
      ],
    },
    {
      id: 2,
      orderDetails: [
        {
          id: 1,
          price: 10000,
          name: '치킨',
          imageUrl: 'http://example.com/chicken.jpg',
          quantity: 5,
        },
        {
          id: 2,
          price: 20000,
          name: '피자',
          imageUrl: 'http://example.com/pizza.jpg',
          quantity: 3,
        },
      ],
    },
  ],
};
