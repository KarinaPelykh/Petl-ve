import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getNotices = createAsyncThunk(
  "notices/getAll",
  async ({ page = 1 }: { page: number }, thunkAPI) => {
    try {
      const response = await instance.get(`notices/?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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

export const getCities = createAsyncThunk(
  "cities/getAll",
  async ({ keyword }: { keyword?: string }, thunkAPI) => {
    try {
      const response = await instance.get(`cities/?keyword=${keyword}`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
