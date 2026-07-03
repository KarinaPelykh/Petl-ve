import clsx from "clsx";
import AsyncSelect from "react-select/async";
import { useCreateLocationOptions } from "../hook/useCreateLocationOptions";
import type { Filter, FilterKey } from "../types/select.type";

type LocationSearchBarProps = {
  className?: string;
  method: {
    filter: Filter;
    onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
  };
};

export const LocationSearchBar = ({
  className,
  method,
}: LocationSearchBarProps) => {
  const { options } = useCreateLocationOptions();

  const filterOptions = (inputValue: string) => {
    return options.filter(({ value }) =>
      value.toLowerCase().includes(inputValue.toLowerCase().trim()),
    );
  };

  const promiseOptions = async (inputValue: string) => {
    return filterOptions(inputValue);
  };

  const selectedOption =
    options.find((item) => item.locationId === method.filter.locationId) ||
    null;

  return (
    <AsyncSelect
      value={selectedOption}
      onChange={(option) => {
        method.onChangeInput("locationId", option?.locationId as string);
      }}
      cacheOptions
      isClearable={true}
      defaultOptions={options}
      loadOptions={promiseOptions}
      unstyled
      classNamePrefix="react-select"
      placeholder="Location"
      loadingMessage={() => "Searching..."}
      className={clsx(
        "text-ms desktop-l:p-4 tablet-l:w-42.5 rounded-ms outline-yellow absolute flex h-10.5 w-full items-center justify-between border-none bg-white p-3 text-black shadow-lg placeholder:text-black/50",
        className,
      )}
    />
  );
};
