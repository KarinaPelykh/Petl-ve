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

export const FavoriteNoticesList = ({ dialog }) => {
  const data = useAppSelector(favorite);
  const getNotices = useAppSelector(notices);

  const filteredData = getNotices.results.filter((notice) =>
    data.includes(notice._id),
  );

  return (
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
  );
};
