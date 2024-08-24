import Image from "next/image";
import { Button } from "../ui/button";
import ManStretching from '@/public/images/male-stretching.webp'
import ManEating from '@/public/images/man-eating.webp'
import WomanStretching from '@/public/images/girl-stretching.webp'
import Dots from '@/public/images/dots.webp'

export default function Vision() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-14' data-aos='zoom-y-out'>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative">
          <Image
            src={ManStretching}
            alt='Man Stretching'
            className="rounded-2xl z-10 relative"
            objectFit="cover"
          />
          <Image
            src={WomanStretching}
            alt='Woman Stretching'
            className="absolute top-0 -right-8 w-40 h-40 lg:w-56 lg:h-56 rounded-xl z-20 animate-float animation-delay-1000"
            objectFit="cover"
          />
          <Image
            src={ManEating}
            alt='Man Eating'
            className="absolute -bottom-8 -left-8 w-40 h-40 lg:w-56 lg:h-56 rounded-xl z-20 animate-float"
            objectFit="cover"
          />
          <Image
            src={Dots}
            alt='Dots'
            className="absolute -bottom-1 lg:bottom-6 right-12 w-20 h-56 z-0 animate-float animation-delay-500"
          />
        </div>
      </div>
      <div className='w-full md:w-1/2 space-y-8'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Our{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>
            Vision
          </span>
        </h1>
        <p className='text-lg text-gray-600'>
          To offer a user-friendly tool for managing your overall health, with simple content for daily lifestyle changes, easy access to health insurance benefits, and guidance for your wellness journey.
        </p>
        <Button size='lg' className="mt-4">Join Us</Button>
      </div>
    </div>
  );
}