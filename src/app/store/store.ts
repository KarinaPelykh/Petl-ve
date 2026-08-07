import { configureStore } from "@reduxjs/toolkit";
import { noticesReducer } from "../../shared/api/redux/notices/slice";
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

type StorageModule = {
  __esModule?: boolean;
  default: Storage;
};

const str =
  typeof storage === "object" &&
  storage !== null &&
  (storage as unknown as StorageModule).__esModule
    ? (storage as unknown as StorageModule).default
    : storage;

const persistConfig = {
  key: "root",
  storage: str,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    notices: noticesReducer,
  },
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
