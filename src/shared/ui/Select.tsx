import Select from "react-select";
import clsx from "clsx";
import type { Option } from "../../feature/search-pet/types/select.type";

type MySelectProps = {
  options: Pick<Option, "label" | "value">[];
  onChange: (value: string) => void;
  className?: string;
  field: string;
};

export const MySelect = ({
  options,
  onChange,
  field,
  className,
}: MySelectProps) => {
  return (
    <Select
      options={options}
      onChange={(selected) => selected && onChange(selected?.value)}
      classNamePrefix="react-select"
      unstyled
      placeholder={field}
      className={clsx(
        "text-ms desktop-l:p-4 tablet-l:w-42.5 rounded-ms absolute flex h-10.5 w-full items-center justify-between bg-white p-3 text-black shadow-lg outline-none placeholder:text-black/50",
        className,
      )}
    />
  );
};
