import type { ComponentProps } from "react";
import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { Input } from "./Form";
import { Icon } from "./Icon";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type PasswordInputProps = ComponentProps<"input"> & {};

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const { isOpen, toggle } = useToggle();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative">
      <Input type={isOpen ? "text" : "password"} {...props} />
      <Button
        onClick={toggle}
        className="absolute top-1/2 right-3 -translate-y-1/2 p-0!"
      >
        <Icon
          name={isOpen ? "eye" : "closed-eye"}
          className={clsx(
            "size-[16.5px]",
            errors[props?.name]?.message ? "stroke-red" : "stroke-yellow",
          )}
        />
      </Button>
    </div>
  );
};
