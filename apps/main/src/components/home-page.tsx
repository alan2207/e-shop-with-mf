import Head from "next/head";
import { useEffect, useRef } from "react";
import { injectPromo } from "marketing/inject-promo";

export const HomePage = () => {
  const promoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectPromo(promoRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <Head>
        <title>E-Shop Showcase</title>
      </Head>
      <div ref={promoRef} />
    </>
  );
};
