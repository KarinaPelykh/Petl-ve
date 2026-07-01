import clsx from "clsx";
import AsyncSelect from "react-select/async";
import { useCreateLocationOptions } from "../hook/useCreateLocationOptions";
import type { Option } from "../types/select.type";

type LocationSearchBarProps = {
  className?: string;
};

export const LocationSearchBar = ({
  className,
  ...props
}: LocationSearchBarProps) => {
  const { options } = useCreateLocationOptions();

  const filterOptions = (inputValue: string) => {
    return options.filter(({ value }) =>
      value.toLowerCase().includes(inputValue.toLowerCase().trim()),
    );
  };

  const promiseOptions = (inputValue: string) => {
    return new Promise<Option[]>((resolve) => {
      resolve(filterOptions(inputValue));
    });
  };

  return (
    <AsyncSelect
      {...props}
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
