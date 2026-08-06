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
import type { DialogMode } from "../../dialog-content/hook/useManageDialog";

import { EmptyStateNotices } from "./EmptyStateNotices";

type FavoriteNoticesListProps = {
  setDialogState: (val: { mode: DialogMode; id: string }) => void;
};

export const FavoriteNoticesList = ({
  setDialogState,
}: FavoriteNoticesListProps) => {
  const favoriteNotices = useAppSelector(favorite);

  const allNotices = useAppSelector(notices);

  const filteredData = allNotices?.results.filter((notice) =>
    favoriteNotices?.includes(notice._id),
  );

  return (
    <>
      {filteredData?.length ? (
        <ul className="desktop-l:gap-6 flex flex-wrap gap-2.5">
          {filteredData?.map((item) => (
            <PetCard
              key={item._id}
              data={item}
              className="desktop-l:w-[320px] desktop-l:p-3.5! desktop-l:pb-6!"
            >
              <PetImage imgClassName="desktop-l:w-full" />
              <PetTitle />
              <PetInfoTable tableClassName="mb-3.5" />
              <PetDescription />
              <PetPrice className="mb-0!" />
              <PetControl setDialogState={setDialogState} />
            </PetCard>
          ))}
        </ul>
      ) : (
        <EmptyStateNotices />
      )}
    </>
  );
};
