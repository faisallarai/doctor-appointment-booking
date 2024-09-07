import { CategorySearch } from '@/components/specialties/Sidebar';
import { getCategories } from '@/lib/actions/category.actions';
import { CategoryData } from '@/types/data';
import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories: CategoryData[] = getCategories();

  return (
    <div className="grid grid-cols-4">
      <div>
        <CategorySearch categories={categories} />
      </div>

      <div className="col-span-3">{children}</div>
    </div>
  );
}
