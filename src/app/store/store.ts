import { configureStore } from "@reduxjs/toolkit";
import { noticesReducer } from "../../shared/api/redux/notices/slice";
import { friendsReducer } from "../../shared/api/redux/friends/slice";
import { newsReducer } from "../../shared/api/redux/news/slice";
import { authReducer } from "../../shared/api/redux/user/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notices: noticesReducer,
    friends: friendsReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
