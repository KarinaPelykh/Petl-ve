import type { ReactNode } from "react";
import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";
import { usePetContext } from "../api/usePetContex";
import clsx from "clsx";

type PetTitleProps = {
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export const PetTitle = ({
  children,
  className,
  titleClassName,
}: PetTitleProps) => {
  const { data } = usePetContext();

  return (
    <div
      className={clsx(
        "tablet-l:mb-2 flex items-center justify-between",
        className,
      )}
    >
      <Heading
        as="h3"
        className={clsx("text-m tablet-l:text-xl", titleClassName)}
      >
        {data.title}
      </Heading>

      {children || (
        <div
          className={clsx(
            "flex items-center justify-between",
            titleClassName && "hidden",
          )}
        >
          <Icon name="star" className="fill-yellow mr-1 size-4" />
          <span>{"popularity" in data && data.popularity}</span>
        </div>
      )}
    </div>
  );
};
