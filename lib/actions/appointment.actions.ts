import { Appointments } from '@/constants';

export const createAppointment = () => {};

export const updateAppointment = () => {};

export const getAppointment = () => {};

export const getRecentAppointmentList = () => {
  return Appointments.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
};

export const getUserAppointmentList = (userId: string) => {
  console.log(userId);
  return Appointments.filter((appointment) => appointment.userId === userId);
};
