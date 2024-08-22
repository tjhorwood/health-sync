'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { MdMenu, MdClose } from "react-icons/md";
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { FaApple, FaWindows } from 'react-icons/fa';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex lg:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
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
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='flex flex-col space-y-6'>
            <ul className="px-5 py-2 font-medium">
              <li>
                <Link href="/" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>About us</Link>
              </li>
              <li>
                <Link href="/contact" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Contact us</Link>
              </li>
            </ul>
            <div className='px-5 py-2 w-full mx-auto flex flex-col items-center space-y-4'>
              <h2 className='font-bold text-2xl'>Get the <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400">App</span></h2>
              <div className="flex grow justify-center flex-wrap items-center gap-4">
                <Button size="lg" className='hover:scale-[1.15] transition duration-300 space-x-2'>
                  <FaApple className="h-5 w-5" />
                  <span>MacOS</span>
                </Button>
                <Button size="lg" className='hover:scale-[1.15] transition-all duration-300 space-x-2'>
                  <FaWindows className="h-5 w-5" />
                  <span>Windows</span>
                </Button>
            </div>
            </div>
          </div>         
        </Transition>
      </div>
    </div>
  )
}
