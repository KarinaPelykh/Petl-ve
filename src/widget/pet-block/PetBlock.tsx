import clsx from "clsx";
import { Icon } from "../../shared/ui/Icon";
import css from "./bg.module.css";

export const PetBlock = () => {
  return (
    <div
      className={clsx(
        " bg-yellow rounded-ms size-fit relative z-1 mb-2.5 w-full min-h-70 desktop-l:h-165 desktop-l:rounded-m desktop-l:w-1/2 desktop-l:mb-0",
        css.bg,
      )}
    >
      <div className="absolute top-1/2 left-1/2 -z-2 -translate-x-1/2 -translate-y-1/2">
        <Icon name="rectangle" />
      </div>
    </div>
  );
};
