import { createSlice } from "@reduxjs/toolkit";
import { refresh, signin, signout, signup } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    token: null,
  },
  isLoggedIn: false,

  isRefresh: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
      })
      .addCase(signout.fulfilled, (state) => {
        state.user = { name: "", email: "", token: null };
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefresh = true;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefresh = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
