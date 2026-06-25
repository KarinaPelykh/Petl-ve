import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { noticesReducer } from "../../shared/api/redux/notices/slice";
import { friendsReducer } from "../../shared/api/redux/friends/slice";
import { newsReducer } from "../../shared/api/redux/news/slice";
import { authReducer } from "../../shared/api/redux/user/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const str =
  typeof storage === "object" && storage !== null && storage.__esModule
    ? storage.default
    : storage;

const persistConfig = {
  key: "root",
  storage: str,
  whitelist: ["auth", "notices", "news", "friends"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  notices: noticesReducer,
  friends: friendsReducer,
  news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
