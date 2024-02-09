import axios from 'axios';
import { SalesMock } from '../mocks/SalesMock';
import { ISaleItems } from '../interfaces';

export namespace SalesService {
  export const getItems = async (): Promise<ISaleItems[]> => {
    try {
      let response = await axios.get<ISaleItems[]>('');
      response.data = SalesMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
