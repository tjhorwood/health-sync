import Image from 'next/image';
import React from 'react';

import RevitalizeBG from '@/images/revitalize-bg.webp';
import Tablet1 from '@/images/tablet-1.webp';
import Tablet2 from '@/images/tablet-2.png';

export default function Revitalize() {
  return (
    <div className='relative mx-auto flex min-h-[400px] max-w-9xl flex-col items-center justify-center rounded-2xl bg-[#e6f7f5] px-4 py-16 shadow'>
      <div className='absolute hidden px-6 md:block'>
        <Image src={RevitalizeBG} alt='Revitalize shapes' />
      </div>
      {/* Laptop Image */}
      <div className='absolute bottom-0 left-0 w-1/2 max-w-xs md:w-1/3'>
        <Image src={Tablet1} alt='Laptop showing fitness app' />
      </div>

      {/* Main Heading */}
      <h1 className='z-10 mb-8 max-w-4xl text-center text-2xl font-semibold leading-tighter tracking-tighter md:text-3xl lg:text-4xl'>
        Revitalize Your Day: Quick Workouts, Breathwork, and Productivity
        Boosters
      </h1>

      {/* Tablet Image */}
      <div className='absolute right-0 top-0 w-1/2 max-w-xs md:w-1/3'>
        <Image src={Tablet2} alt='Tablet showing workout thumbnails' />
      </div>
    </div>
  );
}
