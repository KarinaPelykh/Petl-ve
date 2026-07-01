import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";
import type { Filter } from "../../../../feature/search-pet/types/select.type";

type Params = { page: number; locationId?: string } & Filter;

export const getNotices = createAsyncThunk(
  "notices/getAll",
  async (params: Params, thunkAPI) => {
    try {
      const response = await instance.get(`notices/`, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addFavorite = createAsyncThunk(
  "notices/addFavorite",
  async (id: string, thunkAPI) => {
    try {
      const response = await instance.post(`notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  "notices/deleteFav",
  async (id: string, thunkAPI) => {
    try {
      const response = await instance.delete(`notices/favorites/remove/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
