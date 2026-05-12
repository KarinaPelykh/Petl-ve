import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "../widget/header";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
