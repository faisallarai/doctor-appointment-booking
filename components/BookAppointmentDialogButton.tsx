import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDays, Clock } from 'lucide-react';
import { PhysicianData } from '@/types/data';
import { toast } from 'sonner';
import { Textarea } from './ui/textarea';
import { Resend } from 'resend';
import EmailTemplate from './EmailTemplate';
import { sendEmail } from '@/lib/actions/patient.actions';

interface TimeSlot {
  time: string;
}

const BookAppointmentDialogButton = ({
  physician,
}: {
  physician: PhysicianData;
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();
  const [note, setNote] = useState<string>();
  const userId = 1; //from next-auth

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      });
      timeList.push({
        time: i + ':30 AM',
      });
    }

    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM',
      });
      timeList.push({
        time: i + ':30 PM',
      });
    }

    setTimeSlots(timeList!);
  };

  const isPastDay = (day: any) => {
    return day <= new Date();
  };

  const saveBooking = async () => {
    const bookingData = {
      userId,
      physician: physician.id,
      date,
      time: selectedTimeSlot,
      note,
    };

    // save booking data

    // send email notification
    const user = {
      name: 'Issaka Faisal',
      email: 'anissataymiya@gmail.com',
    };

    const result = await sendEmail(user);
    if (result) {
      toast('Booking confirmation sent via email.');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-2xl overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                {/* Calendar */}
                <div className="flex flex-col gap-3 items-baseline">
                  <h2 className="flex gap-2 items-center">
                    <CalendarDays className="text-primary h-5 w-5" />
                    Select date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot */}
                <div className="mt-3 lg:mt-0">
                  <h2 className="flex gap-2 items-center mb-3">
                    <Clock className="text-primary h-5 w-5" />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-2">
                    {timeSlots?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item?.time)}
                        key={index}
                        className={`p-2 border rounded-full text-center hover:bg-primary hover:text-white cursor-pointer ${
                          item.time === selectedTimeSlot &&
                          'bg-primary text-white'
                        }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              <Textarea
                onChange={(e) => setNote(e.target.value)}
                placeholder="Type your symptoms here."
                className="mt-3"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end gap-2">
          <DialogClose asChild>
            <>
              <Button
                type="button"
                variant="outline"
                className="border-primary text-primary"
              >
                Close
              </Button>
              <Button
                type="button"
                variant="default"
                disabled={!(date && selectedTimeSlot)}
                onClick={() => saveBooking()}
              >
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialogButton;
