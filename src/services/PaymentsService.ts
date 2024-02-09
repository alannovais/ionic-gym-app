import axios from 'axios';
import { IPayments } from '../interfaces';
import { PaymentsMock } from '../mocks/PaymentsMock';

export namespace PaymentsService {
  export const getPayments = async (): Promise<IPayments[]> => {
    try {
      let response = await axios.get<IPayments[]>('');
      response.data = PaymentsMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
