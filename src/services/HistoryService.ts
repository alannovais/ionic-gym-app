import { createAsyncThunk } from '@reduxjs/toolkit';
import { IHistoryDay } from '../interfaces';
import { HisotryMock } from '../mocks/HistoryMock';
import api from './api';

export namespace HistoryService {
  export const get = createAsyncThunk(
    'GET/HISTORY',
    async (): Promise<IHistoryDay[]> => {
      let response = await api.get<IHistoryDay[]>('');
      response.data = HisotryMock;
      return response.data;
    },
  );
}
