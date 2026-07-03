import type {
  Filter,
  FilterKey,
} from "../../feature/search-pet/types/select.type";
import { Input } from "./Form";

type SearchFieldProps = {
  field: "search";
  value?: string;
  className?: string;
  onChange?: (val: string) => void;
  method?: {
    filter: Filter;
    onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
  };
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
