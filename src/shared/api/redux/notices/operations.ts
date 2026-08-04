import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../axios";
import type { Filter } from "../../../../feature/search-pet/types/select.type";

type Params = Partial<Filter> & { limit?: number };

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
