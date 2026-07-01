import { Heading } from "../shared/ui/Heading";
import { getNotices } from "../shared/api/redux/notices/operations";
import { Pagination } from "../shared/ui/Pagination";
import { PetList } from "../components/find-pet/PetList";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { notices } from "../shared/api/redux/notices/selectors";
import { PetSearchFilter } from "../widget/pet-search-filter/PetSearchFilter";

export const FindPets = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(notices);

  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>

        <PetSearchFilter />
        <PetList />
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
