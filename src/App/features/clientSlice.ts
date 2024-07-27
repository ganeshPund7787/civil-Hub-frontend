import { ClientType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientState {
  Client: ClientType | any;
  Clientloading: boolean;
  isUpdate: boolean;
}

const initialState: ClientState = {
  Client: localStorage.getItem("client")
    ? JSON.parse(localStorage.getItem("client") as string)
    : null,
  Clientloading: false,
  isUpdate: false,
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
    updateStartClient: (state) => {
      state.isUpdate = true;
    },
    updateFailClient: (state) => {
      state.Clientloading = false;
      state.isUpdate = false;
    },
    updateSuccessClient: (state, action: PayloadAction<ClientType>) => {
      state.Clientloading = false;
      state.Client = action.payload;
      state.isUpdate = false;
      localStorage.setItem("client", JSON.stringify(action.payload));
    },
    logOutClient: (state) => {
      state.Clientloading = false;
      state.Client = null;
      localStorage.clear();
    },
  },
});

export const {
  fetchFailClient,
  fetchStartClient,
  fetchSuccessClient,
  updateStartClient,
  updateFailClient,
  updateSuccessClient,
  logOutClient,
} = ClientSlice.actions;
export default ClientSlice.reducer;
