import clsx from "clsx";
import { Button } from "./Button";
import { FormField, Input, ItemLabel, Label, MessageText } from "./Form";
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
        <ItemLabel>
          <Label htmlFor={type} />
          <Input
            id="email"
            placeholder={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={clsx("border-none bg-white", className)}
          />
          <MessageText />
        </ItemLabel>
      </FormField>

      <Button type="submit" className="absolute top-0 right-0">
        <Icon
          name="search"
          className="size-4.5 fill-transparent stroke-black"
        />
      </Button>
    </div>
  );
};
