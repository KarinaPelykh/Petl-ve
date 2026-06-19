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
      <Dialog.Content className="tablet-l:w-[473px] tablet-l:px-[72px] rounded-ms fixed top-1/2 left-1/2 flex w-[335px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-white px-5 py-10">
        <Dialog.Close className="fixed top-5 right-5 cursor-pointer">
          <Icon name="close" className="size-6 stroke-black" />
        </Dialog.Close>
        <Dialog.Title />
        <Dialog.Description />
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};
