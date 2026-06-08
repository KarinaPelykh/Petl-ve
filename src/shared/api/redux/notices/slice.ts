import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getNotices } from "./operations";

type Notice = {
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
  notices: Notice[];
  isLoading: boolean;
};

const initialState: State = {
  notices: [],
  isLoading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getNotices.fulfilled,
      (state, action: PayloadAction<Notice[]>) => {
        state.notices = action.payload;
      },
    );
  },
});

export const noticesReducer = noticesSlice.reducer;
