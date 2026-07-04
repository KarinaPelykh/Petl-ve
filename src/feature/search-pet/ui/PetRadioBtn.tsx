import {
  checkboxesExpensive,
  checkboxesPopular,
} from "../constants/searchPet.constants";
import { RadioGroupBtn } from "../../../shared/ui/RadioGroupBtn";
import type { PetFilterControl } from "../hook/usePetsFilter";

type PetRadioBtnProps = {
  method: PetFilterControl;
};

export const PetRadioBtn = ({ method }: PetRadioBtnProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-2.5">
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
