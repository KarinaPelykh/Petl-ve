import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

type PetImageProps = {
  imgClassName?: string;
};

export const PetImage = ({ imgClassName }: PetImageProps) => {
  const { data } = usePetContext();

  return (
    <div className={clsx("mb-6 overflow-hidden rounded-s", imgClassName)}>
      <img
        src={data.imgURL}
        alt={data.name}
        width={287}
        height={178}
        className={clsx(
          imgClassName,
          "desktop-l:h-44.5 desktop-l:w-78.75 tablet-l:h-auto block h-44.5 w-full object-cover",
        )}
      />
    </div>
  );
};
