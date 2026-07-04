type FilterKey = "byPopularity" | "byPrice";

type Data = { name: string; value: boolean; key: FilterKey };

export const checkboxes: Data[] = [
  { key: "byPrice", name: "Cheap", value: false },
  { key: "byPrice", name: "Expensive", value: true },
  { key: "byPopularity", name: "Popular", value: true },
  { key: "byPopularity", name: "Unpopular", value: false },
];
