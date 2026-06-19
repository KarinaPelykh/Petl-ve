import { usePetContext } from "../api/usePetContex";

export const PetDescription = () => {
  const { notice } = usePetContext();
  return <p className="text-ms tablet-l:mb-6 mb-4">{notice.comment}</p>;
};
