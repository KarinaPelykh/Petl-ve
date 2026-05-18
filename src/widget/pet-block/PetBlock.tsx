import clsx from "clsx";
import css from "./bg.module.css";
import { PetInfo } from "./PetInfo";

type PetBlockPops = {
  variant: "dog" | "cat";
};

const petData = [
  {
    id: "dog",
    name: "Rich",
    date: "21.09.2020",
    description:
      "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",
    image: "/image/dog.png",
  },
  {
    id: "cat",
    name: "Jack",
    date: "18.10.2021",
    description:
      "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.",
    image: "/image/cat.png",
  },
];

export const PetBlock = ({ variant }: PetBlockPops) => {
  const filterData = petData.filter((pet) => pet.id === variant);
  return (
    <div
      className={clsx(
        " bg-yellow p-8 rounded-ms flex tablet-l:rounded-m  mb-2.5 w-full min-h-70 desktop-l:h-165 desktop-l:w-1/2 desktop-l:mb-0",
        variant === "cat" ? css.bgCat : css.bgDog,
      )}
    >
      <PetInfo filterData={filterData} />
    </div>
  );
};
