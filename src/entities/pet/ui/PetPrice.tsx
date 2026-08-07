import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

type PetPriceProps = {
  className?: string;
};

export const PetPrice = ({ className }: PetPriceProps) => {
  const { data } = usePetContext();

  return (
    <span className={clsx("text-m mb-3 block", className)}>
      ${("price" in data && data.price) || "40.99"}
    </span>
  );
};
