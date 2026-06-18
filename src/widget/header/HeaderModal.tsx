import clsx from "clsx";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { HeaderAuthList } from "./HeaderAuthList";
import { HeaderNavList } from "./HeaderNavList";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { isLoggedIn } from "../../shared/api/redux/user/selectors";

type HeaderModalProps = {
  close: () => void;
  isOpen: boolean;
};

export const HeaderModal = ({ close, isOpen }: HeaderModalProps) => {
  const isLog = useAppSelector(isLoggedIn);

  return (
    <div
      className={clsx(
        "desktop-l:hidden fixed inset-0 z-10 flex size-full transform bg-transparent transition-transform duration-500 ease-out",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="absolute right-0 bottom-0 flex h-full w-54.5 flex-col justify-between bg-white px-5 pt-7 pb-10">
        <Button onClick={close} className="ml-auto">
          <Icon name="close" className="size-8 stroke-black" />
        </Button>
        <HeaderNavList
          className="desktop-l:flex-row flex flex-col items-center"
          itemClassName="w-[119px]! justify-center  border-black/40 text-black"
        />
        {isLog ? (
          <Button
            variant="primary"
            className="text-m mx-auto w-fit px-8.75 py-3.5 uppercase"
          >
            Log out
          </Button>
        ) : (
          <HeaderAuthList className="desktop-l:flex-row flex flex-col" />
        )}
      </div>
    </div>
  );
};
