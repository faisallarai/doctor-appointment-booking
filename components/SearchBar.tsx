import { CategoryData } from '@/types/data';
import { SearchIcon } from 'lucide-react';
import React from 'react';

function SearchBar() {
  return (
    <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        className="bg-[#1a1a1a] text-white border-0 sm:w-full focus:ring-0 outline-0 placeholder-[#fafafa] text-xs"
        type="text"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto">
        <div className="flex space-x-2 pr-5 ">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
        </div>

        <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
          <SearchIcon className="text-2xl animate-pulse" />
          <span className="font-medium text-sm">Filters</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
