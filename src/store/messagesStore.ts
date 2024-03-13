import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '@/interfaces';
import { MessageService } from '@/services';

interface MessageStore {
  data: IMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: MessageStore = {
  data: [] as IMessage[],
  loading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(MessageService.get.pending, (state) => {
        state.loading = true;
      })
      .addCase(MessageService.get.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(MessageService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default messagesSlice.reducer;
