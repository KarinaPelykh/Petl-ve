import {
  checkboxesExpensive,
  checkboxesPopular,
} from "../constants/searchPet.constants";
import { RadioGroupBtn } from "../../../shared/ui/RadioGroupBtn";
import type { Filter, FilterKey } from "../types/select.type";

type PetRadioBtnProps = {
  filter: Filter;
  onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
};

export const PetRadioBtn = ({ filter, onChangeInput }: PetRadioBtnProps) => {
  return (
    <div className="flex gap-2">
      <RadioGroupBtn
        filter={filter.byPopularity}
        data={checkboxesPopular}
        onChange={(val) => onChangeInput("byPopularity", val)}
      />

      <RadioGroupBtn
        filter={filter.byPrice}
        data={checkboxesExpensive}
        onChange={(val) => onChangeInput("byPrice", val)}
      />
    </div>
  );
};
