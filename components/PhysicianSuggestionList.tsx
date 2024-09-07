import { PhysicianData } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PhysicianSuggestionList = ({
  physicians,
}: {
  physicians: PhysicianData[];
}) => {
  return (
    <div className="p-4 border-[1px] mt-5 lg:ml-5 rounded-lg min-w-[280px]">
      <h2 className="mb-3 font-bold text-[20px]">Suggestions</h2>
      {physicians?.map((physician) => (
        <Link
          href={`/physicians/${physician.id}`}
          key={physician.id}
          className="mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-secondary rounded-lg flex items-center gap-3"
        >
          <Image
            src={physician?.image}
            width={70}
            height={70}
            alt={physician.name}
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <div className="mt-3 flex flex-col items-baseline justify-center">
            <h2 className="text-[10px] bg-secondary p-1 px-2 text-primary rounded-full">
              {physician.category}
            </h2>
            <h2 className="font-medium text-sm">
              {physician.title} {physician.name}
            </h2>
            <h2 className="text-primary text-sm">
              {physician.yearsOfExperience}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhysicianSuggestionList;
