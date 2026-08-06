import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

import { useForm } from "react-hook-form";
import clsx from "clsx";

type SearchNewsProps = { onSearch: (val: string) => void };

export const SearchNews = ({ onSearch }: SearchNewsProps) => {
  const form = useForm();
  // eslint-disable-next-line react-hooks/incompatible-library
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
              className="absolute top-0 right-0"
              onClick={() => form.reset()}
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
