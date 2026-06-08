import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getNews } from "./operations";
import type { State } from "./types";

const initialState: State = {
  items: [],
  isLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNews.fulfilled, (state, action: PayloadAction<[]>) => {
      state.items = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;
