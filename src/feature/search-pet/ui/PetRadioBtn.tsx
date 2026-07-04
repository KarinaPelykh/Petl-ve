import { RadioGroupBtn } from "../../../shared/ui/RadioGroupBtn";
import type { PetFilterControl } from "../hook/usePetsFilter";

type PetRadioBtnProps = {
  method: PetFilterControl;
};

export const PetRadioBtn = ({ method }: PetRadioBtnProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-2.5">
      <RadioGroupBtn method={method} />
    </div>
  );
};
