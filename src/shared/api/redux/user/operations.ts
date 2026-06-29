import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../../axios";

type Credential = { name: string; email: string; password: string };
type Signin = Pick<Credential, "email" | "password">;

export const signup = createAsyncThunk(
  "auth/signup",
  async (params: Credential, thunkAPI) => {
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
  async (params: Signin, thunkAPI) => {
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

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
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
  },
);
