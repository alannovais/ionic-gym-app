import { createSlice } from '@reduxjs/toolkit';
import { IPlan } from '@/interfaces';
import { PlanService } from '@/services';

interface planStore {
  data: IPlan[];
  loading: boolean;
  error: string | null;
}

const initialState: planStore = {
  data: [] as IPlan[],
  loading: false,
  error: null,
};

const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PlanService.getAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PlanService.getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(PlanService.getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default planSlice.reducer;
