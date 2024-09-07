'use client';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import CancelAppointmentDialogButton from './CancelAppointmentDialogButton';
import { toast } from 'sonner';

const BookingList = ({
  expired,
  appointments,
}: // updateRecord,
{
  expired: boolean;
  appointments: any;
  // updateRecord: () => void;
}) => {
  const onCancelBooking = (item: any) => {
    console.log(item);
    // cancel appointment

    // successful cancellation
    toast('Booking cancelled successfully');
    // updateRecord();
  };

  return (
    <div>
      {appointments &&
        appointments.map((appointment: any, index: number) => (
          <div
            key={appointment.id}
            className="flex gap-4 items-center border p-5 m-3 rounded-lg"
          >
            <Image
              src={appointment.physician.image}
              width={70}
              height={70}
              alt={appointment.physician.name}
              className="rounded-full h-[70px] w-[70px] object-cover"
            />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="flex items-center justify-between font-bold text-xl">
                {appointment.physician.name}
                {!expired && (
                  <CancelAppointmentDialogButton
                    onContinueClick={() => onCancelBooking(appointment)}
                  />
                )}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin className="text-primary h-5 w-5" />
                {appointment.physician.address}
              </h2>
              <h2 className="flex gap-2 text-gray-800">
                <Calendar className="text-primary h-5 w-5" /> Appointment On:{' '}
                {moment(appointment.date).format('DD MMM YYYY')}
              </h2>
              <h2 className="flex gap-2 text-gray-800">
                <Clock className="text-primary h-5 w-5" />
                At Time: {appointment.time}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
