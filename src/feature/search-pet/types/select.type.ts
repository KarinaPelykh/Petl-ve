export type Option = {
  locationId: string;
  value: string;
  label: string;
};

export type Filter = {
  keyword: string;
  sex: string;
  category: string;
  species: string;
  locationId: string;
  byPrice: boolean;
  byPopularity: boolean;
  page?: number;
};

export type FilterKey = keyof Filter;

export type LocationResponse = {
  cityEn: string;
  stateEn: string;
  _id: string;
};
