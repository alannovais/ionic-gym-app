import { createSlice } from '@reduxjs/toolkit';
import { ITeacher } from '../interfaces';
import { TeacherService } from '../services';

interface TeacherStore {
  data: ITeacher[];
  loading: boolean;
  error: string | null;
}

const initialState: TeacherStore = {
  data: [] as ITeacher[],
  loading: false,
  error: null,
};

const TeacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TeacherService.get.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(TeacherService.get.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(TeacherService.get.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default TeacherSlice.reducer;
