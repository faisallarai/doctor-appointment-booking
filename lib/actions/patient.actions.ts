import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { parseStringify } from '../utils';

export const createAppointment = () => {};

export const updateAppointment = () => {};

export const getAppointment = () => {};

export const getRecentAppointmentList = () => {};

export const sendEmail = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  const resend = new Resend('re_123456789');

  try {
    const result = await resend.emails.send({
      from: 'faisallarai@gmail.com',
      to: [email],
      subject: 'Appointment Booking Confirmation',
      react: EmailTemplate({ name }),
    });

    return parseStringify(result);
  } catch (error) {
    console.log(error);
  }
};
