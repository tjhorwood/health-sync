import Logo from '@/public/images/logo.png';
import Laptop from '@/public/images/laptop.webp';
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
      <div className='max-w-full mx-auto px-4 sm:px-6 bg-white z-0'>
        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>
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
            <h6 className='text-gray-800 font-medium mb-2'>Useful Links</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='/'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>Support</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Contact us
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/privacy'
                  className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>Available On</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <Button
                  size='lg'
                  className='space-x-2 w-1/2 sm:w-full md:w-11/12'
                >
                  <FaApple className='h-5 w-5' />
                  <span>MacOS</span>
                </Button>
              </li>
              <li className='mb-2'>
                <Button
                  size='lg'
                  className='space-x-2 w-1/2 sm:w-full md:w-11/12'
                >
                  <FaWindows className='h-5 w-5' />
                  <span>Windows</span>
                </Button>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <div
              className='relative max-w-full'
            >
              <div className='absolute h-0 md:h-[150px] w-0 md:w-[150px] mx-auto inset-0 rounded-full bg-gradient-to-bl from-blue-500/80 to-teal-400/80 to-75% z-0'></div>
              <div className='relative z-10'>
                <Image
                  src={Laptop}
                  alt='laptop'
                  className='max-w-0 md:max-w-[200px] mx-auto'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          {/* Social as */}
          <ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0 space-x-4'>
            <li>
              <a
                href='#0'
                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Facebook'
              >
                <FaFacebook className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
            <li>
              <a
                href='#0'
                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Instagram'
              >
                <FaInstagram className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
            <li>
              <a
                href='#0'
                className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Twitter'
              >
                <FaTwitter className='h-9 w-9 fill-current p-2' />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className='text-sm text-gray-600 mr-4'>
            &copy; {new Date().getFullYear()} Health Sync. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
