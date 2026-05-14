import { Link } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { HeaderNavList } from "./HeaderNavList";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";

export const Header = () => {
  return (
    <header className="pb-5 pt-7 tablet-l:pt-8.5  desktop-l:py-8 ">
      <nav className="flex justify-between items-center">
        <Link to="home">
          <Icon
            name="mobile-logo"
            className="w-19 h-5 desktop-l:w-26.25 desktop-l:h-8"
          />
        </Link>
        <HeaderNavList className="hidden desktop-l:flex" />
        <HeaderBurgerMenu />
      </nav>
    </header>
  );
};
