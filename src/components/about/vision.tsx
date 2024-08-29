import Image from 'next/image';

import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/gradient-text';
import { visionImageData } from '@/lib/data';

export default function Vision() {
  return (
    <div
      className='mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-14'
      data-aos='zoom-y-out'
    >
      <div className='mb-8 w-full md:mb-0 md:w-1/2'>
        <div className='relative'>
          {visionImageData.map(({ src, alt, className }) => (
            <Image key={alt} src={src} alt={alt} className={className} />
          ))}
        </div>
      </div>
      <div className='w-full space-y-8 md:w-1/2'>
        <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
          Our <GradientText>Vision</GradientText>
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
