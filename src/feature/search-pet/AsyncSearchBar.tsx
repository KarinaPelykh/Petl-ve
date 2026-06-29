import clsx from "clsx";
import AsyncSelect from "react-select/async";
import { useLoadOptions } from "./api/useLoadOptions";

type AsyncSearchBarProps = {
  className?: string;
};

export const AsyncSearchBar = ({
  className,
  ...props
}: AsyncSearchBarProps) => {
  const { loadOptions } = useLoadOptions();

  return (
    <AsyncSelect
      {...props}
      isClearable={true}
      loadOptions={loadOptions}
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
