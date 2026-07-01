import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { PetRadioBtn } from "../../feature/search-pet/ui/PetRadioBtn";
import { LocationSearchBar } from "../../feature/search-pet/ui/LocationSearchBar";
import { PetSelect } from "../../feature/search-pet/ui/PetSelects";

import { usePetsFilter } from "../../feature/search-pet/hook/usePetsFilter";
import { useGetFilteredNotices } from "../../feature/search-pet/api/useGetFilteredNotices";

export const PetSearchFilter = () => {
  const { filter, onChangeInput } = usePetsFilter();

  useGetFilteredNotices({ filter });

  return (
    <Form
      form={null}
      className="bg-cream! tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-304 mb-10 p-5"
    >
      <div className="tablet-l:flex-row tablet-l:flex-wrap flex w-full flex-col gap-3">
        <SearchField
          type="search"
          value={filter.keyword}
          onChange={(val) => onChangeInput(val, "keyword")}
          className="tablet-l:w-66.25 desktop-l:w-66.25 outline-yellow border-0 bg-white"
        />
        <PetSelect onChangeInput={onChangeInput} />
        <LocationSearchBar
          value={filter.location}
          onChange={(val) => onChangeInput(val, "location")}
          className="desktop-l:w-56.75 border-0 bg-white"
        />
      </div>
      <div className="my-5 h-px w-full bg-black/10" />
      <PetRadioBtn filter={filter} onChangeInput={onChangeInput} />
    </Form>
  );
};
