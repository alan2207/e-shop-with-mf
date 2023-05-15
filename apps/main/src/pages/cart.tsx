import dynamic from "next/dynamic";

const CartPage = dynamic(
  () => import("cart/cart-page").then((mod) => mod.CartPage),
  {
    ssr: false,
  }
);

export const Cart = () => {
  return <CartPage />;
};

export default Cart;
