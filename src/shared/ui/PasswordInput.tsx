import type { ComponentProps } from "react";
import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { Input } from "./Form";
import { Icon } from "./Icon";

type PasswordInputProps = ComponentProps<"input"> & {};

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const { isOpen, toggle } = useToggle();

  return (
    <div className="relative">
      <Input type={isOpen ? "text" : "password"} {...props} />
      <Button
        onClick={toggle}
        className=" absolute right-3 top-1/2 -translate-y-1/2 p-0!"
      >
        <Icon name={isOpen ? "eye" : "closed-eye"} className="size-[16.5px]" />
      </Button>
    </div>
  );
};
