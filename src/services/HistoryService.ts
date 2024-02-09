import axios from 'axios';
import { IHistoryDay } from '../interfaces';
import { HisotryMock } from '../mocks/HistoryMock';

export namespace HistoryService {
  export const getHistory = async (): Promise<IHistoryDay[]> => {
    try {
      let response = await axios.get<IHistoryDay[]>('');
      response.data = HisotryMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
