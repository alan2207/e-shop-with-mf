import { Product } from "shared";
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
export declare const useCart: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CartStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<CartStore, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: CartStore) => void) => () => void;
        onFinishHydration: (fn: (state: CartStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<CartStore, unknown>>;
    };
}>;
