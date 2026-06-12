import { Link, useLocation } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { HeaderNavList } from "./HeaderNavList";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";

export const HeaderNav = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="transition-all duration-500 hover:scale-105">
        <Icon
          name={homePage ? "wh-logo" : "mobile-logo"}
          className="desktop-l:w-26.25 desktop-l:h-8 h-5 w-19"
        />
      </Link>
      <HeaderNavList className="desktop-l:flex hidden" />
      <HeaderBurgerMenu />
    </nav>
  );
};
