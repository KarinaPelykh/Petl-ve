import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getNews = createAsyncThunk(
  "news/getAll",
  async (
    { page = 1, search = "" }: { page: number; search?: string },
    thunkAPI,
  ) => {
    try {
      const response = await instance.get(
        `news?page=${page}&keyword=${search}`,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
