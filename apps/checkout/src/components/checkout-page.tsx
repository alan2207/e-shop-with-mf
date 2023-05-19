import { useForm, CheckoutContactInfo, processCheckout } from "shared";

import Link from "next/link";
import { useRouter } from "next/router";
import { CartSummary } from "cart/cart-summary";
import Head from "next/head";
import { useCart } from "cart/cart-store";

export const CheckoutPage = () => {
  const router = useRouter();
  const { clearCart } = useCart();

  const handleSubmit = (values: CheckoutContactInfo) => {
    processCheckout(values).then(() => {
      alert(`Congratulations! You've successfully placed an order.
  Order details:
  ${JSON.stringify(values, null, 2)}
  `);
      clearCart();
      router.push("/");
    });
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="bg-white">
        <div
          className="top-0 left-0 hidden w-1/2 h-full bg-white lg:block"
          aria-hidden="true"
        />
        <div
          className="top-0 right-0 hidden w-1/2 h-full bg-black lg:block"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 mx-auto max-w-7xl gap-x-16 lg:grid-cols-2 lg:px-8">
          <h1 className="sr-only">Checkout</h1>

          <div className="p-8 bg-black">
            <CartSummary />
          </div>

          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Payment and shipping details
            </h2>

            <CheckoutForm onSubmit={handleSubmit} />
          </section>
        </div>
      </div>
    </>
  );
};

const CheckoutForm = ({
  onSubmit,
}: {
  onSubmit: (values: CheckoutContactInfo) => void;
}) => {
  const { values, onChange } = useForm<CheckoutContactInfo>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
        <div>
          <h3
            id="contact-info-heading"
            className="text-lg font-medium text-gray-900"
          >
            Contact information
          </h3>

          <div className="mt-6">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                onChange={onChange}
                required
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Payment details</h3>

          <div className="grid grid-cols-3 mt-6 gap-x-4 gap-y-6 sm:grid-cols-4">
            <div className="col-span-3 sm:col-span-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="card_number"
                  name="card_number"
                  autoComplete="cc-number"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  name="expiration_date"
                  id="expiration_date"
                  autoComplete="cc-exp"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Shipping address
          </h3>

          <div className="grid grid-cols-1 mt-6 gap-x-4 gap-y-6 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="region"
                  name="region"
                  autoComplete="address-level1"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Zip code
              </label>
              <div className="mt-1">
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="zip_code"
                  name="zip_code"
                  autoComplete="zip-code"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 mt-10 border-t border-gray-200">
          <Link
            href="/products"
            className="font-medium text-gray-600 hover:text-gray-500"
          >
            <span aria-hidden="true">&larr; </span>
            Continue Shopping
          </Link>

          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </form>
  );
};
