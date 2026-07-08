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
// import { auth } from "../../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";

export const FavoriteNoticesList = () => {
  //   const { user } = useAppSelector(auth);

  const data = useAppSelector(favorite);
  const getNotices = useAppSelector(notices);
  // const navigate = useNavigate();
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
            <PetControl />
          </div>
        </PetCard>
      ))}
    </ul>
  );
};
