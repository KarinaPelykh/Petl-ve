import type { ReactNode } from "react";
import { PetCardContext } from "../api/usePetContex";
import clsx from "clsx";

export type Notice = {
  _id: string;
  name: string;
  imgURL: string;
  title: string;
  popularity: number;
  comment: string;
  birthday: string;
  sex: string;
  species: string;
  category: string;
  price?: string;
};

type PetCardProps = {
  notice: Notice;
  setCardId?: (val: string) => void;
  children: ReactNode;
  className: string;
};

export const PetCard = ({
  notice,
  setCardId,
  children,
  className,
}: PetCardProps) => {
  return (
    <PetCardContext.Provider value={{ notice, setCardId }}>
      <article
        className={clsx(
          "flex w-full flex-col rounded-s bg-white p-6",
          className,
        )}
      >
        {children}
      </article>
    </PetCardContext.Provider>
  );
};
