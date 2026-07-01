import { useNavigate } from "react-router";
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
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";
import { PetListDialog } from "./PetListDialog";
import { useState } from "react";
import {
  addFavorite,
  deleteFavorite,
} from "../../shared/api/redux/notices/operations";
import { PetListMock } from "./PetListMock";

export type DialogMode = "details" | "favorite";

type DialogState = {
  mode: DialogMode;
  id: string;
};

const initState: DialogState = {
  mode: "details",
  id: "",
};

export const PetList = () => {
  const { results } = useAppSelector(notices);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handelAddFavorite = (id: string) => {
    dispatch(addFavorite(id));
    navigate("/profile");
  };

  const deleteFromFavorite = (id: string) => {
    dispatch(deleteFavorite(id));
  };

  const [dialogState, setDialogState] = useState<DialogState>(initState);

  return (
    <div className="flex justify-center">
      {results.length ? (
        <PetListDialog
          dialogState={dialogState}
          handelAddFavorite={handelAddFavorite}
          deleteFromFavorite={deleteFromFavorite}
        >
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
                <PetControl
                  setDialogState={setDialogState}
                  handelAddFavorite={handelAddFavorite}
                  deleteFromFavorite={deleteFromFavorite}
                />
              </PetCard>
            ))}
          </ul>
        </PetListDialog>
      ) : (
        <PetListMock />
      )}
    </div>
  );
};
