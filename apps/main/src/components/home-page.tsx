import Head from "next/head";
import { useEffect, useRef } from "react";
import { mountPromo } from "marketing/mount-promo";

export const HomePage = () => {
  const promoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mountPromo(promoRef.current as HTMLDivElement);
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
