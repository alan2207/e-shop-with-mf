import React, { ReactElement } from "react";

import dynamic from "next/dynamic";
import { LayoutProps } from "../components/layout";

const Home = dynamic(() =>
  import("../components/home-page").then((mod) => mod.HomePage)
);
const Layout = dynamic<LayoutProps>(() =>
  import("../components/layout").then((mod) => mod.Layout)
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
