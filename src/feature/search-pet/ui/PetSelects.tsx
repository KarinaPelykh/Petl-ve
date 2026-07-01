import { MySelect } from "../../../shared/ui/Select";
import { usePetSelect } from "../hook/usePetSelect";
import type { Filter, FilterKey } from "../types/select.type";

type PetSelectProps = {
  onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
};

export const PetSelect = ({ onChangeInput }: PetSelectProps) => {
  const { categories, genders, species } = usePetSelect();

  const createOptions = (data: string[]) => {
    return [
      { value: "Show all", label: "Show all" },
      ...data.map((item) => ({ value: item, label: item })),
    ];
  };

  return (
    <>
      <div className="flex gap-2">
        <MySelect
          options={createOptions(categories)}
          onChange={(val) => onChangeInput("category", val)}
          field="Category"
          className="desktop-l:w-50"
        />
        <MySelect
          options={createOptions(genders)}
          onChange={(val) => onChangeInput("sex", val)}
          field="By gender"
          className="desktop-l:w-47.5"
        />
      </div>
      <MySelect
        options={createOptions(species)}
        onChange={(val) => onChangeInput("species", val)}
        field="By type"
        className="tablet-l:w-47.5"
      />
    </>
  );
};
