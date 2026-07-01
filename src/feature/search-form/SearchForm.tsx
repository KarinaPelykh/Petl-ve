import type { SetStateAction, SubmitEvent } from "react";
import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

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
      <FormField name="search" className="relative mb-0!">
        <ItemLabel>
          <SearchField
            value={search}
            onChange={setSearch}
            field="search"
            type="submit"
          />
          <Button type="submit" className="absolute top-0 right-0">
            <Icon
              name="search"
              className="size-4.5 fill-transparent stroke-black"
            />
          </Button>
        </ItemLabel>
      </FormField>
    </Form>
  );
};
