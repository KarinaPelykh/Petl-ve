import { Heading } from "../shared/ui/Heading";

import { PetList } from "../widget/pet-list/ui/PetList";

import { PetSearchFilter } from "../widget/pet-search-filter/PetSearchFilter";
import { PaginationWrap } from "../widget/pagination/Pagination";
import { NoticeDialogWrap } from "../feature/dialog-content/ui/NoticeDialogWrap";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { isLoggedIn } from "../shared/api/redux/user/selectors";
import { useNoticeDetails } from "../feature/dialog-content/api/useNoticeDetails";
import { Modal } from "../shared/ui/Modal";
import { NoticeDialogContent } from "../feature/dialog-content/ui/NoticeDialogContent";
import { AttentionDialog } from "../entities/pet/ui/AttentionDialog";
import { usePetsFilter } from "../feature/search-pet/hook/usePetsFilter";
import { useManageDialog } from "../feature/dialog-content/hook/useManageDialog";

export type DialogMode = "details" | "favorite";

export const FindPets = () => {
  const dialog = useManageDialog();

  const method = usePetsFilter();

  const isLoggIn = useAppSelector(isLoggedIn);

  const { cardData } = useNoticeDetails(dialog.dialogState.id);

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
      <NoticeDialogWrap open={dialog.open} setOpen={dialog.setOpen}>
        <div className="container">
          {!isLoggIn ? (
            <Modal>
              <AttentionDialog />
            </Modal>
          ) : (
            content[dialog.dialogState?.mode]
          )}
          <Heading as="h1" variant="first" className="mb-10">
            Find your favorite pet
          </Heading>
          <PetSearchFilter method={method} />
          <PetList method={method} setDialogState={dialog.setDialogState} />
          <PaginationWrap method={method} />
        </div>
      </NoticeDialogWrap>
    </section>
  );
};
