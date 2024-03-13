import { createSlice } from '@reduxjs/toolkit';
import { IHistoryDay } from '@/interfaces';
import { HistoryService } from '@/services';

interface HistoryStore {
  data: IHistoryDay[];
  loading: boolean;
  error: string | null;
}

const initialState: HistoryStore = {
  data: [] as IHistoryDay[],
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(HistoryService.get.pending, (state) => {
        state.loading = true;;
      })
      .addCase(HistoryService.get.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(HistoryService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default historySlice.reducer;
