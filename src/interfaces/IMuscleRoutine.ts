import { IExercise } from './IExercises';

export interface IMuscleRoutine {
    id: number;
    muscle: string;
    exercises: IExercise[];
}
