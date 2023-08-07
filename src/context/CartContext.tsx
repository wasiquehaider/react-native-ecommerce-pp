import * as React from "react";
import { ReactNode, useState, useEffect } from "react";
import { Product } from "../@types/Product";
import CartItemProps from "../@types/CartItem";
import { CartContextProps } from "../@types/CartContextType";

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

type CartContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = React.useState<CartItemProps[]>([]);

  const alreadyExist = (id: number) => {
    return cart.find((item) => item.id === id);
  };

  const addItemCart = (product: Product) => {
    const { id } = product;
    const newItem = { ...product, amount: 1 };

    if (alreadyExist(id)) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemCart = (id: number) => {
    const filteredCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(filteredCart);
  };

  const increaseItem = (product: Product) => {
    const { id } = product;
    if (alreadyExist(id)) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: alreadyExist(id).amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      addItemCart(alreadyExist(id));
    }
  };
  const decreaseItem = (product: Product) => {
    const { id } = product;
    if (alreadyExist(id)) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    alreadyExist(id).amount < 2 && removeItemCart(id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        clearCart,
        increaseItem,
        decreaseItem,
        alreadyExist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
