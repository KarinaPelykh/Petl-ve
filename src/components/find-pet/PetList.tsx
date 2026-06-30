import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../entities";
import { notices } from "../../shared/api/redux/notices/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";

type PetListProps = {
  setDialogMode: (val: { mode: string; id: string }) => void;

  handelAddFavorite: (val: string) => void;
  deleteFromFavorite: (val: string) => void;
};

export const PetList = ({
  setDialogMode,
  handelAddFavorite,
  deleteFromFavorite,
}: PetListProps) => {
  const { results } = useAppSelector(notices);

  return (
    <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
      {results.map((notice) => (
        <PetCard key={notice._id} notice={notice} className="desktop-l:w-90.75">
          <PetImage />
          <PetTitle />
          <PetInfoTable />
          <PetDescription />
          <PetPrice />
          <PetControl
            setDialogMode={setDialogMode}
            handelAddFavorite={handelAddFavorite}
            deleteFromFavorite={deleteFromFavorite}
          />
        </PetCard>
      ))}
    </ul>
  );
};
