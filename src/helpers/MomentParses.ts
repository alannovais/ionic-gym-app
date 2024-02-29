import * as moment from 'moment-timezone';

export const formatDate = (date: Date | string): string => {
  return moment(date).format('DD-MM-yyyy');
};

export const getMonth = (date: Date | string): string => {
    return moment(date).format('MMMM');
}