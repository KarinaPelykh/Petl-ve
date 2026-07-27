import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getNotices } from "./operations";
import type { Data } from "../news/types";

export type Notice = {
  _id: string;
  name: string;
  imgURL: string;
  title: string;
  popularity: number;
  comment: string;
  birthday: string;
  sex: string;
  species: string;
  category: string;
};

type State = {
  notices: Data<Notice>;
  isLoading: boolean;
};

const initialState: State = {
  notices: {
    page: 0,
    perPage: 0,
    totalPages: 0,
    results: [],
  },

  isLoading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getNotices.fulfilled,
      (state, action: PayloadAction<State["notices"]>) => {
        state.notices = action.payload;
      },
    );
  },
});

export const noticesReducer = noticesSlice.reducer;
