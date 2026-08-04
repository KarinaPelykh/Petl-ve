import { createSlice } from "@reduxjs/toolkit";
import {
  addFavorite,
  addPet,
  deleteFavorite,
  deletePet,
  editUser,
  refresh,
  signin,
  signout,
  signup,
} from "./operations";

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

type Pet = {
  birthday: string;
  _id: string;
  imgURL: string;
  name: string;
  sex: string;
  species: string;
  title: string;
};

type User = {
  name: string;
  email: string;
  avatar: string;
  phone: string;
};

type InitialState = {
  user: User;
  token: string;
  pets: Pet[];
  noticesFavorites: Notice[];
  isLoggedIn: boolean;
  isRefresh: boolean;
};

const initialState: InitialState = {
  user: {
    name: "",
    email: "",
    avatar: "",
    phone: "",
  },
  pets: [],
  noticesFavorites: [],
  token: "",
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
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signout.fulfilled, () => initialState)
      .addCase(refresh.pending, (state) => {
        state.isRefresh = true;
      })

      .addCase(refresh.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.noticesFavorites = action.payload.noticesFavorites.map(
          (notice: Notice) => notice._id,
        );
        state.pets = action.payload.pets;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })

      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefresh = false;
        state.isLoggedIn = false;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets = action.payload;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.pets = state.pets.filter((item) => item._id !== action.payload);
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        {
          /* here I add notice to store by myself  ad return an array with ides*/
        }

        state.noticesFavorites = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.noticesFavorites = state.noticesFavorites.filter(
          (id) => id !== action.payload,
        );
      });
  },
});

export const authReducer = authSlice.reducer;
