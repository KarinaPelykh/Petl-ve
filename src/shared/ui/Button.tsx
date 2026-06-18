import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "tertiary";
};

export const Button = ({
  type = "button",
  children,
  className,
  onClick,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        "rounded-ms group cursor-pointer p-3 text-center transition-all duration-500 ease-out",
        className,
        variant === "primary" && "bg-yellow primary text-white",
        variant === "secondary" && "bg-cream text-yellow",

        variant === "tertiary",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
