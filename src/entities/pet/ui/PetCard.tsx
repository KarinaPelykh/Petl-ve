import type { ReactNode } from "react";
import { PetCardContext } from "../api/usePetContex";
import clsx from "clsx";
import type { Notice, Pet } from "../../../shared/api/redux/user/slice";

type PetCardProps = {
  data: Notice | Pet;
  children: ReactNode;
  className: string;
};

export const PetCard = ({ data, children, className }: PetCardProps) => {
  return (
    <PetCardContext.Provider
      value={{
        data,
      }}
    >
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
