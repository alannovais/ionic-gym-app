import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlan } from '@/interfaces';
import { WorkoutDayMock } from '@/mocks/WorkoutDayMock';
import api from './api';

export namespace PlanService {
  export const getAll = createAsyncThunk('PLAN/GET_ALL', async () => {
    const response = await api.get<IPlan, any>('');
    return (response.data = WorkoutDayMock);
  });
}
