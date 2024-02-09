import axios from 'axios';
import { IPlan } from '../interfaces';
import { WorkoutDayMock } from '../mocks/WorkoutDayMock';

export namespace WorkoutService {
  export async function getWorkoutDay(id: number): Promise<IPlan> {
    try {
      const response = await axios.get<IPlan, any>('');
      response.data = WorkoutDayMock.find((element) => {
        if (element?.id === Number(id)) return element;
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return {} as IPlan;
    }
  }

  export async function getAll(): Promise<IPlan[]> {
    try {
      const response = await axios.get<IPlan, any>('');
      return (response.data = WorkoutDayMock);
    } catch (error) {
      console.log(error);
      return [] as IPlan[];
    }
  }
}
