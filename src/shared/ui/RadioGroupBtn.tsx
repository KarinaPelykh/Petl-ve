import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import { Icon } from "./Icon";
import { Button } from "./Button";

type Data = { name: string; value: boolean };

type RadioGroupBtnProps = {
  filter?: boolean | null;
  data: Data[];
  onChange: (value: boolean | null) => void;
};

export const RadioGroupBtn = ({
  data,
  filter,
  onChange,
}: RadioGroupBtnProps) => {
  return (
    <RadioGroup.Root
      className={clsx("flex h-10.5 w-fit gap-2")}
      value={String(filter)}
      onValueChange={(val) => onChange(val === "true")}
    >
      {data.map(({ name, value }: Data) => (
        <RadioGroup.Item
          value={String(value)}
          id={name}
          key={name}
          className={clsx(
            filter === value && "bg-yellow text-white",
            "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 flex w-fit cursor-pointer items-center border border-transparent bg-white p-3 font-normal text-black transition-all duration-200 hover:shadow-lg",
          )}
        >
          {name}
          {filter === value && (
            <Button variant="tertiary" onClick={() => onChange(null)}>
              <Icon name="close" className="ml-1.5 size-4.5 stroke-white" />
            </Button>
          )}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
