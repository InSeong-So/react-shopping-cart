declare module 'domain' {
  type ProductType = {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
  };

  type ProductsType = {
    response: ProductType[];
  };

  type CartType = {
    id: number;
    products: ProductType;
  };

  type CartsType = {
    response: CartType[];
  };

  type OrderDetailsType = ProductType & { quantity: number };

  type OrderType = {
    response: {
      id: number;
      orderDetails: OrderDetailsType[];
    };
  };

  type OrdersType = {
    response: {
      id: number;
      orderDetails: OrderDetailsType[];
    }[];
  };
}
