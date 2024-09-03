import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/gradient-text';
import backgroundImage from '@/images/about-bg.webp';

export default function HeroAbout() {
  return (
    <>
      <div
        className='relative flex min-h-[350px] items-center justify-center rounded-xl bg-cover bg-center shadow-lg md:min-h-[500px]'
        data-aos='zoom-y-out'
      >
        <Image
          src={backgroundImage}
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
          priority={true}
        />
        <div className='relative z-10 mx-auto max-w-2xl space-y-6 px-8 text-center md:px-4'>
          <h1 className='text-3xl font-bold leading-tighter tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
            Our <GradientText>Team</GradientText>
          </h1>
          <p className='text-lg text-white md:text-xl'>
            Healthcare Rebels looking to reshape the future of what truly
            defines Whole Health
          </p>
        </div>
      </div>
      <div
        className='mx-auto flex flex-col gap-8 md:flex-row md:gap-4'
        data-aos='zoom-y-out'
        data-aos-delay='200'
      >
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
            Unveiling <GradientText>Wellness Excellence</GradientText>
          </h2>
          <Link href='/#features'>
            <Button size='lg' className='mt-6 lg:text-lg'>
              See Our Features
            </Button>
          </Link>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='md:text-lg'>
            Our team of health and technology experts designed this tool with
            you in mind. We combine our passion for wellness with advanced
            technology to create an intuitive platform that simplifies managing
            your overall health. From daily lifestyle tips to seamless insurance
            access, our dedicated professionals are here to support every step
            of your wellness journey.
          </p>
        </div>
      </div>
    </>
  );
}
