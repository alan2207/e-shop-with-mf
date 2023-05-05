import { ReactElement } from "react";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("main/layout").then((mod) => mod.Layout));

const CartPage = dynamic(
  () => import("../components/cart-page").then((mod) => mod.CartPage),
  {
    ssr: false,
  }
);

export const Cart = () => {
  return <CartPage />;
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Cart;
