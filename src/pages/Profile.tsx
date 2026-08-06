import { UserBlock } from "../entities/user/UserBlock";
import { AddAnimals } from "../widget/add-animals/AddAnimals";
import { NoticeDialogWrap } from "../feature/dialog-content/ui/NoticeDialogWrap";
import { UserNoticesTab } from "../feature/user-notices-tab/ui/UserNoticesTab";
import { useManageDialog } from "../feature/dialog-content/hook/useManageDialog";
import { NoticeDialogContent } from "../feature/dialog-content/ui/NoticeDialogContent";
import { Dialog } from "radix-ui";
import { UserSignout } from "../feature/dialog-content/ui/UserSignout";
import { EditUserForm } from "../feature/edit-user/EditUserForm";

export const UserProfile = () => {
  const dialog = useManageDialog();

  const content = {
    details: <NoticeDialogContent data={dialog.cardData} />,
    edit: <EditUserForm setOpen={dialog.setOpen} />,
    logout: <UserSignout setOpen={dialog.setOpen} />,
    favorite: null,
  };

  return (
    <section className="desktop-l:pb-8 tablet-l:pb-45.5 pb-35">
      <div className="desktop-l:flex desktop-l:gap-8 desktop-l:items-start container w-full">
        <NoticeDialogWrap open={dialog.open} setOpen={dialog.setOpen}>
          {content[dialog.dialogState.mode]}
          <div className="rounded-ms max-tablet-l:w-83.75 tablet-l:rounded-m tablet-l:p-10 desktop-l:m-0 desktop-l:w-130! m-auto mb-10 bg-white px-5 pt-5 pb-10">
            <UserBlock setDialogState={dialog.setDialogState} />
            <AddAnimals />
            <Dialog.Trigger
              onClick={() => dialog.setDialogState({ mode: "logout", id: "" })}

              className="bg-cream text-yellow rounded-ms cursor-pointer px-7 py-3 uppercase"
            >
              Log out
            </Dialog.Trigger>
          </div>
          <UserNoticesTab setDialogState={dialog.setDialogState} />
        </NoticeDialogWrap>
      </div>
    </section>
  );
};
