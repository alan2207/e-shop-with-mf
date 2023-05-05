import { AddToCart } from "cart/add-to-cart";
import { Product, ProductRating } from "../products-api";
import { formatPrice } from "shared";
import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Head from "next/head";

const Rating = ({ rating: { rate, count } }: { rating: ProductRating }) => {
  return (
    <div className="flex gap-1 py-2">
      <div>{rate}</div>
      <div className="flex items-center ml-1">
        {[0, 1, 2, 3, 4].map((n) => (
          <StarIcon
            key={n}
            className={clsx(
              Math.round(rate) > n ? "text-yellow-400" : "text-gray-200",
              "h-5 w-5 flex-shrink-0"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <div>{" " + count} Reviews</div>
    </div>
  );
};

export const ProductDetailsPage = ({ product }: { product: Product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 px-8 py-16 mx-auto md:grid-cols-2">
        <img
          className="object-contain object-center "
          src={product.image}
          alt={product.title}
        />
        <div>
          <h2 className="text-2xl font-extrabold">{product.title}</h2>
          <Rating rating={product.rating} />
          <h4 className="mt-8 text-lg font-bold">
            {formatPrice(product.price)}
          </h4>
          <AddToCart product={product} />
          <p className="mt-16">{product.description}</p>
        </div>
      </div>
    </>
  );
};
