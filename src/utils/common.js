import moment from 'moment';

export const formatTime = (date) => {
  return moment(date).format(`hh:mm A`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

export const isRepeating = (repeatingDays) => {
  return Object.values(repeatingDays).some(Boolean);
};

export const isOverdueDate = (dueDate, date) => {
  return dueDate < date && !isOneDay(date, dueDate);
};

export const isOneDay = (dateFirst, dateSecond) => {
  const dateFirstMoment = moment(dateFirst);
  const dateSecondMoment = moment(dateSecond);
  return dateFirstMoment.diff(dateSecondMoment, `days`) === 0 && dateFirst.getDate() === dateSecond.getDate();
};
