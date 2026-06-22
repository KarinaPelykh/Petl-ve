import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../entities";
import { addFavorite } from "../../shared/api/redux/notices/operations";
import { notices } from "../../shared/api/redux/notices/selectors";
import { isLoggedIn } from "../../shared/api/redux/user/selectors";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";

type PetListProps = {
  setCardId: (val: string) => void;
  setIsFavorite: (val: boolean) => void;
};

export const PetList = ({ setCardId, setIsFavorite }: PetListProps) => {
  const dispatch = useAppDispatch();
  const isLoggIn = useAppSelector(isLoggedIn);
  const { results } = useAppSelector(notices);

  return (
    <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
      {results.map((notice) => (
        <PetCard
          key={notice._id}
          notice={notice}
          setCardId={setCardId}
          className="desktop-l:w-90.75"
        >
          <PetImage />
          <div>
            <PetTitle />
            <PetInfoTable />
            <PetDescription />
            <PetPrice />
            <PetControl
              setIsFavorite={setIsFavorite}
              onClick={(id: string) => isLoggIn && dispatch(addFavorite(id))}
            />
          </div>
        </PetCard>
      ))}
    </ul>
  );
};
