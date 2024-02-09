import axios from 'axios';
import { IMessage } from '../interfaces';
import { MessageMock } from '../mocks/MessageMock';

export namespace MessageService {
  export const getMessages = async (): Promise<IMessage[]> => {
    try {
      let response = await axios.get<IMessage[]>('');
      response.data = MessageMock;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
