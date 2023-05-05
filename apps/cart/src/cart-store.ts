import { Product } from "products/products-api";
import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

export type CartStore = {
  cartItems: Record<number, CartItem>;
  getCartItems: () => CartItem[];
  getCartItemsCount: () => number;
  getCartTotal: () => number;
  addCartItem: (product: Product, quantity: number) => void;
  removeCartItem: (product: Product) => void;
  clearCart: () => void;
  updateCartItemQuantity: (product: Product, quantity: number) => void;
};

export type CartItem = {
  product: Product;
  quantity: number;
  price: number;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: {},
      getCartItems: () => {
        return Object.values(get().cartItems);
      },
      getCartItemsCount: () => {
        return Object.values(get().cartItems).reduce(
          (acc, item) => acc + item.quantity,
          0
        );
      },
      getCartTotal: () => {
        return Object.values(get().cartItems).reduce(
          (acc, item) => acc + item.price,
          0
        );
      },
      addCartItem: (product, quantity) => {
        const { cartItems } = get();
        const cartItem = cartItems[product.id];
        if (cartItem) {
          cartItem.quantity += quantity;
          cartItem.price = cartItem.product.price * cartItem.quantity;
        } else {
          cartItems[product.id] = {
            product,
            quantity,
            price: product.price * quantity,
          };
        }
        set({ cartItems });
      },
      removeCartItem: (product) => {
        const { cartItems } = get();
        delete cartItems[product.id];
        set({ cartItems });
      },
      clearCart: () => {
        set({ cartItems: {} });
      },
      updateCartItemQuantity: (product, quantity) => {
        const { cartItems } = get();
        const cartItem = cartItems[product.id];
        if (cartItem) {
          cartItem.quantity = quantity;
          cartItem.price = cartItem.product.price * cartItem.quantity;
        }
        set({ cartItems });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
