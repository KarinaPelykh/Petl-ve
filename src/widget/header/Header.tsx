import { Link } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderNavList } from "./HeaderNavList";

const nav = [
  { link: "news", name: "News" },
  { link: "findPet", name: "Find pet" },
  { link: "friends", name: "Our friends" },
];

const authNav = [
  { link: "login", name: "Log in" },
  { link: "register", name: "Registration" },
];

export const Header = () => {
  return (
    <header className="pt-8.5 tablet-l:pt-8 desktop-l:py-8">
      <nav className="flex justify-between ">
        <Link to="home">
          <Icon name="logo" className=" desktop-l:w-26.25 desktop-l:h-8" />
        </Link>
        <HeaderNavList nav={nav} />
        <HeaderAuthList authNav={authNav} />
      </nav>
    </header>
  );
};
