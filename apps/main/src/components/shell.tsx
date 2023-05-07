import dynamic from "next/dynamic";
import React, { ReactNode, useEffect } from "react";
import { setAnonymousIdUser } from "shared";
import { LayoutProps } from "./layout";

const Layout = dynamic<LayoutProps>(
  () => import("./layout").then((mod) => mod.Layout),
  {
    ssr: false,
  }
);

const Notifications = dynamic<LayoutProps>(
  () => import("main/notifications").then((mod) => mod.Notifications),
  {
    ssr: false,
  }
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
