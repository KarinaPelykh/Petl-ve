import clsx from "clsx";

type IconProps = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={clsx(className)}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};
