import { Dialog } from "radix-ui";
import { usePetContext } from "../api/usePetContex";
import { Icon } from "../../../shared/ui/Icon";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import { favorite } from "../../../shared/api/redux/notices/selectors";
import type { DialogMode } from "../../../pages/FindPet";

type PetControlProps = {
  handelAddFavorite: (val: string) => void;
  deleteFromFavorite: (val: string) => void;
  setDialogState: (val: { mode: DialogMode; id: string }) => void;
};

export const PetControl = ({
  handelAddFavorite,
  deleteFromFavorite,
  setDialogState,
}: PetControlProps) => {
  const { notice } = usePetContext();

  const favoriteNotices = useAppSelector(favorite);

  const idFavoriteNotice = favoriteNotices.find((item) => item === notice._id);

  return (
    <div className="mt-auto flex gap-2.5">
      <Dialog.Trigger
        onClick={() => {
          setDialogState({ mode: "details", id: notice._id });
        }}
        type="button"
        className="bg-yellow rounded-ms w-full cursor-pointer p-3.5 text-white"
      >
        Learn more
      </Dialog.Trigger>
      <Dialog.Trigger
        onClick={() => {
          setDialogState({ mode: "favorite", id: notice._id });
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          idFavoriteNotice
            ? deleteFromFavorite(notice._id)
            : handelAddFavorite(notice._id);
        }}
        type="button"
        className="bg-cream size-11.5 cursor-pointer rounded-[50%] p-3.5 text-white"
      >
        <Icon
          name={idFavoriteNotice ? "trash" : "heart"}
          className="stroke-yellow size-4.5 fill-transparent"
        />
      </Dialog.Trigger>
    </div>
  );
};
