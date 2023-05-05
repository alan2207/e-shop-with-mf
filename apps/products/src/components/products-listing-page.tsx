import { Product } from "../products-api";
import { formatPrice } from "shared";
import Head from "next/head";
import Link from "next/link";

export const ProductsListingPage = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="max-w-6xl px-8 py-16 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-bold">Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product) => {
            return (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="h-full duration-100 ease-in scale-100 shadow-sm hover:scale-95 hover:border-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain object-center w-full scale-75 h-96"
                  />

                  <div className="p-4">
                    <h5 className="text-xs">{product.title}</h5>
                    <div className="mt-2 text-lg font-bold">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
