import { useCart } from "../cart-store";
import { Counter, formatPrice, Product } from "shared";
import Link from "next/link";
import Head from "next/head";
import { useNotifications } from "shared";

import { useCallback } from "react";
import { useRouter } from "next/router";

export const CartPage = () => {
  const { getCartItems, getCartTotal } = useCart();

  const cartItems = getCartItems();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="h-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-bold">Your Cart is Empty</h2>
        </div>

        <p>
          <Link
            href="/products"
            className="font-medium text-gray-600 hover:text-gray-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="h-full max-w-6xl mx-4 md:mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-bold">Cart</h2>
        </div>
        <ul
          role="list"
          className="border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {cartItems.map(({ product, quantity, price }) => (
            <ProductItem
              key={product.id}
              product={product}
              quantity={quantity}
              price={price}
            />
          ))}
        </ul>
        <section aria-labelledby="summary-heading" className="mt-10">
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <div>
            <dl className="space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  Subtotal
                </dt>
                <dd className="ml-4 text-base font-medium text-gray-900">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>
            <p className="mt-1 text-sm text-gray-500">
              Shipping and taxes will be calculated at checkout.
            </p>
          </div>

          <div className="my-10">
            <CheckoutButton />
          </div>

          <div className="mt-6 text-sm text-center">
            <p>
              or{" "}
              <Link
                href="/products"
                className="font-medium text-gray-600 hover:text-gray-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

const CheckoutButton = () => {
  const router = useRouter();
  return (
    <button
      className="w-full px-4 py-3 text-base font-medium text-white bg-black border rounded-md shadow-sm focus:ring-offset-gray-50"
      onClick={() => {
        router.push("/checkout");
      }}
    >
      Go to Checkout
    </button>
  );
};

const ProductItem = ({
  product,
  quantity,
  price,
}: {
  product: Product;
  quantity: number;
  price: number;
}) => {
  const { showNotification } = useNotifications();

  const { removeCartItem, updateCartItemQuantity } = useCart();

  const handleQuantityChange = useCallback(
    (value: number) => {
      updateCartItemQuantity(product, value);
      showNotification({
        title: "Cart Updated",
        message: `Updated ${product.title} quantity to ${value}`,
        type: "success",
        duration: 5000,
      });
    },
    [product, showNotification, updateCartItemQuantity]
  );

  return (
    <li key={product.id} className="flex gap-4 py-6">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain object-center w-24 h-24 rounded-md sm:h-32 sm:w-32"
        />
      </div>

      <div className="flex flex-col flex-1 ml-4 sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <Link href={`/products/${product.id}`}>
                <span className="font-medium text-gray-700 hover:text-gray-800">
                  {product.title}
                </span>
              </Link>
            </h4>
            <p className="ml-4 text-sm font-bold text-gray-900">
              {formatPrice(price)}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between flex-1 mt-4">
          <div>
            <Counter onChange={handleQuantityChange} initialValue={quantity} />
          </div>
          <div className="ml-4">
            <button
              type="button"
              className="text-sm font-medium text-red-600 hover:text-red-500"
              onClick={() => {
                removeCartItem(product);
                showNotification({
                  title: "Cart Updated",
                  message: `Removed ${product.title} from cart`,
                  type: "success",
                  duration: 5000,
                });
              }}
            >
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
