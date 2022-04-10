import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import forestMapReducer from "../features/forestMap/forestMapSlice";

export const store = configureStore({
  reducer: {
    forestMap: forestMapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
