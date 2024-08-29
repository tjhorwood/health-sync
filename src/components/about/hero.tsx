import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroAbout() {
  return (
    <>
      <div
        className='flex min-h-[350px] items-center justify-center rounded-xl bg-cover bg-center shadow-lg md:min-h-[500px]'
        style={{
          backgroundImage:
            "url('https://koretechxdemo.link/healthsync/wp-content/uploads/2024/08/background-2.webp'",
        }}
        data-aos='zoom-y-out'
      >
        <div className='mx-auto max-w-2xl space-y-6 px-8 text-center md:px-4'>
          <h1 className='text-3xl font-bold leading-tighter tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
            Our{' '}
            <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
              Team
            </span>
          </h1>
          <p className='text-lg text-white md:text-xl'>
            Healthcare Rebels looking to reshape the future of what truly
            defines Whole Health
          </p>
        </div>
      </div>
      <div
        className='mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:gap-4'
        data-aos='zoom-y-out'
        data-aos-delay='200'
      >
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
            Unveiling{' '}
            <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
              Wellness Excellence
            </span>
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
