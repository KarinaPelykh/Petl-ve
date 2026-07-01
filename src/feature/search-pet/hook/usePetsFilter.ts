import { useState } from "react";
import type { Filter, FilterKey } from "../types/select.type";

const initialState = {
  keyword: "",
  sex: "",
  category: "",
  species: "",
  locationId: "",
  byPrice: false,
  byPopularity: false,
  page: 1,
};

export const usePetsFilter = () => {
  const [filter, setFilter] = useState<Filter>(initialState);

  const onChangeInput = (key: FilterKey, val: Filter[FilterKey]) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  return { filter, onChangeInput };
};
