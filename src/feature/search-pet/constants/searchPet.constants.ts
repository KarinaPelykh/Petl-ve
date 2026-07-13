export type FilterKey = "byPopularity" | "byPrice";

type Data = { label: string; value: boolean };

export const priceOption: Data[] = [
  { label: "Cheap", value: false },
  { label: "Expensive", value: true },
];

export const popularOption: Data[] = [
  { label: "Popular", value: true },
  { label: "Unpopular", value: false },
];
