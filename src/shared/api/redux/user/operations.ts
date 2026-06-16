import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";

type Credential = { name: string; email: string; password: string };

export const signup = createAsyncThunk(
  "auth/signup",
  async (params: Credential, thunkAPI) => {
    try {
      const response = await instance.get("users/signup", { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
