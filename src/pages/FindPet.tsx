import { useEffect, useState } from "react";
import { PetCard } from "../entities/pet/ui/PetCard";
import { Heading } from "../shared/ui/Heading";
import { SearchPetForm } from "../feature/search-pet/SearchPetForm";
import {
  getCategory,
  getGender,
  getNotices,
  getSpecies,
} from "../shared/api/redux/notices/operations";
import { notices } from "../shared/api/redux/notices/selectors";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { Pagination } from "../shared/ui/Pagination";

export type Filter = {
  search: string;
  sex: string;
  category: string;
  animalType: string;
  location: string;
};

export const FindPets = () => {
  const [filter, setFilter] = useState<Filter>({
    search: "",
    sex: "",
    category: "",
    animalType: "",
    location: "",
  });

  const dispatch = useAppDispatch();

  const data = useAppSelector(notices);

  useEffect(() => {
    dispatch(getNotices({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGender());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch]);

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm filter={filter} setFilter={setFilter} />

        <div className="flex justify-center">
          <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
            {data?.results.map((notice) => (
              <PetCard key={notice._id} notice={notice} />
            ))}
          </ul>
        </div>
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
