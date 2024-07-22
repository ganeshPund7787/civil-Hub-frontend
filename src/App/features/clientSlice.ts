import { ClientType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ClientState {
  Client: ClientType | any;
  loading: boolean;
}

const initialState: ClientState = {
  Client: localStorage.getItem("client")
    ? JSON.parse(localStorage.getItem("client") as string)
    : null,
  loading: false,
};

export const ClientSlice = createSlice({
  name: "Client",
  initialState,
  reducers: {},
});

export const {} = ClientSlice.actions;
export default ClientSlice.reducer;
