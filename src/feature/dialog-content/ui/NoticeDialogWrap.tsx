import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

type NoticeDialogWrapProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  children: ReactNode;
};

export const NoticeDialogWrap = ({
  open,
  setOpen,
  children,
}: NoticeDialogWrapProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {children}
    </Dialog.Root>
  );
};
