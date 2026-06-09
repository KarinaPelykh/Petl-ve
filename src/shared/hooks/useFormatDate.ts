import { format } from "date-fns/fp";

export const useFormatDate = (date: string) => {
  const dt = new Date(date);
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const dataFormat = format("dd/MM/yyyy")(new Date(year, month, day));
  return dataFormat;
};
