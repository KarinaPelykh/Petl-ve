import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getNotices = createAsyncThunk(
  "notices/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`notices?limit=10`);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
