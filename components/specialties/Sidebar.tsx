'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { CategoryData } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import IconSelector from '../IconSelector';
import { usePathname } from 'next/navigation';

export function CategorySearch({
  categories,
  name,
}: {
  categories: CategoryData[];
  name: string;
}) {
  const path = usePathname();
  return (
    <Command className="sticky h-screen flex flex-col mt-5">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="overflow-visible">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {categories &&
            categories.map((category: CategoryData) => (
              <CommandItem key={category.id}>
                <Link
                  href={`/specialties/${category.name}`}
                  className={`p-2 flex gap-2 items-center text-[14px] text-primary w-full rounded-md cursor-pointer ${
                    name === category.name && 'bg-primary/30'
                  }`}
                >
                  <div className="text-primary">
                    <IconSelector icon={category.icon} />
                  </div>

                  <p>{category.name}</p>
                </Link>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
