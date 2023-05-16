import { getProduct, Product } from "shared";

import { GetServerSideProps } from "next";

import dynamic from "next/dynamic";

const ProductDetailsPage = dynamic(() =>
  import("../../components/product-details-page").then(
    (mod) => mod.ProductDetailsPage
  )
);

const ProductDetails = ({ product }: { product: Product }) => {
  return <ProductDetailsPage product={product} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.params?.productId) {
    return {
      notFound: true,
    };
  }

  const product = await getProduct(+ctx.params?.productId as number);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
