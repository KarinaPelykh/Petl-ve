import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    token: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
