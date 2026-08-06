import { Input } from "./Form";

type SearchFieldProps = {
  field: "search";
  className?: string;
  value?: string;
  onChange?: (val?: string) => void;
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
      {...props}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}

      placeholder={field}
      className={className}
    />
  );
};
