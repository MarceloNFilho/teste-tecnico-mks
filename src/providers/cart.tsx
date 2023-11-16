"use client";

import { Product } from "@/components/ProductItem";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  products: CartProduct[];
  cartIsOpen: boolean;
  total: number;
  setCartIsOpen: (state: boolean) => void;
  AddProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, [products]);

  const AddProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts((state) =>
        state.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );
      return;
    }

    setProducts((state) => [...state, product]);
  };

  const decreaseProductQuantity = (productId: number) => {
    setProducts((state) =>
      state
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((state) =>
      state.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: number) => {
    setProducts((state) =>
      state.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartIsOpen,
        setCartIsOpen,
        total,
        AddProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
