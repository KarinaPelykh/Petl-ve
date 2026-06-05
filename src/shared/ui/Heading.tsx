import clsx from "clsx";
import { createElement, type ReactNode } from "react";

const acceptedHeading = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

type HeadingProps = {
  as: keyof typeof acceptedHeading;
  children: ReactNode;
  className?: string;
  variant?: "first" | "second";
};

export const Heading = ({ as, children, className, variant }: HeadingProps) => {
  return createElement(
    acceptedHeading[as],
    {
      className: clsx(
        "text-2xl mb-3 ",
        className,
        variant === "first" && "text-2xl tablet-l:text-6xl",
      ),
    },
    children,
  );
};
