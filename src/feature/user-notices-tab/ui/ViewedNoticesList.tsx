import {
  PetCard,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../../entities";
import { auth } from "../../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";

export const ViewedNoticesList = () => {
  const { user } = useAppSelector(auth);

  return (
    <ul className="flex flex-wrap gap-2.5">
      {user.noticesViewed.map((item) => (
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
            {/* <PetControl /> */}
          </div>
        </PetCard>
      ))}
    </ul>
  );
};
