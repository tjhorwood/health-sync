import Logo from '@/images/logo.png';
import Laptop from '@/images/laptop.webp';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='z-0 mx-auto max-w-10xl bg-white px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12'>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-3'>
            <div className='mb-2'>
              <Image
                src={Logo}
                alt='Health Sync Logo'
                className='max-w-[175px] md:max-w-[200px]'
              />
            </div>
            <div className='text-sm text-gray-600'>
              <p>
                From the inception of our wellness app to the vibrant team
                steering its evolution, our narrative is one of passion,
                commitment, and continuous growth. We are more than a team.
              </p>
            </div>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='mb-2 font-medium text-gray-800'>Useful Links</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='/'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/about'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='mb-2 font-medium text-gray-800'>Support</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='/contact'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Contact us
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/privacy'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Privacy Policy
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/terms-conditions'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/legal-notice'
                  className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='mb-2 font-medium text-gray-800'>Available On</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Button
                  size='lg'
                  className='w-1/2 space-x-2 sm:w-full md:w-11/12'
                >
                  <FaApple className='h-5 w-5' />
                  <span>MacOS</span>
                </Button>
              </li>
              <li className='mb-2'>
                <Button
                  size='lg'
                  className='w-1/2 space-x-2 sm:w-full md:w-11/12'
                >
                  <FaWindows className='h-5 w-5' />
                  <span>Windows</span>
                </Button>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <div className='relative max-w-full'>
              <div className='absolute inset-0 z-0 mx-auto h-0 w-0 rounded-full bg-gradient-to-bl from-blue-500/80 to-teal-400/80 to-75% md:h-[150px] md:w-[150px]'></div>
              <div className='relative z-10'>
                <Image
                  src={Laptop}
                  alt='laptop'
                  className='mx-auto max-w-0 md:max-w-[200px]'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className='border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8'>
          {/* Social as */}
          <ul className='mb-4 flex space-x-4 md:order-1 md:mb-0 md:ml-4'>
            <li>
              <a
                href='#0'
                className='hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900'
                aria-label='Facebook'
              >
                <FaFacebook className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
            <li>
              <a
                href='#0'
                className='hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900'
                aria-label='Instagram'
              >
                <FaInstagram className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
            <li>
              <a
                href='#0'
                className='hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900'
                aria-label='Twitter'
              >
                <FaTwitter className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className='mr-4 text-sm text-gray-600'>
            &copy; {new Date().getFullYear()} Health Sync. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
