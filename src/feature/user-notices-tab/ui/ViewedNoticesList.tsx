import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../../entities";
import { auth } from "../../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import { EmptyStateNotices } from "./EmptyStateNotices";

type ViewedNoticesListProps = {
  dialog: { setDialogState: (val: { mode: string; id: string }) => void };
};

export const ViewedNoticesList = ({ dialog }: ViewedNoticesListProps) => {
  const { user } = useAppSelector(auth);

  return (
    <>
      {user?.noticesViewed?.length ? (
        <ul className="desktop-l:mb-8 desktop-l:gap-6 mb-5 flex flex-wrap gap-2.5">
          {user?.noticesViewed.map((item) => (
            <PetCard
              key={item._id}
              notice={item}
              className="desktop-l:w-[320px] desktop-l:p-3.5!"
            >
              <PetImage imgClassName="desktop-l:w-full" />
              <PetTitle />
              <PetInfoTable />
              <PetDescription />
              <PetPrice />
              <PetControl
                setDialogState={dialog.setDialogState}
                btnClassName="hidden"
              />
            </PetCard>
          ))}
        </ul>
      ) : (
        <EmptyStateNotices />
      )}
    </>
  );
};
