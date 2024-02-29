import { createSlice } from '@reduxjs/toolkit';
import { ClassesGroupService } from '../services';
import { IClass } from '../interfaces';

interface BookedStore {
  data: IClass[];
  loading: Boolean;
  error: string | null;
}

const initialState: BookedStore = {
  data: [] as IClass[],
  loading: false,
  error: null,
};

const bookedSlice = createSlice({
  name: 'booked',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(ClassesGroupService.booked.pending, (state) => {
        state.loading = true;
      })
      .addCase(ClassesGroupService.booked.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(ClassesGroupService.booked.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default bookedSlice.reducer;
