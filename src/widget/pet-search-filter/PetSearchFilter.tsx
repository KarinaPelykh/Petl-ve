import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { PetRadioBtn } from "../../feature/search-pet/ui/PetRadioBtn";
import { LocationSearchBar } from "../../feature/search-pet/ui/LocationSearchBar";
import { PetSelect } from "../../feature/search-pet/ui/PetSelects";

import { usePetsFilter } from "../../feature/search-pet/hook/usePetsFilter";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

export const PetSearchFilter = () => {
  const method = usePetsFilter();

  return (
    <Form className="bg-cream! tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-304 mb-10 p-5">
      <div className="tablet-l:flex-row tablet-l:flex-wrap flex w-full flex-col gap-3">
        <FormField name="search" className="relative mb-0!">
          <ItemLabel>
            <SearchField
              field="search"
              method={method}
              className="tablet-l:w-66.25 desktop-l:w-66.25 outline-yellow border-0 bg-white"
            />
            <Button type="button" className="absolute top-0 right-0">
              <Icon
                name="search"
                className="size-4.5 fill-transparent stroke-black"
              />
            </Button>
          </ItemLabel>
        </FormField>

        <PetSelect onChangeInput={method.onChangeInput} />
        <LocationSearchBar
          method={method}
          className="desktop-l:w-56.75 border-0 bg-white"
        />
      </div>
      <div className="my-5 h-px w-full bg-black/10" />
      <PetRadioBtn method={method} />
    </Form>
  );
};
