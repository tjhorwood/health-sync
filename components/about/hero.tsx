import { Button } from '@/components/ui/button';

export default function HeroAbout() {
  return (
    <>
      <div
        className='bg-cover bg-center rounded-xl min-h-[500px] flex justify-center items-center shadow-lg'
        style={{
          backgroundImage:
            "url('https://koretechxdemo.link/healthsync/wp-content/uploads/2024/08/background-2.webp'",
        }}
        data-aos='zoom-y-out'
      >
        <div className='max-w-2xl mx-auto text-center space-y-6 px-8 md:px-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter tracking-tighter text-white'>
            Our{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400 to-75%'>
              Team
            </span>
          </h1>
          <p className='text-white text-lg md:text-xl'>
            Healthcare Rebels looking to reshape the future of what truly
            defines Whole Health
          </p>
        </div>
      </div>
      <div
        className='flex flex-col md:flex-row max-w-7xl mx-auto gap-8 md:gap-4'
        data-aos='zoom-y-out'
        data-aos-delay='200'
      >
        <div className='w-full md:w-1/2 space-y-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tighter tracking-tighter'>
            Unveiling{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400 to-75%'>
              Wellness Excellence
            </span>
          </h2>
          <Button size='lg' className='lg:text-lg'>See Our Features</Button>
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
