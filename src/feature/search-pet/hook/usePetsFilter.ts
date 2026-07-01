import { useState } from "react";
import type { Filter } from "../types/select.type";

const initialState = {
  keyword: "",
  sex: "",
  category: "",
  species: "",
  location: null,
  byPrice: false,
  byPopularity: false,
};

export const usePetsFilter = () => {
  const [filter, setFilter] = useState<Filter>(initialState);
  console.log(filter);

  const onChangeInput = <K extends keyof Filter>(val: Filter[K], key: K) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  return { filter, onChangeInput };
};
