import { PhysicianData } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PhysicianList = ({ physicians }: { physicians: PhysicianData[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mt-4">
      {physicians.length > 0
        ? physicians.map((physician: PhysicianData, index: number) => (
            <div
              key={physician.id}
              className="border-[1px] rounded-lg p-3 flex flex-col justify-center cursor-pointer hover:border-primary hover:shadow-md transition-all ease-in-out"
            >
              <Image
                src={physician.image}
                height={200}
                width={500}
                alt={physician.name}
                className="h-[200px] w-full object-cover rounded-lg opacity-70"
              />

              <div className="mt-3 items-baseline flex flex-col gap-1">
                <h2 className="text-[10px] bg-secondary p-1 px-2 text-primary rounded-full">
                  {physician.category}
                </h2>
                <h2 className="font-bold">Dr. {physician.name}</h2>
                <h2 className="text-primary text-sm">13 Years</h2>
                <h2 className="text-gray-500 text-sm">
                  14 street avenue, Accra
                </h2>
                <Link href={`/physicians/${physician.id}`} className="w-full">
                  <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </Link>
              </div>
            </div>
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <div
              key={index}
              className="h-[400px] bg-primary/20 w-full rounded-lg animate-pulse"
            ></div>
          ))}
    </div>
  );
};

export default PhysicianList;
