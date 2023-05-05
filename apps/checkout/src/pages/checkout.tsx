import dynamic from "next/dynamic";

const CheckoutPage = dynamic(
  () => import("checkout/checkout-page").then((mod) => mod.CheckoutPage),
  {
    ssr: false,
  }
);

const Checkout = () => {
  return <CheckoutPage />;
};

export default Checkout;
