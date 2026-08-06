import { createContext, useContext } from "react";
import type { Notice } from "../../../shared/api/redux/notices/slice";
import type { Pet } from "../../../shared/api/redux/user/slice";

type PetCardContextProps = {
  data: Notice | Pet;
  setCardId?: (val: string) => void;
};

export const PetCardContext = createContext<null | PetCardContextProps>(null);

export const usePetContext = () => {
  const petContext = useContext(PetCardContext);
  if (!petContext) {
    throw new Error("usePetContext must be used in PetCardContext");
  }

  return petContext;
};
