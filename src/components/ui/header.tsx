'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';

import Logo from '@/images/logo.webp';

import { Button } from './button';
import MobileMenu from './mobile-menu';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setIsScrolled(window.pageYOffset > 10);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={`fixed z-30 w-full bg-white transition ease-in-out ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className='mx-auto max-w-10xl px-5 sm:px-6'>
        <div className='flex h-24 items-center justify-between'>
          {/* Site branding */}
          <Link href='/' className='mr-4 shrink-0 lg:w-1/4'>
            <Image
              src={Logo}
              alt='HealthSync Logo'
              className='max-w-[175px] md:max-w-[200px]'
            />
          </Link>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex lg:grow'>
            <ul className='flex grow flex-wrap items-center justify-end gap-4 font-medium'>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='group relative flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-teal-500 lg:px-5'
                  >
                    <span
                      className={`relative z-10 ${pathname === href ? 'text-teal-500' : ''}`}
                    >
                      {label}
                    </span>
                    <span
                      className={`absolute bottom-0 right-0 h-[3px] bg-gradient-to-l from-blue-500 to-teal-400 to-75% transition-all duration-200 ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex grow flex-wrap items-center justify-end gap-4'>
              {['MacOS', 'Windows'].map((os) => (
                <Button
                  key={os}
                  size='lg'
                  className='space-x-2 transition duration-300 hover:scale-[1.15]'
                >
                  {os === 'MacOS' ? (
                    <FaApple className='h-5 w-5' />
                  ) : (
                    <FaWindows className='h-5 w-5' />
                  )}
                  <span>{os}</span>
                </Button>
              ))}
            </div>
          </nav>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
