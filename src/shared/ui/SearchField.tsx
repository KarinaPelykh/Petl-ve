// import clsx from "clsx";
// import { Button } from "./Button";
import { Input } from "./Form";
// import { Icon } from "./Icon";

type SearchFieldProps = {
  type: "submit" | "button";
  onChange: (value: string) => void;
  field: "search";
  value: string;
  className?: string;
};

export const SearchField = ({
  value,
  onChange,
  // type,
  className,
  field,
}: SearchFieldProps) => {
  return (
    <Input
      placeholder={field}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    />
    //  <FormField name={field} className="relative mb-0!">
    //   <ItemLabel>  </ItemLabel>
    //   <Button
    //     type={type}
    //     className={clsx("absolute top-0 right-0", value && "right-5")}
    //   >
    //     <Icon
    //       name="search"
    //       className="group-hover:stroke-yellow size-4.5 fill-transparent stroke-black"
    //     />
    //   </Button>
    //   {value && (
    //     <Button
    //       type="button"
    //       className="absolute top-0 right-0"
    //       onClick={() => onChange("")}
    //     >
    //       <Icon
    //         name="close"
    //         className="group-hover:stroke-yellow size-4.5 fill-transparent stroke-black"
    //       />
    //     </Button>
    //   )}
    // </FormField>
  );
};
