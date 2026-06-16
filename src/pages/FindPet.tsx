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

  const dispatch = useAppDispatch();

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

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <SearchPetForm filter={filter} setFilter={setFilter} />
        {data?.results.length !== 0 ? (
          <div className="flex justify-center">
            <ul className="tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8 grid gap-5">
              {data?.results.map((notice) => (
                <PetCard key={notice._id} notice={notice} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <div className="relative mb-6 h-74 w-74">
              <img
                src="/image/ChatGPT.png"
                alt="No data"
                className="relative h-full w-full object-contain"
              />
            </div>

            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
              No pets found
            </h2>

            <p className="mb-6 max-w-md text-gray-500">
              We couldn’t find any results for your filters. Try changing search
              or reset filters to see more pets.
            </p>

            <button
              className="bg-yellow rounded-full px-6 py-3 font-semibold text-white shadow-md transition hover:bg-yellow-500"
              onClick={resetFilter}
            >
              Reset filters
            </button>
          </div>
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
