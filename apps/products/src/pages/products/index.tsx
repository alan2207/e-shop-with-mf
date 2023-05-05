import { Product, getProducts } from "../../products-api";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("main/layout").then((mod) => mod.Layout));

const ProductsListingPage = dynamic(() =>
  import("../../components/products-listing-page").then(
    (mod) => mod.ProductsListingPage
  )
);

const ProductsListing = ({ products }: { products: Product[] }) => {
  return <ProductsListingPage products={products} />;
};

ProductsListing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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
