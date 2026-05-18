import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../widget/header";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
