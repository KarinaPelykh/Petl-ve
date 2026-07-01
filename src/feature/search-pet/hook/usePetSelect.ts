import { useEffect, useState } from "react";
import {
  getCategory,
  getGender,
  getSpecies,
} from "../../../shared/api/redux/notices/operations";

export const usePetSelect = () => {
  const [selectData, setSelectData] = useState({
    categories: [],
    genders: [],
    species: [],
  });

  useEffect(() => {
    async function getDataForSelect() {
      try {
        const [categories, genders, species] = await Promise.all([
          getCategory(),
          getGender(),
          getSpecies(),
        ]);

        setSelectData({ categories, genders, species });
      } catch (error) {
        console.log(error);
      }
    }

    getDataForSelect();
  }, []);

  return selectData;
};
