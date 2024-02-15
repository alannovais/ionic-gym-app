import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITeacher } from '../interfaces';
import { TeachersMock } from '../mocks/TeachersMock';
import api from './api';

export namespace TeacherService {
  export const get = createAsyncThunk('GET/TEACHERS', async () => {
    let response = await api.get<ITeacher[]>('');
    response.data = TeachersMock;
    return response.data;
  });
}
