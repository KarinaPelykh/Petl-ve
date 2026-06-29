import { useEffect, useState } from "react";
import { Heading } from "../shared/ui/Heading";
import { SearchPetForm } from "../feature/search-pet/SearchPetForm";
import {
  addFavorite,
  deleteFavorite,
  getCategory,
  getGender,
  getNotice,
  getNotices,
  getSpecies,
} from "../shared/api/redux/notices/operations";
import { notices } from "../shared/api/redux/notices/selectors";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { Pagination } from "../shared/ui/Pagination";
import { isLoggedIn } from "../shared/api/redux/user/selectors";
import { AttentionDialog } from "../entities/pet/ui/AttentionDialog";
import { NoticeDialog } from "../components/find-pet/NoticeDialog";
import { Modal } from "../shared/ui/Modal";
import { Dialog } from "radix-ui";

import { PetList } from "../components/find-pet/PetList";
import { PetListMock } from "../components/find-pet/PetListMock";
import type { Notice } from "../entities/pet/ui/PetCard";
import { useNavigate } from "react-router";

export const FindPets = () => {
  const [cardID, setCardId] = useState("");
  const [cardData, setCardData] = useState<Notice | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const isLoggIn = useAppSelector(isLoggedIn);
  const data = useAppSelector(notices);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getGender());
    dispatch(getSpecies());
  }, [dispatch]);

  useEffect(() => {
    async function getInfById() {
      try {
        const data = await getNotice(cardID);
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getInfById();
  }, [cardID]);

  const navigate = useNavigate();

  const handelAddFavorite = (id: string) => {
    dispatch(addFavorite(id));
    navigate("/profile");
  };

  const deleteFromFavorite = (id: string) => {
    dispatch(deleteFavorite(id));
  };

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm />
        {data?.results.length ? (
          <div className="flex justify-center">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <PetList
                setIsFavorite={setIsFavorite}
                setCardId={setCardId}
                handelAddFavorite={handelAddFavorite}
                deleteFromFavorite={deleteFromFavorite}
              />
              {isFavorite ? (
                !isLoggIn && (
                  <Modal>
                    <AttentionDialog />
                  </Modal>
                )
              ) : (
                <Modal>
                  {isLoggIn ? (
                    <NoticeDialog
                      data={cardData}
                      handelAddFavorite={handelAddFavorite}
                      deleteFromFavorite={deleteFromFavorite}
                    />
                  ) : (
                    <AttentionDialog />
                  )}
                </Modal>
              )}
            </Dialog.Root>
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
