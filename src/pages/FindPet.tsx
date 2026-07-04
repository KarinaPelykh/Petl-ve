import { Heading } from "../shared/ui/Heading";

import { PetList } from "../widget/pet-list/ui/PetList";

import { PetSearchFilter } from "../widget/pet-search-filter/PetSearchFilter";
import { PaginationWrap } from "../widget/pagination/Pagination";
import { useState } from "react";
import { NoticeDialogWrap } from "../feature/dialog-content/ui/NoticeDialogWrap";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { isLoggedIn } from "../shared/api/redux/user/selectors";
import { useNoticeDetails } from "../feature/dialog-content/api/useNoticeDetails";
import { Modal } from "../shared/ui/Modal";
import { NoticeDialogContent } from "../feature/dialog-content/ui/NoticeDialogContent";
import { AttentionDialog } from "../entities/pet/ui/AttentionDialog";
import { usePetsFilter } from "../feature/search-pet/hook/usePetsFilter";

export type DialogMode = "details" | "favorite";

type DialogState = {
  mode: DialogMode;
  id: string;
};

const initState: DialogState = {
  mode: "details",
  id: "",
};

export const FindPets = () => {
  const [dialogState, setDialogState] = useState<DialogState>(initState);

  const [open, setOpen] = useState(false);

  const isLoggIn = useAppSelector(isLoggedIn);

  const method = usePetsFilter();

  const { cardData } = useNoticeDetails(dialogState.id);

  const content = {
    details: (
      <Modal>
        <NoticeDialogContent data={cardData} />
      </Modal>
    ),
    favorite: null,
  };

  return (
    <section className="py-13.5">
      <div className="container">
        <NoticeDialogWrap open={open} setOpen={setOpen}>
          {!isLoggIn ? (
            <Modal>
              <AttentionDialog />
            </Modal>
          ) : (
            content[dialogState?.mode]
          )}
          <Heading as="h1" variant="first" className="mb-10">
            Find your favorite pet
          </Heading>
          <PetSearchFilter method={method} />
          <PetList method={method} setDialogState={setDialogState} />
          <PaginationWrap method={method} />
        </NoticeDialogWrap>
      </div>
    </section>
  );
};
