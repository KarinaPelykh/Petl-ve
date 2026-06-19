import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

export const PetPrice = ({ className }) => {
  const { notice } = usePetContext();
  return (
    <span className={clsx("text-m mb-3 block", className)}>
      ${notice?.price || "40.99"}
    </span>
  );
};
