import { configureStore } from "@reduxjs/toolkit";
import { reqresApi } from "../../features/api/reqresApi";
import authReducer from "../../features/auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [reqresApi.reducerPath]: reqresApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(reqresApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
