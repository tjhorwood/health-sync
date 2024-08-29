'use client';
import { FaThumbsUp, FaCheck } from 'react-icons/fa';
import { GiHealthIncrease, GiInspiration } from 'react-icons/gi';
import { cn } from '@/lib/utils';

const FeatureItem = ({
  icon,
  title,
  description,
  containerClassName,
  iconClassName,
}: any) => (
  <div
    className={cn(
      `flex h-full w-full transform flex-col items-center lg:animate-float lg:odd:pt-10 lg:even:pb-10`,
      containerClassName,
    )}
  >
    <div
      className={cn(
        `mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-lg lg:h-24 lg:w-24`,
        iconClassName,
      )}
    >
      {icon}
    </div>
    <div className='flex w-full max-w-full flex-grow flex-col justify-start rounded-lg bg-white p-4 shadow-md lg:text-center'>
      <h3 className='mb-3 text-lg font-bold lg:text-xl'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className='relative rounded-2xl bg-gray-100 shadow' id='features'>
      <div className='relative mx-auto max-w-8xl px-4'>
        <div className='space-y-6 py-10 md:py-16'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-6 text-center md:pb-8'>
            <h2 className='mb-4 text-3xl font-extrabold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
              Why Choose{' '}
              <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
                Us
              </span>
              ?
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {features.map((item, itemIdx) => (
              <FeatureItem
                key={itemIdx}
                icon={item.icon}
                title={item.title}
                iconClassName={item.iconClassName}
                containerClassName={item.containerClassName}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <FaThumbsUp className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Simple to Use',
    iconClassName: 'bg-emerald-400',
    description:
      'Simple to use interface which has fresh daily content everyday!',
  },
  {
    icon: <FaCheck className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Health Insurance Approved',
    description:
      'Reimbursement approved fitness programs and integrated physicians to help guide your whole health journey',
    iconClassName: 'bg-yellow-400',
    containerClassName: 'animation-delay-500',
  },
  {
    icon: <GiHealthIncrease className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Focus on Whole Health',
    description:
      'Bodyweight exercises, kettlebell, yoga, guided meditation, breathwork and more! All can be done from your home',
    iconClassName: 'bg-sky-400',
    containerClassName: 'animation-delay-1000',
  },
  {
    icon: <GiInspiration className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Become an Inspiration',
    description:
      'A parent guide on how to incorporate well-being at home with children',
    iconClassName: 'bg-pink-400',
    containerClassName: 'animation-delay-1500',
  },
];
