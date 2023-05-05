import Head from "next/head";
import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>E-Shop Showcase</title>
      </Head>
      <div className="h-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="mb-24 text-3xl md:text-6xl">E-Shop Showcase</h1>
          <Link
            href="/products"
            className={"p-2 border-2 border-black border-solid"}
          >
            Explore Products
          </Link>
        </div>
      </div>
    </>
  );
};
