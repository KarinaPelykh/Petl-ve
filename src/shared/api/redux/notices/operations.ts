import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

type Filter = { page: number } & {
  keyword?: string;
  sex?: string;
  category?: string;
  species?: string;
  locationId?: string;
};

export const getNotices = createAsyncThunk(
  "notices/getAll",
  async (params: Filter, thunkAPI) => {
    try {
      const response = await instance.get(`notices/?$`, { params });
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

// export const getCities = createAsyncThunk(
//   "cities/getAll",
//   async ({ keyword }: { keyword?: string }, thunkAPI) => {
//     try {
//       const response = await instance.get(`cities/?keyword=${keyword}`);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );
