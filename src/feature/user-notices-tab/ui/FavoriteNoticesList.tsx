import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../../entities";
import { notices } from "../../../shared/api/redux/notices/selectors";
import { favorite } from "../../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";

import { EmptyStateNotices } from "./EmptyStateNotices";

type FavoriteNoticesListProps = {
  dialog: { setDialogState: (val: { mode: string; id: string }) => void };
};

export const FavoriteNoticesList = ({ dialog }: FavoriteNoticesListProps) => {
  // const favoriteNotices = useAppSelector(favorite);

  // const allNotices = useAppSelector(notices);

  // const filteredData = allNotices?.results.filter((notice) =>
  //   favoriteNotices?.includes(notice._id),
  // );

  return (
    <>
      {/* {filteredData?.length ? (
        <ul className="desktop-l:gap-6 flex flex-wrap gap-2.5">
          {filteredData?.map((item) => (
            <PetCard
              key={item._id}
              notice={item}
              className="desktop-l:w-[320px] desktop-l:p-3.5! desktop-l:pb-6!"
            >
              <PetImage imgClassName="desktop-l:w-full" />
              <PetTitle />
              <PetInfoTable tableClassName="mb-3.5" />
              <PetDescription />
              <PetPrice className="mb-0!" />
              <PetControl setDialogState={dialog.setDialogState} />
            </PetCard>
          ))}
        </ul>
      ) : (
        <EmptyStateNotices /> */}
      {/* )} */}
    </>
  );
};
