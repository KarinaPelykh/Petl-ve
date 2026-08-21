import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services";
import type { Filter } from "../../../../feature/search-pet/types/select.type";

type Params = Partial<Filter>;

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
