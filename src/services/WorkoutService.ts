import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlan } from '../interfaces';
import { WorkoutDayMock } from '../mocks/WorkoutDayMock';
import api from './api';

export namespace WorkoutService {
  export const getWorkoutDay = createAsyncThunk(
    'WORKOUT/GET_BY_ID',
    async (id: number) => {
      const response = await api.get<IPlan, any>('');
      response.data = WorkoutDayMock.find((element) => {
        if (element?.id === Number(id)) return element;
      });
      return response.data;
    },
  );
}
