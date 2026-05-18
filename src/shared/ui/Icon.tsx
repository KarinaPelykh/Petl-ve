import clsx from "clsx";
import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg"> & {
  name: string;
  className?: string;
};

export const Icon = ({ name, className, ...props }: IconProps) => {
  return (
    <svg className={clsx(className)} {...props}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};
