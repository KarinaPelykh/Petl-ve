import {
  checkboxesExpensive,
  checkboxesPopular,
} from "../constants/searchPet.constants";
import { RadioGroupBtn } from "../../../shared/ui/RadioGroupBtn";
import type { Filter, FilterKey } from "../types/select.type";

type PetRadioBtnProps = {
  method: {
    filter: Filter;
    onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
  };
};

export const PetRadioBtn = ({ method }: PetRadioBtnProps) => {
  return (
    <div className="flex gap-2">
      <RadioGroupBtn
        filter={method.filter.byPopularity}
        data={checkboxesPopular}
        onChange={(val) => method.onChangeInput("byPopularity", val)}
      />

      <RadioGroupBtn
        filter={method.filter.byPrice}
        data={checkboxesExpensive}
        onChange={(val) => method.onChangeInput("byPrice", val)}
      />
    </div>
  );
};
