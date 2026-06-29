import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

type Filter = { page: number } & {
  keyword?: string;
  sex?: string;
  category?: string;
  species?: string;
  locationId?: string;
  byPrice?: boolean;
  byPopularity?: boolean;
};

export const getNotices = createAsyncThunk(
  "notices/getAll",
  async (params: Filter, thunkAPI) => {
    try {
      const response = await instance.get(`notices/`, { params });
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

export const getCategory = createAsyncThunk(
  "category/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("notices/categories");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getGender = createAsyncThunk(
  "gender/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("notices/sex");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getSpecies = createAsyncThunk(
  "species/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("notices/species");

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
