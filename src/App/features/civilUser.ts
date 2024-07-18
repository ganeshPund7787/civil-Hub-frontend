import { CivilUserType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonState {
  CurrentCivilUser: CivilUserType | any;
  loading: boolean;
}

const initialState: PersonState = {
  CurrentCivilUser: localStorage.getItem("CurrentCivilUser")
    ? JSON.parse(localStorage.getItem("CurrentCivilUser") as string)
    : null,
  loading: false,
};

export const civilUserSlice = createSlice({
  name: "civilUser",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchFail: (state) => {
      state.loading = false;
    },
    fetchSuccess: (state, action: PayloadAction<CivilUserType>) => {
      state.loading = false;
      state.CurrentCivilUser = action.payload;
      localStorage.setItem("CurrentCivilUser", JSON.stringify(action.payload));
    },
    updateFail: (state) => {
      state.loading = false;
    },
    updateSuccess: (state, action: PayloadAction<CivilUserType>) => {
      state.loading = false;
      state.CurrentCivilUser = action.payload;
      localStorage.setItem("CurrentCivilUser", JSON.stringify(action.payload));
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  fetchSuccess,
  updateFail,
  updateSuccess,
} = civilUserSlice.actions;
export default civilUserSlice.reducer;
