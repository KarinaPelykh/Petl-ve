import { useState } from "react";

export type DialogMode = "details" | "favorite";

type DialogState = {
  mode: DialogMode;
  id: string;
};

const initState: DialogState = {
  mode: "details",
  id: "",
};

export const useManageDialog = () => {
  const [dialogState, setDialogState] = useState<DialogState>(initState);

  const [open, setOpen] = useState(false);

  return { dialogState, setDialogState, open, setOpen };
};
