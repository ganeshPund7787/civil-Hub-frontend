import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConversationState {
  selectedConversation: null | string;
  messages: string[];
}

const initialState: ConversationState = {
  selectedConversation: null,
  messages: [],
};

export const ConversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setSelectedConversation: (state, action: PayloadAction<string>) => {
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action: PayloadAction<string[] | []>) => {
      state.messages = action.payload;
    },
  },
});

export const { setSelectedConversation, setMessages } =
  ConversationSlice.actions;

export default ConversationSlice.reducer;
