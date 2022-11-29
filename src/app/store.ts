import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import countriesReducer from "./../redux/countriesSlice";
import React from "react";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
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
