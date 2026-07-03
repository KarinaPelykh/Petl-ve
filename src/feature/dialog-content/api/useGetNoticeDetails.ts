import { useEffect, useState } from "react";
import { getNotice } from "../../../shared/api/redux/notices/operations";
import type { Notice } from "../../../entities/pet/ui/PetCard";

export const useGetNoticeDetails = (id: string) => {
  const [cardData, setCardData] = useState<Notice | null>(null);

  useEffect(() => {
    async function getInfById() {
      try {
        const data = await getNotice(id);
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getInfById();
  }, [id]);

  return { cardData, setCardData };
};
