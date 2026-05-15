import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "../widget/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
