import React from 'react';
import IconSelector from './IconSelector';
import { CategoryData } from '@/types/data';
import Link from 'next/link';

const CategoryList = ({ categories }: { categories: CategoryData[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-between">
      {categories
        ? categories.map(
            (category, index) =>
              index < 6 && (
                <Link
                  key={category.id}
                  href={`/specialties/${category.name}`}
                  className="flex flex-col items-center min-w-sm text-center gap-2 cursor-pointer bg-secondary m-2 p-5 rounded-lg hover:scale-105 transition-all ease-in-out mt-5"
                >
                  <div className="text-primary">
                    <IconSelector icon={category.icon} />
                  </div>
                  <p className="text-primary text-sm">{category.name}</p>
                </Link>
              )
          )
        : [1, 2, 3, 4, 5, 6].map((category, index) => (
            <div
              key={index}
              className="h-[100px] bg-primary/20 w-[130px] rounded-lg animate-pulse m-2"
            ></div>
          ))}
    </div>
  );
};

export default CategoryList;
