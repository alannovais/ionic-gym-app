import { combineReducers } from '@reduxjs/toolkit';
import ClassReducer from './classStore';
import HistoryReducer from './historyStore';
import MessageReducer from './messagesStore';
import PlanReducer from './planStore';
import ScheduleReducer from './scheduleStore';
import TeacherReducer from './teacherStore';
import WorkoutReducer from './workoutStore';
import PaymentReducer from './paymentStore';
import SalesReducer from './shoppingStore';
import UserReducer from './userStore';
import BookedReducer from './bookedStore';
import companyReducer from './companyStore';

const rootReducer = combineReducers({
  messages: MessageReducer,
  history: HistoryReducer,
  plans: PlanReducer,
  workouts: WorkoutReducer,
  groupClasses: ScheduleReducer,
  classes: ClassReducer,
  teachers: TeacherReducer,
  payments: PaymentReducer,
  sales: SalesReducer,
  user: UserReducer,
  bookedClasses: BookedReducer,
  company: companyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
