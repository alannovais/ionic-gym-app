export interface ISaleItems {
  id: number;
  name: string;
  type?: string;
  price: string | number;
  image?: string;
  description?: string;
  quantityBySize?:
    | [
        {
          size: string;
          quantity: number;
        },
      ]
    | null;
}
