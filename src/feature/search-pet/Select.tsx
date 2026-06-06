import clsx from "clsx";
import type { SetStateAction } from "react";
import type { Filter } from "../../pages/FindPet";

type SelectProps = {
  data: string[];
  className?: string;
  setState: (val: SetStateAction<Filter>) => void;
  state: string;
  field: keyof Filter;
};

export const Select = ({
  data,
  className,
  setState,
  state,
  field,
}: SelectProps) => {
  return (
    <select
      value={state}
      onChange={(e) =>
        setState((prev) => ({ ...prev, [field]: e.target.value }))
      }
      className={clsx(
        className,
        "border-none bg-white p-3 text-ms desktop-l:p-4 border tablet-l:w-42.5 h-10.5 border-black/50 placeholder:text-black/50  rounded-ms w-full outline-none text-black",
      )}
    >
      {data.map((value, i) => (
        <option key={i} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
