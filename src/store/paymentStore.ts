import { createSlice } from '@reduxjs/toolkit';
import { IPayments } from '@/interfaces';
import { PaymentsService } from '@/services';

interface PaymentStore {
  data: IPayments[];
  loading: boolean;
  error: string | null;
}

const initialState: PaymentStore = {
  data: [] as IPayments[],
  loading: false,
  error: null,
};

const PaymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PaymentsService.get.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PaymentsService.get.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(PaymentsService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default PaymentSlice.reducer;
