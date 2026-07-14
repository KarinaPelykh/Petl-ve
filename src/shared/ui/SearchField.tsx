import { Input } from "./Form";

type SearchFieldProps = {
  field: "search";
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
};

export const SearchField = ({
  className,
  field,
  value,
  onChange,
  ...props
}: SearchFieldProps) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
      placeholder={field}
      className={className}
    />
  );
};
