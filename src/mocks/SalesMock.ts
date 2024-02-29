import { ISaleItems } from '../interfaces';

export const SalesMock: ISaleItems[] = [
  {
    id: 1,
    name: 'T-shirt',
    type: 'clothes',
    price: 30,
    image: '../group-class/teste.jpg',
    description: 'T-shirt dry',
    quantityBySize: [
      {
        size: 'XS',
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Avaliable Physical',
    type: 'Service',
    price: 10,
    image: '../group-class/teste.jpg',
    description:
      'Avaliable Physical will check your currently conditin to make practice exercises',
    quantityBySize: null,
  },
  {
    id: 3,
    name: 'Avaliable Nutrition',
    type: 'Service',
    price: 10,
    image: '../group-class/teste.jpg',
    description:
      'Avaliable Nutrition will give to you straight ahead path to earn your dreams',
    quantityBySize: null,
  },
  {
    id: 4,
    name: 'Avaliable Physical + Workout plan',
    type: 'Service',
    price: 25,
    image: '../group-class/teste.jpg',
    description:
      'Avaliable Nutrition will give to you straight ahead path to earn your dreams',
    quantityBySize: null,
  },
];
