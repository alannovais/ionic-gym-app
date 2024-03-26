import { ISocialMedia } from './ISocialMidia';

export interface ICompany {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  socialMidia?: ISocialMedia;
  qrcode?: string;
}
