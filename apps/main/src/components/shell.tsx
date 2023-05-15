import dynamic from "next/dynamic";
import React, { ReactNode, useEffect } from "react";
import { Notifications, setAnonymousIdUser } from "shared";
import { LayoutProps } from "./layout";

const Layout = dynamic<LayoutProps>(() =>
  import("./layout").then((mod) => mod.Layout)
);

export const Shell = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    setAnonymousIdUser();
  }, []);

  return (
    <>
      <Notifications />
      <Layout>{children}</Layout>
    </>
  );
};
