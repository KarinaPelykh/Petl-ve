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
    <FormField name={type} className="relative mb-0!">
      <ItemLabel>
        <Label htmlFor={type} />
        <Input
          placeholder={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={className}
        />
        <MessageText />
      </ItemLabel>
      <Button
        type="submit"
        className={clsx("absolute top-0 right-0", value && "right-5")}
      >
        <Icon
          name="search"
          className="group-hover:stroke-yellow size-4.5 fill-transparent stroke-black"
        />
      </Button>
      {value && (
        <Button
          type="button"
          className="absolute top-0 right-0"
          onClick={() => onChange("")}
        >
          <Icon
            name="close"
            className="group-hover:stroke-yellow size-4.5 fill-transparent stroke-black"
          />
        </Button>
      )}
    </FormField>
  );
};
