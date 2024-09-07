import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';

const BookingList = ({ appointments }: { appointments: any }) => {
  console.log(appointments);

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
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">
                {appointment.physician.name}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin className="text-primary" />
                {appointment.physician.address}
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary" /> Appointment On:
                {moment(appointment.date).format('DD MMM YYYY')}
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary" />
                At Time:{appointment.time}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
