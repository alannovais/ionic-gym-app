import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPayments } from '@/interfaces';
import { PaymentsMock } from '@/mocks/PaymentsMock';
import api from './api';

export namespace PaymentsService {
  export const get = createAsyncThunk('GET/PAYMENTS', async () => {
    try {
      let response = await api.get<IPayments[]>('');
      response.data = PaymentsMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  });
}
