import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getNews = createAsyncThunk("news/getAll", async (_, thunkAPI) => {
  try {
    const response = await instance.get("news");
    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
