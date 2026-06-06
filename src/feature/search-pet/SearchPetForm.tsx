import type { Dispatch, SetStateAction } from "react";
import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField/SearchField";
import { CATEGORY, GENDER, TYPE } from "./constants";
import { Select } from "./Select";
import type { Filter } from "../../pages/FindPet";

type SearchPetFormProps = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export const SearchPetForm = ({ filter, setFilter }: SearchPetFormProps) => {
  const onChangeInput = <K extends keyof Filter>(val: Filter[K], key: K) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <Form className="bg-cream! w-full p-5 flex flex-col gap-3 mb-10 tablet-l:flex-row tablet-l:flex-wrap tablet-l:py-10 tablet-l:px-8 desktop-l:p-10">
      <SearchField
        type="search"
        value={filter.search}
        onChange={(val) => onChangeInput(val, "search")}
        className="tablet-l:w-66.25"
      />

      <div className="flex  gap-2">
        <Select
          data={CATEGORY}
          setState={setFilter}
          state={filter.category}
          field="category"
        />

        <Select
          data={GENDER}
          setState={setFilter}
          state={filter.gender}
          field="gender"
        />
      </div>
      <Select
        data={TYPE}
        setState={setFilter}
        state={filter.animalType}
        field="animalType"
        className="tablet-l:w-47.5"
      />
      <SearchField
        type="location"
        value={filter.location}
        onChange={(val) => onChangeInput(val, "location")}
        className="tablet-l:w-56.75"
      />
    </Form>
  );
};
