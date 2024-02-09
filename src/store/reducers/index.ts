import { combineReducers } from '@reduxjs/toolkit';
import { menssagesReducers } from './messagesReducers';
const rootReducer = combineReducers({
  menssages: menssagesReducers,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
