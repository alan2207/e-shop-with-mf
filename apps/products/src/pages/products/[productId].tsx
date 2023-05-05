import { getProduct, Product } from "../../products-api";

import { GetServerSideProps } from "next";

import { ReactElement } from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("main/layout").then((mod) => mod.Layout));

const ProductDetailsPage = dynamic(() =>
  import("../../components/product-details-page").then(
    (mod) => mod.ProductDetailsPage
  )
);

const ProductDetails = ({ product }: { product: Product }) => {
  return <ProductDetailsPage product={product} />;
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const product = await getProduct(ctx.params?.productId as string);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
