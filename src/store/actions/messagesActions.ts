import { createAction } from '@reduxjs/toolkit';
import { IMessage } from '../../interfaces';

export namespace MessageAction {
  export const loadMessages = createAction('LOAD_MESSAGES');
  export const successLoadMessage = createAction(
    'SUCCESS_MESSAGES',
    (data: IMessage[]) => {
      return { payload: data };
    },
  );
  export const errorLoadMessage = createAction('ERROR_MESSAGES');
}
