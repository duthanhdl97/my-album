'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FacebookIcon } from '../elements/Icons';
import { ActiveRoutePredicate, MenuItem, menuItems } from '~/models/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive: ActiveRoutePredicate = (path: string) => {
    return (
      pathname === path || (!menuItems.some((item) => item.exact && item.path === path) && pathname.startsWith(path))
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black h-23 flex items-center shadow-md animate-slideDown">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-4xl font-light text-white hover:text-teal-400 transition-colors duration-200"
              aria-label="Home"
            >
              Photosen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-6">
              {menuItems.map((item: MenuItem) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={clsx(
                      'uppercase text-xs tracking-widest transition-colors duration-300',
                      isActive(item.path) ? 'text-[#20c997]' : 'text-white/50 hover:text-[#20c997]',
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
