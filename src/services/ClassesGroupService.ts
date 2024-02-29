import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBookedClass, IClass } from '../interfaces';
import { ClassesMock } from '../mocks/GroupClassMock';
import { BookedMock } from '../mocks/BookedMock';
import api from './api';

export namespace ClassesGroupService {
  export const get = createAsyncThunk('GET/CLASSES', async () => {
    let response = await api.get<IClass[]>('');
    response.data = ClassesMock;
    return response.data;
  });

  export const listClasses = createAsyncThunk('GET/LIST_CLASSES', async () => {
    let response = await api.get<IClass[]>('');
    response.data = ClassesMock.filter((e) => ({
      id: e.id,
      name: e.name,
    }));
    return response.data;
  });

  export const booked = createAsyncThunk(
    'BOOKED/CLASSES',
    async (alunoId: number) => {
      let response = await api.get<IClass[]>(`${alunoId}`);
      response.data = BookedMock;
      return response.data;
    },
  );
}
