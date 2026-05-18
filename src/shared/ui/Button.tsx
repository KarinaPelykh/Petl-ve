import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export const Button = ({
  type = "button",
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(" p-3 text-center rounded-ms ", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
