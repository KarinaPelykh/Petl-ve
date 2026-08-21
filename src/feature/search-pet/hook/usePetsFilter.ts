import { useState } from "react";
import type { Filter, FilterKey } from "../types/select.type";
import { useGetFilteredNotices } from "../api/useGetFilteredNotices";

import { popularOption, priceOption } from "../constants/searchPet.constants";

const initialState = {
  keyword: "",
  sex: "",
  category: "",
  species: "",
  locationId: "",
  byPrice: null,
  byPopularity: null,
  page: 1,
};

export const usePetsFilter = () => {
  const [filter, setFilter] = useState<Filter>(initialState);

  const onChangeInput = (key: FilterKey, val: Filter[FilterKey]) => {
    const rbdBtn =
      key === "byPopularity" ? popularOption : key === "byPrice" && priceOption;
    //TO-DO: solve this issue, it doesn't work properly.
    if (rbdBtn) {
      const res = rbdBtn.find((item) => Object.keys(item)[0] === val);
      setFilter((prev) => ({
        ...prev,
        [key]: res ? Object.values(res)[0] : val,
      }));
    } else {
      setFilter((prev) => ({ ...prev, [key]: val }));
    }
  };

  useGetFilteredNotices(filter);

  return { filter, onChangeInput, setFilter, initialState };
};
export type PetFilterControl = ReturnType<typeof usePetsFilter>;
