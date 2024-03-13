import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage } from '@/interfaces';
import { MessageMock } from '@/mocks/MessageMock';
import api from './api';

export namespace MessageService {
  export const get = createAsyncThunk('GET/MESSAGES', async () => {
    let response = await api.get<IMessage[]>('');
    response.data = MessageMock;
    return response.data;
  });
}
