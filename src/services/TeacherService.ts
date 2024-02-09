import axios from 'axios';
import { ITeacher } from '../interfaces';
import { TeachersMock } from '../mocks/TeachersMock';

export namespace TeacherService {
  export const getTeachers = async (): Promise<ITeacher[]> => {
    try {
      let response = await axios.get<ITeacher[]>('');
      response.data = TeachersMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
