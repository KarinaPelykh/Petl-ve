import clsx from "clsx";

type SelectProps = {
  data: string[];
  className?: string;
};

export const Select = ({ data, className }: SelectProps) => {
  return (
    <select
      defaultValue={data[0]}
      className={clsx(
        className,
        "border-none bg-white p-3 text-ms desktop-l:p-4 border h-10.5 border-black/50 placeholder:text-black/50  rounded-ms w-full outline-none text-black",
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
