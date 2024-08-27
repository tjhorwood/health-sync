'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Comments from '@/public/images/comments.png';
import Menu from '@/public/images/menu.webp';
import Screen from '@/public/images/screen.webp';
import GradientCircle from '@/public/images/gradientcircle.webp';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FaThumbsUp, FaCheck } from 'react-icons/fa';
import { GiHealthIncrease, GiInspiration } from 'react-icons/gi';
import { cn } from '@/lib/utils';

const FeatureItem = ({
  icon,
  color,
  title,
  description,
  containerClassName,
  iconClassName,
}: any) => (
  <div
    className={cn(
      `flex flex-col items-center h-full w-full transform lg:animate-float lg:odd:pt-10 lg:even:pb-10`,
      containerClassName,
    )}
  >
    <div
      className={cn(
        `w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 shadow-lg`,
        iconClassName,
      )}
    >
      {icon}
    </div>
    <div className='bg-white rounded-lg p-4 shadow-md w-full max-w-full flex flex-col justify-start flex-grow lg:text-center'>
      <h3 className='font-bold text-lg lg:text-xl mb-3'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className='relative bg-gray-100  rounded-2xl shadow'>
      <div className='relative max-w-8xl mx-auto px-4'>
        <div className='py-10 md:py-16 space-y-6'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-6 md:pb-8'>
            <h2 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter'>
              Why Choose{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400 to-75%'>
                Us
              </span>
              ?
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
    icon: <FaThumbsUp className='h-10 w-10 lg:h-12 lg:w-12 text-white' />,
    title: 'Simple to Use',
    iconClassName: 'bg-emerald-400',
    description: 'Simple to use interface which has fresh daily content everyday!'
  },
  {
    icon: <FaCheck className='h-10 w-10 lg:h-12 lg:w-12 text-white' />,
    title: 'Health Insurance Approved',
    description: 'Reimbursement approved fitness programs and integrated physicians to help guide your whole health journey',
    iconClassName: 'bg-yellow-400',
    containerClassName: 'animation-delay-500'
  },
  {
    icon: <GiHealthIncrease className='h-10 w-10 lg:h-12 lg:w-12 text-white' />,
    title: 'Focus on Whole Health',
    description: 'Bodyweight exercises, kettlebell, yoga, guided meditation, breathwork and more! All can be done from your home',
    iconClassName: 'bg-sky-400',
    containerClassName: 'animation-delay-1000'
  },
  {
    icon: <GiInspiration className='h-10 w-10 lg:h-12 lg:w-12 text-white' />,
    title: 'Become an Inspiration',
    description: 'A parent guide on how to incorporate well-being at home with children',
    iconClassName: 'bg-pink-400',
    containerClassName: 'animation-delay-1500'
  },
]