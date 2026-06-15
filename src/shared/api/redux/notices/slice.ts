import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getCategory, getGender, getNotices, getSpecies } from "./operations";
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
  categories: [];
  gender: [];
  species: [];
  isLoading: boolean;
};

const initialState: State = {
  notices: {
    page: 0,
    perPage: 0,
    totalPages: 0,
    results: [],
  },
  // cities:[],
  categories: [],
  gender: [],
  species: [],
  isLoading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getNotices.fulfilled,
        (state, action: PayloadAction<State["notices"]>) => {
          state.notices = action.payload;
        },
      )
      .addCase(getCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getGender.fulfilled, (state, action) => {
        state.gender = action.payload;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
      });
    // .addCase(getCities.fulfilled, (state, action) => {
    //   state.cities = action.payload;
    // });
  },
});

export const noticesReducer = noticesSlice.reducer;
