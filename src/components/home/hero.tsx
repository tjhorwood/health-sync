'use client';
import Image from 'next/image';
import Laptop from '@/images/laptop.webp';
import Elevance from '@/images/elevance.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroHome() {
  return (
    <section className='relative w-full'>
      <div className='px-4 sm:px-6'>
        {/* Hero content */}
        <div className='flex flex-col space-y-8 pb-12 pt-32 md:pb-20 md:pt-40 lg:flex-row'>
          <div className='w-full'>
            <h1
              className='text-3xl font-extrabold leading-tighter tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
              data-aos='zoom-y-out'
            >
              Your New Holistic
            </h1>
            <h1
              className='text-3xl font-extrabold leading-tighter tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
              data-aos='zoom-y-out'
            >
              <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
                Wellness Hub
              </span>
            </h1>
            <div className='mt-6 max-w-3xl space-y-8'>
              <p
                className='text-gray-600 md:text-lg lg:text-xl'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                Health Sync™ an app crafted to elevate your productivity,
                enhance your focus, and support your overall well-being. Whether
                you are looking to boost your daily performance or take better
                care of both your mind and body, this app provides the tools and
                guidance you need to thrive.{' '}
              </p>
              <div
                className='flex w-full justify-between'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                <div>
                  <Link href='/about'>
                    <Button
                      size='lg'
                      className='text-md w-full bg-gray-900 text-white hover:bg-gray-800 sm:w-auto lg:text-lg'
                    >
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className='flex items-center sm:max-w-xs'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                <p className='w-2/3'>Brought to you by:</p>
                <div className='w-1/3'>
                  <Image
                    src={Elevance}
                    alt='Elevance Health'
                    className='max-h-[50px] sm:-ml-10'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div
            className='relative max-w-full'
            data-aos='zoom-y-out'
            data-aos-delay='150'
          >
            <div className='absolute inset-0 z-0 mx-auto h-[275px] w-[275px] rounded-full bg-gradient-to-bl from-blue-500/80 to-teal-400/80 to-75% sm:h-[400px] sm:w-[400px]'></div>
            <div className='relative z-10'>
              <Image
                src={Laptop}
                alt='laptop'
                className='mx-auto sm:max-w-[500px] lg:max-w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
