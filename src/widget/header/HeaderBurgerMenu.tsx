import { useToggle } from "../../shared/hooks/useToggle";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderModal } from "./HeaderModal";

export const HeaderBurgerMenu = () => {
  const { isOpen, close, open } = useToggle();

  return (
    <>
      <div className="flex gap-4 items-center">
        <HeaderAuthList className="hidden tablet-l:flex" />
        <Button onClick={open} className="flex desktop-l:hidden">
          <Icon name="burger-menu" className="size-8 stroke-black" />
        </Button>
      </div>

      <HeaderModal close={close} isOpen={isOpen} />
    </>
  );
};
