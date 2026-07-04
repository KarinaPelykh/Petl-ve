import type { ReactNode } from "react";
import { auth } from "../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";

import { Icon } from "../../shared/ui/Icon";
import { Link } from "react-router";
import clsx from "clsx";

type UserProps = {
  children: ReactNode;
};

export const User = ({ children }: UserProps) => {
  const { user } = useAppSelector(auth);

  const homePage = location.pathname === "/";

  return (
    <Link to="/profile">
      <div className="flex items-center justify-center gap-2">
        {children}
        <div className="bg-cream flex size-12.5 items-center justify-center rounded-[50%]">
          <Icon name="user" className="size-6" />
        </div>
        <p
          className={clsx(
            "text-1xl tablet-l:flex hidden capitalize",
            homePage && "text-white",
          )}
        >
          {user.name || "unknown"}
        </p>
      </div>
    </Link>
  );
};
