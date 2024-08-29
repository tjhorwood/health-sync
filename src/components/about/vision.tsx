import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ManStretching from '@/images/male-stretching.webp';
import ManEating from '@/images/man-eating.webp';
import WomanStretching from '@/images/girl-stretching.webp';
import Dots from '@/images/dots.webp';

export default function Vision() {
  return (
    <div
      className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row md:gap-14'
      data-aos='zoom-y-out'
    >
      <div className='mb-8 w-full md:mb-0 md:w-1/2'>
        <div className='relative'>
          <Image
            src={ManStretching}
            alt='Man Stretching'
            className='relative z-10 rounded-2xl'
          />
          <Image
            src={WomanStretching}
            alt='Woman Stretching'
            className='animation-delay-1000 absolute -right-8 top-0 z-20 h-40 w-40 animate-float rounded-xl lg:h-56 lg:w-56'
          />
          <Image
            src={ManEating}
            alt='Man Eating'
            className='absolute -bottom-8 -left-8 z-20 h-40 w-40 animate-float rounded-xl lg:h-56 lg:w-56'
          />
          <Image
            src={Dots}
            alt='Dots'
            className='animation-delay-500 absolute -bottom-1 right-12 z-0 h-56 w-20 animate-float lg:bottom-6'
          />
        </div>
      </div>
      <div className='w-full space-y-8 md:w-1/2'>
        <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
          Our{' '}
          <span className='bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>
            Vision
          </span>
        </h2>
        <p className='md:text-lg'>
          To offer a user-friendly tool for managing your overall health, with
          simple content for daily lifestyle changes, easy access to health
          insurance benefits, and guidance for your wellness journey.
        </p>
        <Button size='lg' className='mt-4 lg:text-lg'>
          Join Us
        </Button>
      </div>
    </div>
  );
}
