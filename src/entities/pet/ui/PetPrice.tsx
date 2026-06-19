import { usePetContext } from "../api/usePetContex";

export const PetPrice = () => {
  const { notice } = usePetContext();
  return (
    <span className="text-m mb-3 block"> {notice?.price || "40.99"}$</span>
  );
};
