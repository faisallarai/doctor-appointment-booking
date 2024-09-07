import { PhysicianData } from '@/types/data';
import Image from 'next/image';
import React from 'react';
import PhysicianList from './PhysicianList';

const PhysicianListView = ({
  physicians,
  heading,
}: {
  physicians: PhysicianData[];
  heading: string;
}) => {
  return (
    <section className="mb-10 px-8">
      <h2 className="text-xl font-bold">{heading}</h2>
      <PhysicianList physicians={physicians} />
    </section>
  );
};

export default PhysicianListView;
