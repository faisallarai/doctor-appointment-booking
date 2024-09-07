'use client';

import { SocialMediaList } from '@/constants';
import { PhysicianData } from '@/types/data';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import DialogAppointmentButton from './DialogAppointmentButton';

const PhysicianDetail = ({ physician }: { physician: PhysicianData }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 border-[1px] p-5 mt-5 rounded-lg">
        {/* Doctor Image */}
        <div className="col-span-2">
          <Image
            src={physician?.image!}
            width={200}
            height={200}
            alt={physician?.name!}
            className="rounded-lg w-full h-[280px] object-cover"
          />
        </div>

        {/* Doctor Info */}
        <div className="col-span-2 mt-5 flex flex-col gap-3 md:px-10 items-baseline">
          <h2 className="font-bold text-3xl">{physician.name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-base">
            <GraduationCap />
            <span>{physician.yearsOfExperience} of Experience</span>
          </h2>
          <h2 className="text-base flex gap-2 text-gray-500">
            <MapPin />
            <span>{physician.address}</span>
          </h2>
          <h2 className="text-[10px] bg-secondary p-1 px-2 text-primary rounded-full">
            {physician.category}
          </h2>
          <div className="flex gap-3">
            {SocialMediaList.map((item, index) => (
              <Image
                key={item.id}
                src={item.icon}
                width={30}
                height={30}
                alt={item.name}
              />
            ))}
          </div>

          <DialogAppointmentButton physician={physician} />
        </div>
      </div>
      {/* About Doctor */}
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wider mt-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </>
  );
};

export default PhysicianDetail;
