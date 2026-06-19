import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

export const PetImage = ({ imgClassName }) => {
  const { notice } = usePetContext();
  return (
    <div className={clsx("mb-6 overflow-hidden rounded-s", imgClassName)}>
      <img
        src={notice.imgURL}
        alt={notice.name}
        width={287}
        height={178}
        className="desktop-l:h-44.5 desktop-l:w-78.75 block h-auto w-full object-cover"
      />
    </div>
  );
};
