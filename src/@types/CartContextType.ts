import { Product } from "./Product";

export interface CartContextProps  {
  cart: Product[];
  addItemCart: (product: Product, id: number) => void;
  removeItemCart: (id: number) => void;
  clearCart: () => void;
  increaseItem: (Product: Product) => void;
  decreaseItem: (Product: Product) => void;
  alreadyExist: (id: number) => void;
};
