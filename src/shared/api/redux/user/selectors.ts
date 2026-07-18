import type { RootState } from "../../../../app/store/store";

export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const auth = (state: RootState) => state.auth;

export const isRefresh = (state: RootState) => state.auth.isRefresh;
export const pets = (state: RootState) => state.auth.user.pets;
