'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';

import { Button } from '@/components/ui/button';

export default function MobileMenu({ navItems }: any) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className='flex lg:hidden'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`${mobileNavOpen && 'active'}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        {mobileNavOpen ? (
          <MdClose className='h-8 w-8' />
        ) : (
          <MdMenu className='h-8 w-8' />
        )}
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as='nav'
          id='mobile-nav'
          className='absolute left-0 top-full z-20 h-screen w-full overflow-scroll bg-white pb-16'
          enter='transition ease-out duration-200 transform'
          enterFrom='opacity-0 -translate-y-2'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='flex flex-col space-y-4'>
            <ul className='space-y-4 px-5 py-2 font-medium'>
              {navItems.map((item: any, itemIdx: any) => (
                <li key={itemIdx}>
                  <Link
                    href={item.href}
                    className='flex text-lg text-gray-600 hover:text-teal-400'
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mx-auto flex w-full flex-col items-center space-y-4 px-5 py-2'>
              <h2 className='text-2xl font-bold'>
                Get the{' '}
                <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
                  App
                </span>
              </h2>
              <div className='flex grow flex-wrap items-center justify-center gap-4'>
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
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
