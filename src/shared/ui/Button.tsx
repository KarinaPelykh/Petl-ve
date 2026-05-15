import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(" p-3 text-center rounded-ms ", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
