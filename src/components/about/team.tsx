import Image from 'next/image';

import GradientText from '@/components/ui/gradient-text';
import { team } from '@/lib/data';

export default function Team() {
  return (
    <div className='bg-white py-10'>
      <div className='mx-auto px-2 text-center'>
        <h2
          className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'
          data-aos='zoom-y-out'
        >
          Meet The <GradientText>Team</GradientText>
        </h2>
        <ul
          className='mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-16 md:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4'
          data-aos='zoom-y-out'
        >
          {team.map(({ name, role, image }) => (
            <li key={name}>
              <Image
                src={image}
                alt={name}
                width={224}
                height={224}
                className='mx-auto scale-[1.1] rounded-full md:scale-[1.3]'
              />
              <h3 className='mt-2 text-lg font-semibold leading-7 tracking-tight text-gray-900 md:text-xl'>
                {name}
              </h3>
              <p className='leading-6'>{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
