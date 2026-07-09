import { UserBlock } from "../entities/user/UserBlock";
import { AddAnimals } from "../feature/add-animals/AddAnimals";
import { NoticeDialogWrap } from "../feature/dialog-content/ui/NoticeDialogWrap";
import { UserNoticesTab } from "../feature/user-notices-tab/ui/UserNoticesTab";
import { useManageDialog } from "../feature/dialog-content/hook/useManageDialog";
import { useNoticeDetails } from "../feature/dialog-content/api/useNoticeDetails";
import { NoticeDialogContent } from "../feature/dialog-content/ui/NoticeDialogContent";
import { Dialog } from "radix-ui";
import { UserSignout } from "../feature/dialog-content/ui/UserSignout";
import { EditUserForm } from "../feature/edit-user/EditUserForm";

export const UserProfile = () => {
  const dialog = useManageDialog();

  const { cardData } = useNoticeDetails(
    dialog.dialogState.mode === "details" ? dialog.dialogState.id : "",
  );

  const content = {
    details: <NoticeDialogContent data={cardData} />,
    favorite: null,
    edit: <EditUserForm />,
    logout: <UserSignout setOpen={dialog.setOpen} />,
  };

  return (
    <section className="desktop-l:pb-8 tablet-l:pb-45.5 pb-35">
      <div className="desktop-l:flex desktop-l:gap-8 container w-full items-start">
        <NoticeDialogWrap open={dialog.open} setOpen={dialog.setOpen}>
          {content[dialog.dialogState.mode]}
          <div className="rounded-ms max-tablet-l:w-83.75 desktop-l:rounded-m tablet-l:p-10 desktop-l:m-0 desktop-l:w-130! mx-auto my-auto flex flex-col bg-white px-5 py-7 pt-5 pb-10">
            <UserBlock setDialogState={dialog.setDialogState} />
            <AddAnimals />
            <Dialog.Trigger
              onClick={() => dialog.setDialogState({ mode: "logout", id: "" })}

              className="bg-cream text-yellow rounded-ms w-fit cursor-pointer px-7 py-3 uppercase"
            >
              Log out
            </Dialog.Trigger>
          </div>
          <UserNoticesTab dialog={dialog} />
        </NoticeDialogWrap>
      </div>
    </section>
  );
};
