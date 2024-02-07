import { ITeacher } from './ITeacher';

export interface IGroupClass {
    id: number;
    name: string;
    description: string;
    date: string;
    start_at: string;
    end_at: string;
    location: string;
    image?: string;
    teacher: ITeacher[];
    capacity: number;
}
