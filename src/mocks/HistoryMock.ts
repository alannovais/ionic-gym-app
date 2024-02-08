import { IHistoryDay } from '../interfaces';

const currentDate = new Date().toLocaleDateString();

export const HisotryMock: IHistoryDay[] = [
  {
    day: currentDate,
    typeAccess: [
      {
        id: 1,
        type: 'Acesso',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 2,
        type: 'Toalha',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 3,
        type: 'Bebidas',
        getIn: currentDate,
        getOut: currentDate,
      },
    ],
  },
  {
    day: currentDate,
    typeAccess: [
      {
        id: 1,
        type: 'Acesso',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 2,
        type: 'Toalha',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 3,
        type: 'Bebidas',
        getIn: currentDate,
        getOut: currentDate,
      },
    ],
  },
  {
    day: currentDate,
    typeAccess: [
      {
        id: 1,
        type: 'Acesso',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 2,
        type: 'Toalha',
        getIn: currentDate,
        getOut: currentDate,
      },
      {
        id: 3,
        type: 'Bebidas',
        getIn: currentDate,
        getOut: currentDate,
      },
    ],
  },
];
