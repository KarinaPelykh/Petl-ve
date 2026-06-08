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
  items: New[];
  isLoading: boolean;
};
