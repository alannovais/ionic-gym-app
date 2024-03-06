import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { ICompany } from '../interfaces';
import { CompanyMock } from '../mocks/CompanyMock';

export namespace CompanyService {
  export const get = createAsyncThunk('GET/COMPANY', async (id: number) => {
    let response = await api.get<ICompany>(`company/${id}`);
    response.data = CompanyMock;
    return response.data;
  });
}
