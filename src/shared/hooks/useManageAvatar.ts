import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";

type useManageAvatar = {
  form: UseFormReturn;
};

export const useManageAvatar = ({ form }: useManageAvatar) => {
  const avatarFile = form.watch("avatarFile");
  const avatarUrl = form.watch("avatarUrl");

  useEffect(() => {
    if (avatarFile) {
      form.setValue("avatarUrl", "");
    }
  }, [form, avatarFile]);

  useEffect(() => {
    if (avatarUrl) {
      form.setValue("avatarFile", undefined);
    }
  }, [form, avatarUrl]);
};
