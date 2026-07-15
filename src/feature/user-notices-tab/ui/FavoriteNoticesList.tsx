import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../../entities";
import { favorite, notices } from "../../../shared/api/redux/notices/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import { EmptyStateNotices } from "./EmptyStateNotices";

type FavoriteNoticesListProps = {
  dialog: { setDialogState: (val: { mode: string; id: string }) => void };
};

export const FavoriteNoticesList = ({ dialog }: FavoriteNoticesListProps) => {
  const data = useAppSelector(favorite);
  const getNotices = useAppSelector(notices);

  const filteredData = getNotices.results.filter((notice) =>
    data.includes(notice._id),
  );

  return (
    <>
      {filteredData.length ? (
        <ul className="flex flex-wrap gap-2.5">
          {filteredData.map((item) => (
            <PetCard
              key={item._id}
              notice={item}
              className="desktop-l:w-[320px] desktop-l:p-3.5!"
            >
              <PetImage imgClassName="desktop-l:w-full" />
              <div>
                <PetTitle />
                <PetInfoTable />
                <PetDescription />
                <PetPrice />
                <PetControl setDialogState={dialog.setDialogState} />
              </div>
            </PetCard>
          ))}
        </ul>
      ) : (
        <EmptyStateNotices />
      )}
    </>
  );
};
