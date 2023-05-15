import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Notifications } from "shared";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Notifications />
      <Component {...pageProps} />
    </>
  );
}
