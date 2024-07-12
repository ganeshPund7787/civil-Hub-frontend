import { configureStore } from "@reduxjs/toolkit";
import { civilUserSlice } from "../App/features/civilUser";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: civilUserSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelectore: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
