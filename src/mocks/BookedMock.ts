import { IClass } from '../interfaces';

export const BookedMock: IClass[] = [
  {
    id: 1,
    name: 'Power Step',
    description: 'Descrição da aula',
    date: '12/12/2020',
    start_at: '12:00',
    end_at: '13:00',
    image: '',
    location: 'Centro',
    teacher: [
      {
        id: 1,
        name: 'Sara',
      },
    ],
    capacity: 10,
  },
];
