import type { PetFilterControl } from "../../feature/search-pet/hook/usePetsFilter";

import { Input } from "./Form";

type SearchFieldProps = {
  field: "search";
  value?: string;
  className?: string;
  onChange?: (val: string) => void;
  method?: PetFilterControl;
};

export const SearchField = ({
  method,
  className,
  field,
  onChange,
}: SearchFieldProps) => {
  return (
    <Input
      placeholder={field}
      value={method?.filter.keyword}
      onChange={(e) => {
        onChange?.(e.target.value);
        method?.onChangeInput("keyword", e.target.value);
      }}
      className={className}
    />
  );
};
