import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../../axios";
import type { RootState } from "../../../../app/store/store";

type UserSignup = { name: string; email: string; password: string };

type UserSignin = Pick<UserSignup, "email" | "password">;

type UserRefreshResponse = UserSignup & { token: string };

type AsyncThunkConfig = { state: RootState; rejectWithValue: unknown };

type EditUserParams = Partial<{
  name: string;
  email: string;
  avatar: string;
  phone: string;
}>;

export const signup = createAsyncThunk(
  "auth/signup",
  async (params: UserSignup, thunkAPI) => {
    try {
      const response = await instance.post("users/signup", { ...params });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (params: UserSignin, thunkAPI) => {
    try {
      const response = await instance.post("users/signin", { ...params });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signout = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    await instance.post("users/signout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk<
  UserRefreshResponse,
  void,
  AsyncThunkConfig
>("auth/refresh", async (_, { rejectWithValue, getState }) => {
  const persisted = getState().auth.user.token;

  if (!persisted) {
    return rejectWithValue("None");
  }

  try {
    setToken(persisted);
    const response = await instance.get("users/current/full");
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const editUser = createAsyncThunk(
  "user/edit",
  async (params: EditUserParams, thunkAPI) => {
    try {
      const data = await instance.patch("users/current/edit", { ...params });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
