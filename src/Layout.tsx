import { Suspense } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <header className="container">
        <nav>
          <ul>
            <li>News</li>
            <li>Find pet</li>
            <li>Our friends</li>
          </ul>
        </nav>
        <div>
          <button>Log in</button>

          <button>Registration</button>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
