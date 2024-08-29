'use client';
import { FaCheck, FaThumbsUp } from 'react-icons/fa';
import { GiHealthIncrease, GiInspiration } from 'react-icons/gi';

import GradientText from '@/components/ui/gradient-text';
import { cn } from '@/lib/utils';

const FeatureItem = ({
  icon,
  title,
  description,
  containerClassName,
  iconClassName,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  containerClassName?: string;
  iconClassName?: string;
}) => (
  <div
    className={cn(
      `flex h-full w-full flex-col items-center lg:animate-float lg:odd:pt-10 lg:even:pb-10`,
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
    <div className='flex-grow rounded-lg bg-white p-4 shadow-md lg:text-center'>
      <h3 className='mb-3 text-lg font-bold lg:text-xl'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

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

export default function Features() {
  return (
    <section className='relative rounded-2xl bg-gray-100 shadow' id='features'>
      <div className='mx-auto max-w-8xl px-4 py-10 md:py-16'>
        <h2 className='mb-10 text-center text-3xl font-extrabold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
          Why Choose <GradientText>Us</GradientText>?
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
