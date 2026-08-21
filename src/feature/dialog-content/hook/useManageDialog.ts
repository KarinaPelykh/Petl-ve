import { useState } from "react";
import { useNoticeDetails } from "../api/useNoticeDetails";

export type DialogMode = "details" | "favorite" | "edit" | "logout";

export type DialogState = {
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

  const { cardData } = useNoticeDetails(dialogState.id);

  return { dialogState, setDialogState, open, setOpen, cardData };
};
