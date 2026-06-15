import type { SetStateAction, SubmitEvent } from "react";
import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";

type SearchFormProps = {
  search: string;
  setSearch: (value: SetStateAction<string>) => void;
  onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({
  search,
  setSearch,
  onSubmit,
}: SearchFormProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      className="tablet-l:w-57.5 tablet-l:m-0 mb-6 rounded-none bg-transparent! p-0!"
    >
      <SearchField value={search} onChange={setSearch} type="search" />
    </Form>
  );
};
