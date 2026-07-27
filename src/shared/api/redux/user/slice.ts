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

type InitialState = {
  user: {
    name: string;
    email: string;
    avatar: string;
    phone: string;
    token: null;
    pets: Pet[];
    noticesFavorites: Notice[];
  };
  isLoggedIn: boolean;
  isRefresh: boolean;
};

const initialState: InitialState = {
  user: {
    name: "",
    email: "",
    avatar: "",
    phone: "",
    token: null,
    pets: [],
    noticesFavorites: [],
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
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        {
          /* here I get notices to store   ad return an array with objects*/
        }

        state.user = {
          ...action.payload,
          noticesFavorites: action.payload.noticesFavorites.map(
            (notice: Notice) => notice._id,
          ),
        };
        console.log(state.user);

        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefresh = false;
        state.isLoggedIn = false;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.user.pets = action.payload;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.user.pets = state.user.pets.filter(
          (item) => item._id !== action.payload,
        );
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        {
          /* here I add notice to store by myself  ad return an array with ides*/
        }
        console.log(action.payload);

        state.user.noticesFavorites = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.user.noticesFavorites = state.user.noticesFavorites.filter(
          (item) => item !== action.payload,
        );
      });
  },
});

export const authReducer = authSlice.reducer;
