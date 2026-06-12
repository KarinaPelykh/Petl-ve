export type New = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
};

export type State = {
  items: Data<New>;
  isLoading: boolean;
};

//universal
export type Data<T> = {
  page: number;
  perPage: number;
  totalPages: number;
  results: T[];
};
