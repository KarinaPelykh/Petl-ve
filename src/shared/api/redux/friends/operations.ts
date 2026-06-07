import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

export const getFriends = createAsyncThunk(
  "friends/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("friends/");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
