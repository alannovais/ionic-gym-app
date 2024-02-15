import { createSlice } from '@reduxjs/toolkit';
import { ISaleItems } from '../interfaces';
import { SalesService } from '../services';

interface ShoppingStore {
  data: ISaleItems[];
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingStore = {
  data: [] as ISaleItems[],
  loading: false,
  error: null,
};

const ShoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SalesService.get.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SalesService.get.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(SalesService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default ShoppingSlice.reducer;
