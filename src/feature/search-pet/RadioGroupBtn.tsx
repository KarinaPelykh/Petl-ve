import clsx from "clsx";
import { RadioBtn } from "../../shared/ui/RadioBtn";
import { RadioGroup } from "radix-ui";

type Data = { value: boolean; name: string };

type RadioGroupBtnProps = {
  filter: boolean;
  data: Data[];
  onChange: (value: boolean) => void;
};

export const RadioGroupBtn = ({
  filter,
  data,
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
            <RadioBtn value={String(value)} name={name} />
          </li>
        ))}
      </ul>
    </RadioGroup.Root>
  );
};
