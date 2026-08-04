import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../../axios";
import type { RootState } from "../../../../app/store/store";
import type { Signin } from "../../../../feature/login/model/contract";
import type { Signup } from "../../../../feature/register/model/contract";

type UserSignup = Omit<Signup, "confirmPassword">;

type UserRefreshResponse = UserSignup & { token: string };

type AsyncThunkConfig = { state: RootState; rejectWithValue: unknown };

type EditUserParams = Partial<{
  name: string;
  email: string;
  avatar: string | File;
  phone: string;
}>;

type AddPetParams = {
  title: string;
  name: string;
  avatar: string | File;
  species: string;
  birthday: string;
  sex: string;
};

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
  async (params: Signin, thunkAPI) => {
    try {
      const { data } = await instance.post("users/signin", { ...params });

      setToken(data.token);
      return data;
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
  const persisted = getState().auth.token;

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

export const addPet = createAsyncThunk(
  "users/addPet",
  async (params: AddPetParams, thunkAPI) => {
    try {
      const response = await instance.post(`/users/current/pets/add`, {
        ...params,
      });
      return response.data.pets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deletePet = createAsyncThunk(
  "users/deletePet",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/users/current/pets/remove/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addFavorite = createAsyncThunk(
  "notices/addFavorite",
  async (id: string, thunkAPI) => {
    try {
      const response = await instance.post(`notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  "notices/deleteFav",
  async (id: string, thunkAPI) => {
    try {
      await instance.delete(`notices/favorites/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
