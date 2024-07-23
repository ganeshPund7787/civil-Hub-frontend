import { ClientType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientState {
  Client: ClientType | any;
  Clientloading: boolean;
}

const initialState: ClientState = {
  Client: localStorage.getItem("client")
    ? JSON.parse(localStorage.getItem("client") as string)
    : null,
  Clientloading: false,
};

export const ClientSlice = createSlice({
  name: "Client",
  initialState,
  reducers: {
    fetchStartClient: (state) => {
      state.Clientloading = true;
    },
    fetchFailClient: (state) => {
      state.Clientloading = false;
    },
    fetchSuccessClient: (state, action: PayloadAction<ClientType>) => {
      state.Clientloading = false;
      state.Client = action.payload;
      localStorage.setItem("client", JSON.stringify(action.payload));
    },
  },
});

export const { fetchFailClient, fetchStartClient, fetchSuccessClient } =
  ClientSlice.actions;
export default ClientSlice.reducer;
