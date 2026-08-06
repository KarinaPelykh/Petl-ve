export type Notice = {
  _id: string;
  name: string;
  imgURL: string;
  title: string;
  popularity?: number;
  comment: string;
  birthday: string;
  sex: string;
  species: string;
  category?: string;
};

export type Pet = {
  birthday: string;
  _id: string;
  imgURL: string;
  name: string;
  sex: string;
  species: string;
  title: string;
};
