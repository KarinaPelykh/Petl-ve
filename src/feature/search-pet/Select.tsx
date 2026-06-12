import Select from "react-select";
import clsx from "clsx";

type Option = { value: string; label: string };

type SelectProps = {
  data: string[];
  onChange: (value: string) => void;
  className?: string;
  field: string;
};

export const MySelect = ({ data, onChange, field, className }: SelectProps) => {
  const defaultOptions = { value: "Show all", label: "Show all" };

  const optionsN = [
    defaultOptions,
    ...data.map((item) => ({ value: item, label: item })),
  ];

  return (
    <Select<Option>
      options={optionsN}
      onChange={(selected) => {
        if (!selected) {
          return;
        }
        onChange(selected.value);
      }}
      classNamePrefix="react-select"
      unstyled
      placeholder={field}
      className={clsx(
        "text-ms desktop-l:p-4 tablet-l:w-42.5 rounded-ms absolute flex h-10.5 w-full items-center justify-between border-none bg-white p-3 text-black outline-none placeholder:text-black/50",
        className,
      )}
    />
  );
};
