import { Input } from "./Form";

type SearchFieldProps = {
  field: "search";
  // value?: string;
  className?: string;
  // onChange?: (val: string) => void;
};

export const SearchField = ({
  className,
  // value,
  field,
  // onChange,
  ...props
}: SearchFieldProps) => {
  return (
    <Input
      {...props}
      placeholder={field}
      // value={value}
      // onChange={(val) => console.log(val)}
      className={className}
    />
  );
};
