import { useLocation } from "react-router";
import { useToggle } from "../../shared/hooks/useToggle";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderModal } from "./HeaderModal";
import clsx from "clsx";

export const HeaderBurgerMenu = () => {
  const { isOpen, close, open } = useToggle();
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <>
      <div className="flex gap-4 items-center">
        <HeaderAuthList className={clsx("hidden tablet-l:flex")} />
        <Button onClick={open} className="flex desktop-l:hidden p-0!">
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
