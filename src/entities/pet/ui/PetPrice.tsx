import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

type PetPriceProps = {
  className?: string;
};

export const PetPrice = ({ className }: PetPriceProps) => {
  const { notice } = usePetContext();
  return (
    <span className={clsx("text-m mb-3 block", className)}>
      ${notice?.price || "40.99"}
    </span>
  );
};
