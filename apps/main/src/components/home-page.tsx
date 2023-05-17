import Head from "next/head";
import { useEffect, useRef } from "react";
import { injectHome } from "home/inject-home";

export const HomePage = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectHome(homeRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <Head>
        <title>E-Shop Showcase</title>
      </Head>
      <div ref={homeRef} />
    </>
  );
};
