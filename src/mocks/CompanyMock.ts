import { ICompany } from '@/interfaces';

export const CompanyMock: ICompany = {
  id: 1,
  name: '<NAME>',
  email: '<EMAIL>',
  phone: '123456789',
  address: 'Rua ABC',
  socialMidia: {
    facebook: {
      name: 'Facebook',
      tag: '@facebook',
      url: 'https://www.facebook.com',
    },
    instagram: {
      name: 'Instagram',
      tag: '@instagram',
      url: 'https://www.instagram.com',
    },
    whatsapp: {
      name: 'Whatsapp',
      phone: '+351 911 611 411',
      url: 'https://www.whatsapp.com',
    },
    site: {
      name: 'Site',
      url: 'https://www.site.com',
    },
  },
  qrcode: 'value',
};
