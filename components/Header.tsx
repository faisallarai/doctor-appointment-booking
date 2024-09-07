'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Menus } from '@/constants';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import LogoIcon from './icons/LogoIcon';

const Header = () => {
  const [user, setUser] = useState(true);

  return (
    <section className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <div className="text-primary">
          <LogoIcon />
        </div>

        <ul className="hidden gap-8 md:flex">
          {Menus.map((menu) => (
            <Link key={menu.id} href={menu.path}>
              <li className="hover:text-[#f97316] hover:scale-105 transition-all ease-in-out cursor-pointer">
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src="/assets/images/user.png"
              width={50}
              height={50}
              alt="profile-img"
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <ul className="flex flex-col gap-2">
              <Link
                href="/profile"
                className="cursor-pointer p-2 rounded-md hover:bg-secondary"
              >
                Profile
              </Link>
              <Link
                href="/my-booking"
                className="cursor-pointer p-2 rounded-md hover:bg-secondary"
              >
                My Booking
              </Link>
              <Link
                href="/logout"
                className="cursor-pointer p-2 rounded-md hover:bg-secondary"
              >
                Logout
              </Link>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <Button>Get Started</Button>
      )}
    </section>
  );
};

export default Header;
