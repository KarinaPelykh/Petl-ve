import type { ReactNode } from "react";
import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";
import { usePetContext } from "../api/usePetContex";
import clsx from "clsx";

type PetTitleProps = { children?: ReactNode; className?: string };

export const PetTitle = ({ children, className }: PetTitleProps) => {
  const { notice } = usePetContext();

  return (
    <div
      className={clsx(
        "tablet-l:mb-2 flex items-center justify-between",
        className,
      )}
    >
      <Heading as="h3" className="text-m tablet-l:text-xl">
        {notice.title}
      </Heading>

      {children || (
        <div className="flex items-center justify-between">
          <Icon name="star" className="fill-yellow mr-1 size-4" />
          <span>{notice.popularity}</span>
        </div>
      )}
    </div>
  );
};
