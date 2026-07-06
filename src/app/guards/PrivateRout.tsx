import { Navigate } from "react-router";

import type { ReactNode } from "react";
import { useAuthState } from "./hook/useAuthState";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn, location } = useAuthState();
  console.log(location.pathname);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};
