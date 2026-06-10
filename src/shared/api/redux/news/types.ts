export type New = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
};
export type Data = {
  page: number;
  perPage: number;
  totalPages: number;
  results: New[];
};

export type State = {
  items: Data;
  isLoading: boolean;
};
