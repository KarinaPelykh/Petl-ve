import { useState, type SubmitEvent } from "react";
import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { getNews } from "../../shared/api/redux/news/operations";
import { useAppDispatch } from "../../shared/hooks/reduxHooks";

export const SearchNews = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getNews({ page: 1, search }));
  };

  return (
    <Form
      onSubmit={onSubmit}
      className="tablet-l:w-57.5 tablet-l:m-0 mb-6 rounded-none bg-transparent! p-0!"
    >
      <FormField name="search" className="relative mb-0!">
        <ItemLabel>
          <SearchField value={search} onChange={setSearch} field="search" />
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
