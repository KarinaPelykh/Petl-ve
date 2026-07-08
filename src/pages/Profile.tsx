import { UserBlock } from "../entities/user/UserBlock";
import { AddAnimals } from "../feature/add-animals/AddAnimals";
import { NoticeDialogWrap } from "../feature/dialog-content/ui/NoticeDialogWrap";
import { UserNoticesTab } from "../feature/user-notices-tab/ui/UserNoticesTab";
import { Button } from "../shared/ui/Button";
import { useManageDialog } from "../feature/dialog-content/hook/useManageDialog";
export const UserProfile = () => {
  const dialog = useManageDialog(); // const data = useAppSelector(favorite);
  return (
    <section className="desktop-l:pb-8 tablet-l:pb-45.5 pb-35">
      <div className="desktop-l:flex desktop-l:gap-8 container w-full items-start">
        <NoticeDialogWrap open={dialog.open} setOpen={dialog.setOpen}>
          <div className="rounded-ms max-tablet-l:w-83.75 desktop-l:rounded-m tablet-l:p-10 desktop-l:m-0 desktop-l:w-130! mx-auto my-auto flex flex-col bg-white px-5 py-7 pt-5 pb-10">
            <UserBlock />
            <AddAnimals />
            <Button
              variant="secondary"
              className="w-fit rounded-[50%] px-7 py-3 uppercase"
            >
              Log out
            </Button>
          </div>
          <UserNoticesTab />
        </NoticeDialogWrap>
      </div>
    </section>
  );
};
