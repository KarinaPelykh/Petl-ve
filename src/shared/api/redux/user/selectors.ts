import type { RootState } from "../../../../app/store/store";

export const isRefresh = (state: RootState) => state.auth.isRefresh;
export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const auth = (state: RootState) => state.auth;

export const pets = (state: RootState) => state.auth.pets;
export const favorite = (state: RootState) => state.auth.noticesFavorites;
