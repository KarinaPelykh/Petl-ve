import { Dialog } from "radix-ui";
import { Button } from "../../../shared/ui/Button";
import { usePetContext } from "../api/usePetContex";
import { Icon } from "../../../shared/ui/Icon";

export const PetControl = () => {
  const { setCardId, notice } = usePetContext();

  return (
    <div className="flex gap-2.5">
      <Dialog.Trigger
        onClick={() => setCardId?.(notice._id)}
        type="button"
        className="bg-yellow rounded-ms w-full p-3.5 text-white"
      >
        Learn more
      </Dialog.Trigger>
      <Button
        type="button"
        className="bg-cream rounded-[50% ] size-11.5 p-3.5 text-white"
      >
        <Icon name="heart" className="size-4.5" />
      </Button>
    </div>
  );
};
