import type { RootState } from "../../../../app/store/store";

export const notices = (state: RootState) => state.notices.notices;
export const category = (state: RootState) => state.notices.categories;
export const species = (state: RootState) => state.notices.species;
export const gender = (state: RootState) => state.notices.gender;
export const favorite = (state: RootState) => state.notices.favorite;
