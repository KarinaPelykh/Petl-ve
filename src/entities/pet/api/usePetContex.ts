import { createContext, useContext } from "react";
import type { Notice } from "../ui/PetCard";

type PetCardContextProps = {
  notice: Notice;
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
