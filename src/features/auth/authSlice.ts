import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  lastActiveAt: number | null;
}

const initialState: AuthState = {
  token: null,
  lastActiveAt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      AsyncStorage.setItem("token", action.payload ?? "");
    },
    logout: (state) => {
      state.token = null;
      state.lastActiveAt = null;
      AsyncStorage.removeItem("token");
    },
    touch: (state) => {
      state.lastActiveAt = Date.now();
    },
  },
});

export const { setToken, logout, touch } = authSlice.actions;
export default authSlice.reducer;
