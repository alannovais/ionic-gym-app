import { createReducer } from '@reduxjs/toolkit';
import { IMessage } from '../../interfaces';
import { MessageAction } from '../actions/MessagesActions';

const initialState: IMessage[] = [] as IMessage[];

export const menssagesReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(MessageAction.loadMessages, (state, action) => {
      return;
    })
    .addCase(MessageAction.successLoadMessage, (state, action) => {
      return action.payload;
    })
    .addCase(MessageAction.errorLoadMessage, (state, action) => {
      return state;
    });
});
