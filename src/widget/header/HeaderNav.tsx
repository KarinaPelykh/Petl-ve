import { Link, useLocation } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { HeaderNavList } from "./HeaderNavList";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";

import { User } from "../user/User";
import { Button } from "../../shared/ui/Button";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { isLoggedIn } from "../../shared/api/redux/user/selectors";

export const HeaderNav = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  const isLog = useAppSelector(isLoggedIn);
  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="transition-all duration-500 hover:scale-105">
        <Icon
          name={homePage ? "wh-logo" : "mobile-logo"}
          className="desktop-l:w-26.25 desktop-l:h-8 h-5 w-19"
        />
      </Link>
      <HeaderNavList className="desktop-l:flex hidden" />
      <div className="flex gap-3">
        {isLog && (
          <User>
            <Button
              variant="primary"
              className="text-m tablet-l:flex hidden w-fit px-8.75 py-3.5 uppercase"
            >
              Log out
            </Button>
          </User>
        )}
        <HeaderBurgerMenu />
      </div>
    </nav>
  );
};
