import clsx from "clsx";
import css from "./bg.module.css";
import { PetInfo } from "./PetInfo";
import petData from "./petData.json";

type PetBlockPops = {
  variant: "dog" | "cat" | "second-dog";
};

export const PetBlock = ({ variant }: PetBlockPops) => {
  const filterData = petData.filter((pet) => pet.id === variant);
  return (
    <div
      className={clsx(
        "bg-yellow rounded-ms tablet-l:rounded-m desktop-l:h-165 desktop-l:w-1/2 desktop-l:mb-0 mb-2.5 flex min-h-70 w-full p-8",
        variant === "cat" && css.bgCat,
        variant === "dog" && css.bgDog,
        variant === "second-dog" && css.bgSecondDog,
      )}
    >
      <PetInfo filterData={filterData} />
    </div>
  );
};
