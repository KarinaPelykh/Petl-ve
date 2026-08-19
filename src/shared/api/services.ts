import axios from "axios";

type NewsProps = {
  page: number;
  search?: string;
};

export const instance = axios.create({
  baseURL: "https://petlove.b.goit.study/api/",
});

//auth
export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
//aut

// notices
export const getNotice = async (id: string) => {
  const response = await instance.get(`notices/${id}`);

  return response.data;
};

export const getCategory = async () => {
  const response = await instance.get("notices/categories");

  return response.data;
};

export const getGender = async () => {
  const response = await instance.get("notices/sex");

  return response.data;
};

export const getSpecies = async () => {
  const response = await instance.get("notices/species");

  return response.data;
};

export const getLocations = async () => {
  const response = await instance.get("/cities/locations");

  return response.data;
};
// notices

// Friends
export const getFriends = async () => {
  const response = await instance.get("friends/");
  return response.data;
};
// news
export const getNews = async ({ page, search = "" }: NewsProps) => {
  const response = await instance.get(`news?page=${page}&keyword=${search}`);

  return response.data;
};
