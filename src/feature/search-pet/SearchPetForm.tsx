import { type Dispatch, type SetStateAction } from "react";
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
import { AsyncSearchBar } from "./AsyncSearchBar";
import { RadioGroupBtn } from "./RadioGroupBtn";

type SearchPetFormProps = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

const checkboxesPop = [
  { name: "Popular", value: true },
  { name: "Unpopular", value: false },
];

const checkboxesChe = [
  { name: "Cheap", value: true },
  { name: "Expensive", value: false },
];

export const SearchPetForm = ({ filter, setFilter }: SearchPetFormProps) => {
  const onChangeInput = <K extends keyof Filter>(val: Filter[K], key: K) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  const categoryData = useAppSelector(category);
  const genderData = useAppSelector(gender);
  const speciesData = useAppSelector(species);

  return (
    <Form className="bg-cream! tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-304 mb-10 p-5">
      <div className="tablet-l:flex-row tablet-l:flex-wrap flex w-full flex-col gap-3">
        <SearchField
          type="search"
          value={filter.keyword}
          onChange={(val) => onChangeInput(val, "keyword")}
          className="desktop-l:w-66.25 outline-yellow border-0 bg-white"
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
          onChange={(val) => onChangeInput(val, "species")}
          field="By type"
          className="tablet-l:w-47.5"
        />
        <AsyncSearchBar
          value={filter.location}
          onChange={(val) => onChangeInput(val, "location")}
          className="desktop-l:w-56.75 border-0 bg-white"
        />
      </div>
      <div className="my-5 h-px w-full bg-black/10" />
      <div className="flex gap-2">
        <RadioGroupBtn
          filter={filter.byPopularity}
          data={checkboxesPop}
          onChange={(val) => onChangeInput(val, "byPopularity")}
        />

        <RadioGroupBtn
          filter={filter.byPrice}
          data={checkboxesChe}
          onChange={(val) => onChangeInput(val, "byPrice")}
        />
      </div>
    </Form>
  );
};
