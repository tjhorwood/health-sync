import Image from 'next/image';
import Link from 'next/link';
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from 'react-icons/fa';

import Laptop from '@/images/laptop.webp';
import Logo from '@/images/logo.png';

import { Button } from './button';

const usefulLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About us' },
];

const supportLinks = [
  { href: '/contact', text: 'Contact us' },
  { href: '/privacy', text: 'Privacy Policy' },
  { href: '/terms-conditions', text: 'Terms & Conditions' },
  { href: '/legal-notice', text: 'Legal Notice' },
];

const socialLinks = [
  { Icon: FaFacebook, label: 'Facebook' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaTwitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-10xl px-4 sm:px-6'>
        <div className='grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12'>
          {/* Company Info */}
          <div className='sm:col-span-12 lg:col-span-3'>
            <Image
              src={Logo}
              alt='Health Sync Logo'
              className='mb-2 max-w-[175px] md:max-w-[200px]'
            />
            <p className='text-sm text-gray-600'>
              From the inception of our wellness app to the vibrant team
              steering its evolution, our narrative is one of passion,
              commitment, and continuous growth. We are more than a team.
            </p>
          </div>

          {/* Useful Links */}
          <LinkSection title='Useful Links' links={usefulLinks} />

          {/* Support Links */}
          <LinkSection title='Support' links={supportLinks} />

          {/* Available On */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='mb-2 font-medium text-gray-800'>Available On</h6>
            <div className='space-y-2'>
              <PlatformButton Icon={FaApple} text='MacOS' />
              <PlatformButton Icon={FaWindows} text='Windows' />
            </div>
          </div>

          {/* Laptop Image */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <div className='relative max-w-full'>
              <div className='absolute inset-0 z-0 mx-auto h-0 w-0 rounded-full bg-gradient-to-bl from-blue-500/80 to-teal-400/80 to-75% md:h-[150px] md:w-[150px]' />
              <Image
                src={Laptop}
                alt='laptop'
                className='relative z-10 mx-auto max-w-0 md:max-w-[200px]'
              />
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className='border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8'>
          <ul className='mb-4 flex space-x-4 md:order-1 md:mb-0 md:ml-4'>
            {socialLinks.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href='#0'
                  className='hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900'
                  aria-label={label}
                >
                  <Icon className='h-9 w-9 fill-current p-2' />
                </a>
              </li>
            ))}
          </ul>
          <div className='mr-4 text-sm text-gray-600'>
            &copy; {new Date().getFullYear()} Health Sync. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkSection({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; text: string }>;
}) {
  return (
    <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
      <h6 className='mb-2 font-medium text-gray-800'>{title}</h6>
      <ul className='text-sm'>
        {links.map(({ href, text }) => (
          <li key={href} className='mb-2'>
            <Link
              href={href}
              className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatformButton({
  Icon,
  text,
}: {
  Icon: React.ElementType;
  text: string;
}) {
  return (
    <Button size='lg' className='w-1/2 space-x-2 sm:w-full md:w-11/12'>
      <Icon className='h-5 w-5' />
      <span>{text}</span>
    </Button>
  );
}
