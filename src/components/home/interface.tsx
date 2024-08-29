import React from 'react';
import Library from '@/images/library.webp';
import Journal from '@/images/journal.png';
import Fitness from '@/images/fitness.webp';
import DailyTasks from '@/images/dailytasks.webp';
import Image from 'next/image';

export default function Interface() {
  return (
    <div className='mx-auto max-w-9xl px-4 pb-32 pt-16 sm:px-6 lg:px-8'>
      <h2 className='mx-auto mb-12 max-w-6xl text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl'>
        Easy to Use Interface,{' '}
        <span className='bg-gradient-to-l from-blue-500 to-teal-400 bg-clip-text text-transparent'>
          Fully Customized
        </span>{' '}
        for your preference
      </h2>

      <div className='relative mx-auto flex max-w-8xl items-center justify-center'>
        {/* Main (Library) Screenshot */}
        <div className='relative z-10'>
          <Image src={Library} alt='Library Interface' />
        </div>

        {/* Journal Screenshot (Left) */}
        <div className='absolute bottom-0 left-0 z-20 w-1/3 -translate-x-1/4 translate-y-16 transform animate-float md:w-1/4 md:translate-y-24'>
          <Image src={Journal} alt='Journal Interface' />
        </div>

        {/* Fitness Screenshot (Right) */}
        <div className='animation-delay-1000 absolute right-0 top-0 z-20 w-1/3 -translate-y-1/4 translate-x-1/4 transform animate-float md:w-1/4'>
          <Image src={Fitness} alt='Fitness Interface' />
        </div>
      </div>
    </div>
  );
}
