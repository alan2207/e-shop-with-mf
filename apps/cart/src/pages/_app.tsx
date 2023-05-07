import type { AppProps } from "next/app";

import dynamic from "next/dynamic";

import "../styles/globals.css";

const Shell = dynamic(() => import("main/shell").then((mod) => mod.Shell));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  );
}
