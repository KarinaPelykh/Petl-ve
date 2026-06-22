import { Dialog } from "radix-ui";
import { type ReactNode } from "react";
import { Icon } from "./Icon";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 flex h-dvh w-dvw items-center justify-center bg-black/30" />
      <Dialog.Content
        aria-describedby={undefined}
        className="tablet-l:w-118.25 tablet-l:px-18 rounded-ms fixed top-1/2 left-1/2 flex w-83.75 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-white p-10"
      >
        <Dialog.Close className="fixed top-5 right-5 cursor-pointer">
          <Icon name="close" className="size-6 stroke-black" />
        </Dialog.Close>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};
