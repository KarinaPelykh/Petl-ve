import { useState } from "react";
import type { Filter, FilterKey } from "../types/select.type";
import { useGetFilteredNotices } from "../api/useGetFilteredNotices";

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
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  useGetFilteredNotices(filter);

  return { filter, onChangeInput, setFilter, initialState };
};
export type PetFilterControl = ReturnType<typeof usePetsFilter>;
