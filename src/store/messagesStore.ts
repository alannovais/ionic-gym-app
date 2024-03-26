import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '@/interfaces';
import { MessageService } from '@/services';

interface MessageStore {
  data: IMessage[];
  loading: boolean;
  countMessages: number;
  readMessages: boolean;
  error: string | null;
}

const initialState: MessageStore = {
  data: [] as IMessage[],
  loading: false,
  countMessages: 0,
  readMessages: false,
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    checkAsReadMessages(state: MessageStore) {
      state.readMessages = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(MessageService.get.pending, (state) => {
        state.loading = true;
      })
      .addCase(MessageService.get.fulfilled, (state, action) => {
        state.data = action.payload;
        state.countMessages = action.payload.length;
        state.loading = false;
      })
      .addCase(MessageService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default messagesSlice.reducer;
