import { MySelect } from "../../../shared/ui/Select";
import { usePetSelect } from "../hook/usePetSelect";
import type { Filter } from "../types/select.type";

type PetSelectProps = {
  onChangeInput: <K extends keyof Filter>(val: Filter[K], key: K) => void;
};

export const PetSelect = ({ onChangeInput }: PetSelectProps) => {
  const { selectData } = usePetSelect();

  return (
    <>
      <div className="flex gap-2">
        <MySelect
          data={selectData?.categories}
          onChange={(val) => onChangeInput(val, "category")}
          field="Category"
          className="desktop-l:w-50"
        />
        <MySelect
          data={selectData?.genders}
          onChange={(val) => onChangeInput(val, "sex")}
          field="By gender"
          className="desktop-l:w-47.5"
        />
      </div>
      <MySelect
        data={selectData?.species}
        onChange={(val) => onChangeInput(val, "species")}
        field="By type"
        className="tablet-l:w-47.5"
      />
    </>
  );
};
