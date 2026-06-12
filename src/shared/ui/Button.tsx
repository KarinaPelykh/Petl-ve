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
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        "rounded-ms group cursor-pointer p-3 text-center transition-all duration-500 ease-out",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
