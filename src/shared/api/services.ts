import { instance } from "./axios";

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
// Friends
export const getFriends = async () => {
  const response = await instance.get("friends/");
  return response.data;
};
