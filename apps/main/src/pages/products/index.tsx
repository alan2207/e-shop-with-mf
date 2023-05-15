import { Product, getProducts } from "shared";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ProductsListingPage = dynamic(() =>
  import("products/products-listing-page").then(
    (mod) => mod.ProductsListingPage
  )
);

const ProductsListing = ({ products }: { products: Product[] }) => {
  return <ProductsListingPage products={products} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default ProductsListing;
