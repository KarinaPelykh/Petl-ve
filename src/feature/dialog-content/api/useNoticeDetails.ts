import { useEffect, useState } from "react";
import { getNotice } from "../../../shared/api/services";
import type { Notice } from "../../../shared/api/redux/types";
import { toastNotification } from "../../../shared/api/lib/toast";

export const useNoticeDetails = (id: string) => {
  const [cardData, setCardData] = useState<Notice | null>(null);

  useEffect(() => {
    async function getInfById() {
      try {
        setCardData(null);
        const data = await getNotice(id);
        setCardData(data);
      } catch (error) {
        toastNotification("error", "Try again");
        console.log(error);
      }
    }

    getInfById();
  }, [id]);

  return { cardData, setCardData };
};
