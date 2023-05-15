import type { AppProps } from "next/app";

import "../styles/globals.css";
import dynamic from "next/dynamic";

const Shell = dynamic(() =>
  import("../components/shell").then((mod) => mod.Shell)
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  );
}
