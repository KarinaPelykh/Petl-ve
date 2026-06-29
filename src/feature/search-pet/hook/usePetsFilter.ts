import { useState } from "react";
import type { Option } from "../types/select.type";

type Filter = {
  keyword: string;
  sex: string;
  category: string;
  species: string;
  location: Option | null;
  byPrice: boolean;
  byPopularity: boolean;
};

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

  const onChangeInput = <K extends keyof Filter>(val: Filter[K], key: K) => {
    setFilter((prev) => ({ ...prev, [key]: val }));
  };

  return { filter, onChangeInput };
};
