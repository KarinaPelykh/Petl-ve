import { Form, FormField, ItemLabel } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";
import { LocationSearchBar } from "../../feature/search-pet/ui/LocationSearchBar";
import { PetSelect } from "../../feature/search-pet/ui/PetSelects";

import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

import type { PetFilterControl } from "../../feature/search-pet/hook/usePetsFilter";
import { options } from "../../feature/search-pet/constants/searchPet.constants";
import { RadioGroupBtn } from "../../shared/ui/RadioGroupBtn";

type PetSearchFilterProps = {
  method: PetFilterControl;
};

export const PetSearchFilter = ({ method }: PetSearchFilterProps) => {
  return (
    <Form className="bg-cream! tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-304 mb-10 p-5">
      <div className="tablet-l:flex-row tablet-l:flex-wrap flex w-full flex-col gap-3">
        <FormField name="search" className="mb-0!">
          <ItemLabel className="relative">
            <SearchField
              value={method?.filter.keyword}
              // TO-DO: IT should be done without checking whether it has value
              onChange={(val) => method?.onChangeInput("keyword", val ?? "")}
              className="tablet-l:w-66.25 desktop-l:w-66.25 outline-yellow border-none bg-white"
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

      <div className="size-full">
        {/* TO-DO: It's needed to simplify logic. Moreover make it responsive! */}
        <RadioGroupBtn
          filterValue={method.filter.byPrice}
          onChange={(val) => method.onChangeInput("byPrice", val)}
          data={options}
          reset={() => {
            method?.setFilter((prev) => ({ ...prev, byPrice: null }));
          }}
        />
        {/* <RadioGroupBtn
          filterValue={method.filter.byPrice}
          onChange={(val) => method.onChangeInput("byPrice", val)}
          data={priceOption}
          reset={() => {
            method?.setFilter((prev) => ({ ...prev, byPrice: null }));
          }}
        />
        <RadioGroupBtn
          onChange={(val) => method.onChangeInput("byPopularity", val)}
          data={popularOption}
          filterValue={method.filter.byPopularity}

          reset={() => {
            method?.setFilter((prev) => ({ ...prev, byPopularity: null }));
          }}
        /> */}
      </div>
    </Form>
  );
};
