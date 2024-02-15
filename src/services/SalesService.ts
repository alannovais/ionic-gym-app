import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISaleItems } from '../interfaces';
import { SalesMock } from '../mocks/SalesMock';
import api from './api';

export namespace SalesService {
  export const get = createAsyncThunk('GET/SALES', async () => {
    let response = await api.get<ISaleItems[]>('');
    response.data = SalesMock;
    return response.data;
  });
}
