import { useLocation } from "react-router";
import { useToggle } from "../../shared/hooks/useToggle";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderModal } from "./HeaderModal";
import clsx from "clsx";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { isLoggedIn } from "../../shared/api/redux/user/selectors";

export const HeaderBurgerMenu = () => {
  const { isOpen, close, open } = useToggle();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const isLog = useAppSelector(isLoggedIn);
  return (
    <>
      <div className="flex items-center gap-4">
        <HeaderAuthList className={clsx(!isLog && "tablet-l:flex", "hidden")} />
        <Button onClick={open} className="desktop-l:hidden flex p-0!">
          <Icon
            name="burger-menu"
            className={clsx("size-8 stroke-black", homePage && "stroke-white")}
          />
        </Button>
      </div>

      <HeaderModal close={close} isOpen={isOpen} />
    </>
  );
};
