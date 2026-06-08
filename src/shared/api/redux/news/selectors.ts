import type { RootState } from "../../../../app/store/store";

export const news = (state: RootState) => state.news.items;
