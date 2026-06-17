import axios from "axios";

export const instance = axios.create({
  baseURL: "https://petlove.b.goit.study/api/",
});

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};
