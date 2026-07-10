import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import { Icon } from "./Icon";
// import { checkboxes } from "../../feature/search-pet/constants/searchPet.constants";
import type { PetFilterControl } from "../../feature/search-pet/hook/usePetsFilter";
import { Button } from "./Button";

type RadioGroupBtnProps = {
  method?: PetFilterControl;
};

export const RadioGroupBtn = ({ method, gender }: RadioGroupBtnProps) => {
  // const { filter, onChangeInput, setFilter } = method;

  return (
    <>
      {gender.map(({ key, name, value }) => (
        <RadioGroup.Root
          key={name}
          className={clsx("flex h-10.5 w-fit flex-wrap gap-2")}
          value={key}
          onValueChange={(val) => method?.onChangeInput(key, val === "true")}
        >
          <RadioGroup.Item
            value={String(value)}
            className={clsx(
              method?.filter[key] === value && "bg-yellow text-white",
              "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 flex w-fit cursor-pointer items-center border border-transparent bg-white p-3 font-normal text-black transition-all duration-200 hover:shadow-lg",
            )}
          >
            {name || <Icon name={name} className="size-6" />}
            {method?.filter[key] === value && (
              <Button variant="tertiary">
                <Icon
                  name="close"
                  className="ml-1.5 size-4.5 stroke-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    method?.setFilter((prev) => ({ ...prev, [key]: null }));
                  }}
                />
              </Button>
            )}
          </RadioGroup.Item>
        </RadioGroup.Root>
      ))}
    </>
  );
};
