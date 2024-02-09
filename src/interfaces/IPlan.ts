import { IMuscleRoutine } from './IMuscleRoutine';

export interface IPlan {
  id: number;
  name: string;
  dayDefined: string;
  routine: IMuscleRoutine[] | [];
}
