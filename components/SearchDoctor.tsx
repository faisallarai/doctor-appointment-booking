import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import CategoryList from './CategoryList';
import { CategoryData } from '@/types/data';
import SearchBar from './SearchBar';

const SearchDoctor = ({ categories }: { categories: CategoryData[] }) => {
  return (
    <section className="flex flex-col items-center gap-2 mb-10 px-5">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <p className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment
      </p>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2 flex-grow">
        <Input type="text" placeholder="Search ..." />
        <Button type="submit" variant="default">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <CategoryList categories={categories} />
    </section>
  );
};

export default SearchDoctor;
