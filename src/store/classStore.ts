import { createSlice } from '@reduxjs/toolkit';
import { IClass } from '../interfaces';
import { ClassesGroupService } from '../services';

interface ClassStore {
  data: IClass[];
  loading: boolean;
  error: string | null;
}

const initialState: ClassStore = {
  data: [] as IClass[],
  loading: false,
  error: null,
};

const ClassSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ClassesGroupService.listClasses.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ClassesGroupService.listClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(ClassesGroupService.listClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default ClassSlice.reducer;
