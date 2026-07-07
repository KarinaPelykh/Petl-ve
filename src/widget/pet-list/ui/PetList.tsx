import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../../entities";
import type { PetFilterControl } from "../../../feature/search-pet/hook/usePetsFilter";
import type { DialogMode } from "../../../pages/FindPet";
import { notices } from "../../../shared/api/redux/notices/selectors";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";

import { PetListMock } from "./PetListMock";

type PetListProps = {
  setDialogState: (val: { mode: DialogMode; id: string }) => void;
  method: PetFilterControl;
};

export const PetList = ({ setDialogState, method }: PetListProps) => {
  const { results } = useAppSelector(notices);

  return (
    <div className="mb-11 flex justify-center">
      {results.length ? (
        <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
          {results.map((notice) => (
            <PetCard
              key={notice._id}
              notice={notice}
              className="desktop-l:w-90.75"
            >
              <PetImage />
              <PetTitle />
              <PetInfoTable />
              <PetDescription />
              <PetPrice />
              <PetControl setDialogState={setDialogState} />
            </PetCard>
          ))}
        </ul>
      ) : (
        <PetListMock method={method} />
      )}
    </div>
  );
};
