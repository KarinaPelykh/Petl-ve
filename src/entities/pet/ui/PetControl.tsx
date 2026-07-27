import { Dialog } from "radix-ui";
import { usePetContext } from "../api/usePetContex";
import { Icon } from "../../../shared/ui/Icon";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import type { DialogMode } from "../../../pages/FindPet";
import { useFavorite } from "../../../feature/dialog-content/hook/useFavorite";
import { useRemoveFavorite } from "../../../feature/dialog-content/hook/useRemoveFavorite";
import clsx from "clsx";
import { favorite } from "../../../shared/api/redux/user/selectors";

type PetControlProps = {
  setDialogState?: (val: { mode: DialogMode; id: string }) => void;
  btnClassName?: string;
};

export const PetControl = ({
  setDialogState,
  btnClassName,
}: PetControlProps) => {
  const { notice } = usePetContext();

  const favoriteNotices = useAppSelector(favorite);

  const idFavoriteNotice = favoriteNotices.find((item) => item === notice._id);

  const add = useFavorite();
  const remove = useRemoveFavorite();

  return (
    <div className="mt-auto flex gap-2.5">
      <Dialog.Trigger
        onClick={() => {
          setDialogState?.({ mode: "details", id: notice._id });
        }}
        type="button"
        className="bg-yellow rounded-ms text-ms w-full cursor-pointer p-3.5 font-normal text-white"
      >
        Learn more
      </Dialog.Trigger>
      <Dialog.Trigger
        onClick={() => {
          setDialogState?.({ mode: "favorite", id: notice._id });
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          idFavoriteNotice ? remove(notice._id) : add(notice._id);
        }}
        type="button"
        className={clsx(
          "bg-cream size-11.5 cursor-pointer rounded-[50%] p-3.5 text-white",
          btnClassName,
        )}
      >
        <Icon
          name={idFavoriteNotice ? "trash" : "heart"}
          className="stroke-yellow size-4.5 fill-transparent"
        />
      </Dialog.Trigger>
    </div>
  );
};
