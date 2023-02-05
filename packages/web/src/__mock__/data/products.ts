import * as 모든_상품_목록 from 'assets';
//
import type { ProductType } from 'global-types';

const {
  bread,
  cake,
  coffee: { blended, brewedCoffee, coldBrew, espresso, frappuccino, tea },
} = 모든_상품_목록;

const listParser = (fileList: Array<[string, string]>, name: string, classification = name) =>
  fileList.map(([title, src], index) => ({
    productId: `${classification}-${index}`,
    title: title.replace(/_/gi, ' '),
    src,
    category: name,
    classification,
    price: (
      Math.floor(Math.random() * 6 + 3) * 1000 +
      Math.floor(Math.random() * 9 + 1) * 100
    ).toLocaleString(),
    quantity: 1,
  }));

const products = [
  ...listParser(Object.entries(bread), 'bread'),
  ...listParser(Object.entries(cake), 'cake'),
  ...listParser(Object.entries(blended), 'coffee', 'blended'),
  ...listParser(Object.entries(brewedCoffee), 'coffee', 'brewedCoffee'),
  ...listParser(Object.entries(coldBrew), 'coffee', 'coldBrew'),
  ...listParser(Object.entries(espresso), 'coffee', 'espresso'),
  ...listParser(Object.entries(frappuccino), 'coffee', 'frappuccino'),
  ...listParser(Object.entries(tea), 'coffee', 'tea'),
] as ProductType[];

const shuffle = (array: unknown[]) => {
  array.sort(() => Math.random() - 0.5);
};

shuffle(products);

export default products;
