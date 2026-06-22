import { Dialog } from "radix-ui";
import { usePetContext } from "../api/usePetContex";
import { Icon } from "../../../shared/ui/Icon";

export const PetControl = ({ onClick, setIsFavorite }) => {
  const { setCardId, notice } = usePetContext();

  return (
    <div className="flex gap-2.5">
      <Dialog.Trigger
        onClick={() => {
          setIsFavorite(false);
          setCardId?.(notice._id);
        }}
        type="button"
        className="bg-yellow rounded-ms w-full cursor-pointer p-3.5 text-white"
      >
        Learn more
      </Dialog.Trigger>
      <Dialog.Trigger
        onClick={() => {
          setIsFavorite(true);
          onClick(notice._id);
        }}
        type="button"
        className="bg-cream size-11.5 cursor-pointer rounded-[50%] p-3.5 text-white"
      >
        <Icon
          name="heart"
          className="stroke-yellow size-4.5 fill-transparent"
        />
      </Dialog.Trigger>
    </div>
  );
};
