import { Navigate } from "react-router";
import { useAuthState } from "./hook/useAuthState";
import type { ReactNode } from "react";

type PublicRouteProps = {
  children: ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLoggedIn, location } = useAuthState();

  if (isLoggedIn) {
    return <Navigate to={location.state.from ?? "/"} />;
  }

  return children;
};
