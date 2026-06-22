import { useEffect, useState } from "react";
import { Heading } from "../shared/ui/Heading";
import { SearchPetForm } from "../feature/search-pet/SearchPetForm";
import {
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

type Option = {
  locationId: string;
  value: string;
  label: string;
};

export type Filter = {
  keyword: string;
  sex: string;
  category: string;
  species: string;
  location: Option | null;
  byPrice: boolean;
  byPopularity: boolean;
};

const initialState = {
  keyword: "",
  sex: "",
  category: "",
  species: "",
  location: null,
  byPrice: false,
  byPopularity: false,
};

export const FindPets = () => {
  const [filter, setFilter] = useState<Filter>(initialState);

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
    const params = {
      page: 1,
      keyword: filter.keyword,
      sex: filter.sex,
      category: filter.category,
      species: filter.species,
      locationId: filter.location?.locationId || "",
      byPrice: filter.byPrice,
      byPopularity: filter.byPopularity,
    };

    dispatch(getNotices(params));
  }, [filter, dispatch]);

  const resetFilter = () => {
    setFilter(initialState);
  };

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

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm filter={filter} setFilter={setFilter} />
        {data?.results.length ? (
          <div className="flex justify-center">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <PetList setIsFavorite={setIsFavorite} setCardId={setCardId} />
              {isFavorite ? (
                !isLoggIn && (
                  <Modal>
                    <AttentionDialog />
                  </Modal>
                )
              ) : (
                <Modal>
                  {isLoggIn ? (
                    <NoticeDialog data={cardData} />
                  ) : (
                    <AttentionDialog />
                  )}
                </Modal>
              )}
            </Dialog.Root>
          </div>
        ) : (
          <PetListMock resetFilter={resetFilter} />
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
