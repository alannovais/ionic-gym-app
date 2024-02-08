export interface IExercise {
  id: number;
  name: string;
  sets?: number;
  reps?: number;
  weight?: string;
  during?: string | null;
}
