import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import { Icon } from "./Icon";

type Data = {
  label: string;
  value: string | boolean;
};

type RadioGroupBtnProps = {
  onChange?: (val: string | boolean) => void;
  data: Data[];
  filterValue?: string | boolean | null | undefined;
  activeClassName?: string;
  reset?: () => void;
  variant: "icon" | "text";
};

const styles: { [key: string]: string } = {
  gender: "bg-yellow/10!",
  female: "bg-pink/10!",
  male: "bg-blue/10!",
};

export const RadioGroupBtn = ({
  filterValue,
  data,
  onChange,
  reset,
  activeClassName,
  variant,
}: RadioGroupBtnProps) => {
  return (
    <RadioGroup.Root
      className="desktop-l:h-10.5 flex w-fit flex-wrap gap-2"
      value={filterValue === null ? "" : String(filterValue)}
      onValueChange={(val) => onChange?.(val === "true" || val)}
    >
      {data?.map(({ label, value }) => (
        <RadioGroup.Item
          key={label}
          value={String(value)}
          className={clsx(
            styles[label],

            filterValue === value && activeClassName,
            "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 tablet-l:p-3 flex w-fit cursor-pointer items-center border border-transparent bg-white p-1.5 font-normal text-black transition-all duration-200 hover:shadow-lg",
          )}
        >
          {variant === "text" && label}
          {variant === "icon" && (
            <Icon name={label} className="desktotablet-l:l:size-6 size-5" />
          )}
          {filterValue === value && (
            <Icon
              name="close"
              className="ml-1.5 size-4.5 stroke-white"
              onClick={(e) => {
                e.stopPropagation();
                reset?.();
              }}
            />
          )}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
