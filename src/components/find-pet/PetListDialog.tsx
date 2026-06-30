import { Dialog } from "radix-ui";
import { useState } from "react";
import { isLoggedIn } from "../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { Modal } from "../../shared/ui/Modal";
import { AttentionDialog } from "../../entities/pet/ui/AttentionDialog";
import { NoticeDialog } from "./NoticeDialog";
import { useGetPetDetails } from "./api/useGetPetDetails";

export const PetListDialog = ({
  children,
  dialogState,
  handelAddFavorite,
  deleteFromFavorite,
}) => {
  const [open, setOpen] = useState(false);

  const isLoggIn = useAppSelector(isLoggedIn);

  const { cardData } = useGetPetDetails(dialogState.id);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {children}

      {dialogState.mode === "favorite" ? (
        !isLoggIn && (
          <Modal>
            <AttentionDialog />
          </Modal>
        )
      ) : (
        <Modal>
          {isLoggIn ? (
            <NoticeDialog
              data={cardData}
              handelAddFavorite={handelAddFavorite}
              deleteFromFavorite={deleteFromFavorite}
            />
          ) : (
            <AttentionDialog />
          )}
        </Modal>
      )}
    </Dialog.Root>
  );
};
