import PhysicianDetail from '@/components/PhysicianDetail';
import PhysicianSuggestionList from '@/components/PhysicianSuggestionList';
import {
  getPhysicianById,
  getPhysicians,
} from '@/lib/actions/physician.actions';
import { PhysicianData } from '@/types/data';
import React from 'react';

const Details = ({ params: { id } }: SearchParamProps) => {
  const physician: PhysicianData | undefined = getPhysicianById(id);
  const physicians: PhysicianData[] | undefined = getPhysicians();

  return (
    <div className="p-5 md:px-10">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Doctor Detail */}
        <div className="col-span-3">
          <PhysicianDetail physician={physician!} />
        </div>

        <div>
          <PhysicianSuggestionList physicians={physicians!} />
        </div>
      </div>
    </div>
  );
};

export default Details;
