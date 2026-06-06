import type { SetStateAction } from "react";
import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";

type SearchFormProps = {
  search: string;
  setSearch: (value: SetStateAction<string>) => void;
};

export const SearchForm = ({ search, setSearch }: SearchFormProps) => {
  return (
    <Form className="bg-transparent! rounded-none p-0!  mb-6 tablet-l:w-57.5 tablet-l:m-0">
      <SearchField value={search} onChange={setSearch} type="search" />
    </Form>
  );
};
