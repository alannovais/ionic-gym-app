import { createSlice } from '@reduxjs/toolkit';
import { IPlan } from '../interfaces';
import { WorkoutService } from '../services';

interface workoutStore {
  data: IPlan;
  loading: boolean;
  error: string | null;
}

const initialState: workoutStore = {
  data: {} as IPlan,
  loading: false,
  error: null,
};

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(WorkoutService.getWorkoutDay.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(WorkoutService.getWorkoutDay.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(WorkoutService.getWorkoutDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default workoutSlice.reducer;
