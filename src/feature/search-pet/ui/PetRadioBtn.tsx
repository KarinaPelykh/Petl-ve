import {
  checkboxesExpensive,
  checkboxesPopular,
} from "../constants/searchPet.constants";
import { RadioGroupBtn } from "../RadioGroupBtn";
import type { Filter } from "../types/select.type";

type PetRadioBtnProps = {
  filter: Filter;
  onChangeInput: <K extends keyof Filter>(val: Filter[K], key: K) => void;
};

export const PetRadioBtn = ({ filter, onChangeInput }: PetRadioBtnProps) => {
  return (
    <div className="flex gap-2">
      <RadioGroupBtn
        filter={filter.byPopularity}
        data={checkboxesPopular}
        onChange={(val) => onChangeInput(val, "byPopularity")}
      />

      <RadioGroupBtn
        filter={filter.byPrice}
        data={checkboxesExpensive}
        onChange={(val) => onChangeInput(val, "byPrice")}
      />
    </div>
  );
};
