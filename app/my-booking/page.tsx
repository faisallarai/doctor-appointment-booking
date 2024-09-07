import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookingList from '@/components/BookingList';
import { getUserAppointmentList } from '@/lib/actions/appointment.actions';

const MyBooking = () => {
  const userId = '1';
  const appointments = getUserAppointmentList(userId);

  const filterUserBooking = (type: string) => {
    const result = appointments.filter((appointment: any) =>
      type === 'upcoming'
        ? new Date(appointment.date) >= new Date(Date.now())
        : new Date(appointment.date) <= new Date(Date.now())
    );
    return result;
  };

  return (
    <div className="px-4 sm:px-10 mt-10">
      <h2 className="font-bold text-2xl">My Booking</h2>
      <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <BookingList appointments={filterUserBooking('upcoming')} />
        </TabsContent>
        <TabsContent value="expired">
          <BookingList appointments={filterUserBooking('expired')} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBooking;
