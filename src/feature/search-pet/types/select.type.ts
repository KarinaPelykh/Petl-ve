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
  location?: Option | null;
  byPrice: boolean;
  byPopularity: boolean;
};

export type LocationResponse = {
  cityEn: string;
  stateEn: string;
  _id: string;
};
