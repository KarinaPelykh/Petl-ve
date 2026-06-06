import clsx from "clsx";
import { Button } from "./Button";
import { FormField, Input, Label, MessageText } from "./Form";
import { Icon } from "./Icon";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  type: "search" | "location";
  className?: string;
};

export const SearchField = ({
  value,
  onChange,
  type,
  className,
}: SearchFieldProps) => {
  return (
    <div className="relative">
      <FormField name={type} className="mb-0!">
        <Label htmlFor={type} />
        <Input
          type={type}
          id={type}
          placeholder={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx("bg-white border-none", className)}
        />
        <MessageText />
      </FormField>

      <Button type="submit" className="absolute  top-0 right-0">
        <Icon
          name="search"
          className="size-4.5 stroke-black fill-transparent "
        />
      </Button>
    </div>
  );
};
