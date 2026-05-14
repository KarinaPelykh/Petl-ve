import clsx from "clsx";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderNavList } from "./HeaderNavList";

type HeaderModalProps = {
  close: () => void;
  isOpen: boolean;
};

export const HeaderModal = ({ close, isOpen }: HeaderModalProps) => {
  return (
    <div
      className={clsx(
        "fixed size-full bg-transparent z-10 inset-0 flex desktop-l:hidden transform  transition-transform duration-500 ease-out",
        isOpen ? "translate-x-0" : " translate-x-full ",
      )}
    >
      <div className="bg-white  w-54.5 h-full pt-7 flex flex-col justify-between  px-5 pb-10 absolute bottom-0 right-0">
        <Button onClick={close} className="ml-auto ">
          <Icon name="close" className="size-8 stroke-black" />
        </Button>
        <HeaderNavList
          className="flex flex-col items-center desktop-l:flex-row"
          itemClassName="w-[119px]! justify-center"
        />
        <HeaderAuthList className="flex flex-col desktop-l:flex-row" />
      </div>
    </div>
  );
};
