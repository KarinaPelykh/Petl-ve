import type { Dispatch, SetStateAction } from "react";
import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";

import type { Filter } from "../../pages/FindPet";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import {
  category,
  gender,
  species,
} from "../../shared/api/redux/notices/selectors";
import { MySelect } from "./Select";

type SearchPetFormProps = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export const SearchPetForm = ({ filter, setFilter }: SearchPetFormProps) => {
  const onChangeInput = <K extends keyof Filter>(val: Filter[K], key: K) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  const categoryData = useAppSelector(category);
  const genderData = useAppSelector(gender);
  const speciesData = useAppSelector(species);

  return (
    <Form className="bg-cream! tablet-l:flex-row tablet-l:flex-wrap tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-[1216px] mb-10 flex w-full flex-col gap-3 p-5">
      <SearchField
        type="search"
        value={filter.search}
        onChange={(val) => onChangeInput(val, "search")}
        className="desktop-l:w-66.25 border-0 bg-white"
      />

      <div className="flex gap-2">
        <MySelect
          data={categoryData}
          onChange={(val) => onChangeInput(val, "category")}
          field="Category"
          className="desktop-l:w-50"
        />
        <MySelect
          data={genderData}
          onChange={(val) => onChangeInput(val, "sex")}
          field="By gender"
          className="desktop-l:w-47.5"
        />
      </div>
      <MySelect
        data={speciesData}
        onChange={(val) => onChangeInput(val, "animalType")}
        field="By type"
        className="tablet-l:w-47.5"
      />
      <SearchField
        type="location"
        value={filter.location}
        onChange={(val) => onChangeInput(val, "location")}
        className="desktop-l:w-56.75 border-0 bg-white"
      />
    </Form>
  );
};
