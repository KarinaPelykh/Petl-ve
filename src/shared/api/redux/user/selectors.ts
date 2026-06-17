import type { RootState } from "../../../../app/store/store";

export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const auth = (state: RootState) => state.auth;
