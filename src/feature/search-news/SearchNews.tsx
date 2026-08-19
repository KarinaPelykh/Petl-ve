import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

import clsx from "clsx";
import type { UseFormReturn } from "react-hook-form";

type SearchNewsProps = {
  onSearch: (val: string) => void;
  reset: () => void;
  form: UseFormReturn<{ search: string }>;
};

export const SearchNews = ({ onSearch, form, reset }: SearchNewsProps) => {
  const isFieldBlank = form.watch("search");
  const searchField = form.register("search");

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(({ search }) => onSearch(search))}
      className="tablet-l:w-57.5 tablet-l:m-0 mb-6 rounded-none bg-transparent! p-0!"
    >
      <FormField name="search" className="relative mb-0!">
        <ItemLabel>
          <SearchField
            field="search"
            value={isFieldBlank}
            onChange={(value) =>
              searchField.onChange({
                target: {
                  name: "search",
                  value,
                },
              })
            }
          />
          <Button
            type="submit"
            className={clsx(
              "absolute top-0 right-0",
              isFieldBlank && "right-5",
            )}
          >
            <Icon
              name="search"
              className="size-4.5 fill-transparent stroke-black"
            />
          </Button>
          {isFieldBlank && (
            <Button
              type="button"
              className="absolute top-0 right-0 z-50"
              onClick={() => reset()}
            >
              <Icon
                name="close"
                className="size-4.5 fill-transparent stroke-black"
              />
            </Button>
          )}
        </ItemLabel>
      </FormField>
    </Form>
  );
};
