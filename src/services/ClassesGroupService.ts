import axios from 'axios';
import { IClass, IGroupClass } from '../interfaces';
import { ClassesMock } from '../mocks/GroupClassMock';

export namespace ClassesGroupService {
  export const getClasses = async (): Promise<IGroupClass[]> => {
    try {
      let response = await axios.get<IGroupClass[]>('');
      response.data = ClassesMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const listClasses = async (): Promise<IClass[]> => {
    try {
      let response = await axios.get<IClass[]>('');
      response.data = ClassesMock.filter((e) => ({
        id: e.id,
        name: e.name,
      }));
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
