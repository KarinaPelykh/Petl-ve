import { useState } from "react";
import { Heading } from "../shared/ui/Heading";
import { SearchPetForm } from "../feature/search-pet/SearchPetForm";
import {
  addFavorite,
  deleteFavorite,
  getNotices,
} from "../shared/api/redux/notices/operations";
import { notices } from "../shared/api/redux/notices/selectors";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { Pagination } from "../shared/ui/Pagination";
import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../entities";
import { PetListMock } from "../components/find-pet/PetListMock";
import { useNavigate } from "react-router";
import { PetListDialog } from "../components/find-pet/PetListDialog";

type DialogMode = "details" | "favorite";

type DialogState = {
  mode: DialogMode;
  id: string;
};

const initState = {
  mode: "details",
  id: "",
};

export const FindPets = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(notices);

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
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm />
        {data?.results.length ? (
          <div className="flex justify-center">
            <PetListDialog
              dialogState={dialogState}
              handelAddFavorite={handelAddFavorite}
              deleteFromFavorite={deleteFromFavorite}
            >
              <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
                {data?.results.map((notice) => (
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
          </div>
        ) : (
          <PetListMock />
        )}
        <div className="desktop-l:mt-15 flex justify-center">
          <Pagination
            data={data}
            onPageChange={(page) => dispatch(getNotices({ page }))}
          />
        </div>
      </div>
    </section>
  );
};
