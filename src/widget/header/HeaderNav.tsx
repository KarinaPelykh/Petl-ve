import { Link, useLocation } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { HeaderNavList } from "./HeaderNavList";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";

export const HeaderNav = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <nav className="flex justify-between items-center">
      <Link to="/">
        <Icon
          name={homePage ? "wh-logo" : "mobile-logo"}
          className="w-19 h-5 desktop-l:w-26.25 desktop-l:h-8"
        />
      </Link>
      <HeaderNavList className="hidden desktop-l:flex" />
      <HeaderBurgerMenu />
    </nav>
  );
};
