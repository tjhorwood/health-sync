'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import NewLogo from '@/public/images/logo.png'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from './button'
import { FaApple, FaWindows } from "react-icons/fa"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact us' },
  ];

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-9xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-28">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/">
              <Image
                src={NewLogo}
                alt="HealthSync Logo"
                className="max-w-[175px] md:max-w-[200px]"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center font-medium gap-4">
              {navItems.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link
                    href={item.href}
                    className="relative group text-gray-800 hover:text-teal-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    <span className={`relative z-10 ${pathname === item.href ? 'text-teal-500' : ''}`}>{item.label}</span>
                    <span className={`absolute bottom-0 right-0 h-[3px] bg-gradient-to-l from-blue-500 to-teal-500 transition-all duration-200 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex grow justify-end flex-wrap items-center gap-4">
              <Button size="lg" className='hover:scale-[1.15] transition duration-300 space-x-2'>
                <FaApple className="h-5 w-5" />
                <span>MacOS</span>
              </Button>
              <Button size="lg" className='hover:scale-[1.15] transition-all duration-300 space-x-2'>
                <FaWindows className="h-5 w-5" />
                <span>Windows</span>
              </Button>
            </div>
          </nav>

          <MobileMenu />

        </div>
      </div >
    </header >
  )
}
