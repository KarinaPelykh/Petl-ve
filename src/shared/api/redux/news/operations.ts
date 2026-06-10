import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getNews = createAsyncThunk(
  "news/getAll",
  async (page, thunkAPI) => {
    try {
      const response = await instance.get(`news?page=${page}`);
      console.log(page);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
