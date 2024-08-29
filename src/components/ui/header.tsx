'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Logo from '@/images/logo.png';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './button';
import { FaApple, FaWindows } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact us' },
  ];

  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full bg-white transition ease-in-out ${!top ? 'shadow-lg' : ''}`}
    >
      <div className='mx-auto max-w-10xl px-5 sm:px-6'>
        <div className='flex h-24 items-center justify-between'>
          {/* Site branding */}
          <div className='mr-4 shrink-0 lg:w-1/4'>
            <Link href='/'>
              <Image
                src={Logo}
                alt='HealthSync Logo'
                className='max-w-[175px] md:max-w-[200px]'
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex lg:grow'>
            {/* Desktop menu links */}
            <ul className='flex grow flex-wrap items-center justify-end gap-4 font-medium'>
              {navItems.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link
                    href={item.href}
                    className='group relative flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-teal-500 lg:px-5'
                  >
                    <span
                      className={`relative z-10 ${pathname === item.href ? 'text-teal-500' : ''}`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-0 right-0 h-[3px] bg-gradient-to-l from-blue-500 to-teal-400 to-75% transition-all duration-200 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex grow flex-wrap items-center justify-end gap-4'>
              <Button
                size='lg'
                className='space-x-2 transition duration-300 hover:scale-[1.15]'
              >
                <FaApple className='h-5 w-5' />
                <span>MacOS</span>
              </Button>
              <Button
                size='lg'
                className='space-x-2 transition-all duration-300 hover:scale-[1.15]'
              >
                <FaWindows className='h-5 w-5' />
                <span>Windows</span>
              </Button>
            </div>
          </nav>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
