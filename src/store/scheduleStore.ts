import { createSlice } from '@reduxjs/toolkit';
import { IClass } from '@/interfaces';
import { ClassesGroupService } from '@/services';

interface ScheduleStore {
  data: IClass[];
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleStore = {
  data: [] as IClass[],
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ClassesGroupService.get.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ClassesGroupService.get.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(ClassesGroupService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default scheduleSlice.reducer;
