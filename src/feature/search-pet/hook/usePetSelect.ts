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
    async function gedDataForSelect() {
      try {
        const category = getCategory();
        const gender = getGender();
        const specis = getSpecies();
        const [categories, genders, species] = await Promise.all([
          category,
          gender,
          specis,
        ]);

        setSelectData({ categories, genders, species });
      } catch (error) {
        console.log(error);
      }
    }

    gedDataForSelect();
  }, []);

  return { selectData };
};
