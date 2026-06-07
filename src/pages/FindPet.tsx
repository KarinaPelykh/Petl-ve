import { useEffect, useState } from "react";
import { PetCard } from "../entities/pet/ui/PetCard";
import { Heading } from "../shared/ui/Heading";
import { SearchPetForm } from "../feature/search-pet/SearchPetForm";
import { getNotices } from "../shared/api/redux/notices/operations";
import { notices } from "../shared/api/redux/notices/selectors";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";

export type Filter = {
  search: string;
  gender: string;
  category: string;
  animalType: string;
  location: string;
};

export const FindPets = () => {
  const [filter, setFilter] = useState<Filter>({
    search: "",
    gender: "",
    category: "",
    animalType: "",
    location: "",
  });

  const dispatch = useAppDispatch();

  const data = useAppSelector(notices);

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm filter={filter} setFilter={setFilter} />

        <div className="flex justify-center">
          <ul className="grid gap-5  tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8">
            {data.map((notice) => (
              <PetCard key={notice._id} notice={notice} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
