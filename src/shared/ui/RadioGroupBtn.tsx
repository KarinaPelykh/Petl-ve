import clsx from "clsx";
import { RadioGroup } from "radix-ui";

type Data = { name: string; value: boolean };

type RadioGroupBtnProps = {
  filter: boolean;
  data: Data[];
  onChange: (value: boolean) => void;
};

export const RadioGroupBtn = ({
  data,
  filter,
  onChange,
}: RadioGroupBtnProps) => {
  return (
    <RadioGroup.Root
      className="desktop-l:flex desktop-l:gap-2"
      value={String(filter)}
      onValueChange={(val) => onChange(val === "true")}
    >
      {data.map(({ name, value }: Data) => (
        <RadioGroup.Item
          value={String(value)}
          id={name}
          key={name}
          className={clsx(
            filter === value && "border-yellow",
            "text-m rounded-ms desktop-l:p-3.5 w-fit cursor-pointer items-center justify-between border border-transparent bg-white font-normal text-black transition-all duration-200 hover:shadow-lg",
          )}
        >
          {name}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
