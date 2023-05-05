import { formatPrice } from "shared";
import { useCart } from "../cart-store";

const getCostDetails = (subTotal: number) => {
  const shipping = subTotal > 100 ? 0 : 20;
  const tax = subTotal * 0.15;
  const total = subTotal + tax + shipping;

  return {
    shipping,
    tax,
    total,
    subTotal,
  };
};

export const CartSummary = () => {
  const { getCartItems, getCartTotal } = useCart();

  const { total, subTotal, tax, shipping } = getCostDetails(getCartTotal());

  const products = getCartItems();

  return (
    <section
      aria-labelledby="summary-heading"
      className="py-12 text-blue-300 bg-black md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
    >
      <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <dl>
          <dt className="text-sm font-medium">Amount due</dt>
          <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
            {formatPrice(total)}
          </dd>
        </dl>

        <ul
          role="list"
          className="text-sm font-medium divide-y divide-white divide-opacity-10"
        >
          {products.map(({ product, quantity, price }) => (
            <li key={product.id} className="flex items-start py-6 space-x-4">
              <img
                src={product.image}
                alt={product.title}
                className="flex-none object-cover object-center w-20 h-20 rounded-md"
              />
              <div className="flex-auto space-y-1">
                <h3 className="text-white">{product.title}</h3>
                <h3 className="mt-2 text-white">
                  {formatPrice(product.price)} x {quantity}
                </h3>
              </div>
              <p className="flex-none text-base font-medium text-white">
                {formatPrice(price)}
              </p>
            </li>
          ))}
        </ul>

        <dl className="pt-6 space-y-6 text-sm font-medium border-t border-white border-opacity-10">
          <div className="flex items-center justify-between">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subTotal)}</dd>
          </div>

          <div className="flex items-center justify-between">
            <dt>Shipping</dt>
            <dd>{formatPrice(shipping)}</dd>
          </div>

          <div className="flex items-center justify-between">
            <dt>Taxes</dt>
            <dd>{formatPrice(tax)}</dd>
          </div>

          <div className="flex items-center justify-between pt-6 text-white border-t border-white border-opacity-10">
            <dt className="text-base">Total</dt>
            <dd className="text-base">{formatPrice(total)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
