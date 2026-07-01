import { Heading } from "../shared/ui/Heading";

import { PetList } from "../components/find-pet/PetList";

import { PetSearchFilter } from "../widget/pet-search-filter/PetSearchFilter";
import { PaginationWrap } from "../widget/pagination/Pagination";

export const FindPets = () => {
  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>

        <PetSearchFilter />
        <PetList />
        <PaginationWrap />
      </div>
    </section>
  );
};
