import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./operations";

const friendsSlice = createSlice({
  name: "friends",
  initialState: { item: [], isLoading: false },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export const friendsReducer = friendsSlice.reducer;
