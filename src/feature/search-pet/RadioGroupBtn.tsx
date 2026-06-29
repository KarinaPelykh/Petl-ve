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
      value={String(filter)}
      onValueChange={(val) => onChange(val === "true")}
    >
      <ul className="desktop-l:flex desktop-l:gap-2">
        {data.map(({ name, value }: Data) => (
          <li
            key={name}
            className={clsx(
              filter === value && "border-yellow",
              "text-m rounded-ms desktop-l:p-3.5 w-fit cursor-pointer items-center justify-between border border-transparent bg-white font-normal text-black transition-all duration-200 hover:shadow-lg",
            )}
          >
            <RadioGroup.Item value={String(value)} id={name}>
              {name}
            </RadioGroup.Item>
          </li>
        ))}
      </ul>
    </RadioGroup.Root>
  );
};
