import clsx from "clsx";
import { Icon } from "../../shared/ui/Icon";
import css from "./bg.module.css";
type PetBlockProps = {
  imageUrl: string;
};

export const PetBlock = ({ imageUrl }: PetBlockProps) => {
  return (
    <div
      className={clsx(
        " bg-yellow rounded-ms size-fit relative z-1 mb-2.5 w-full min-h-70 desktop-l:h-[660px] desktop-l:rounded-m desktop-l:w-1/2 desktop-l:mb-0",
        css.bg,
      )}
    >
      <div className="absolute top-1/2 left-1/2 -z-2 -translate-x-1/2 -translate-y-1/2">
        <Icon name="rectangle" />
      </div>

      {/* <img
        src={imageUrl}
        className=" block w-full h-auto object-contain"
        width={335}
        alt="cat"
        height={280}
      /> */}
    </div>
  );
};
