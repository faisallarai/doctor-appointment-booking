import PhysicianListView from '@/components/PhysicianListView';
import { CategorySearch } from '@/components/specialties/Sidebar';
import { getCategories, getSpecialty } from '@/lib/actions/category.actions';
import { getPhysiciansBySpecialty } from '@/lib/actions/physician.actions';
import { CategoryData, PhysicianData } from '@/types/data';
import React from 'react';

const Specialty = ({ params: { name } }: SearchParamProps) => {
  const categories: CategoryData[] = getCategories();
  const physicians: PhysicianData[] = getPhysiciansBySpecialty(name);

  return (
    <div className="grid grid-cols-4">
      <aside className="hidden md:block">
        <CategorySearch categories={categories} name={name} />
      </aside>

      <main className="col-span-3 px-8 mt-5">
        <PhysicianListView physicians={physicians} heading={name} />
      </main>
    </div>
  );
};

export default Specialty;
