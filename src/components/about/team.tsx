import Image from 'next/image';
import Matt from '@/images/matt.webp';
import Taylor from '@/images/taylor.webp';
import Don from '@/images/don.webp';
import Aishwarya from '@/images/aishwarya.webp';

export default function Team() {
  return (
    <div className='bg-white py-10'>
      <div className='mx-auto max-w-8xl px-2 text-center'>
        <div className='mx-auto' data-aos='zoom-y-out'>
          <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
            Meet The{' '}
            <span className='bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>
              Team
            </span>
          </h2>
        </div>
        <ul
          role='list'
          className='mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-16 md:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4'
          data-aos='zoom-y-out'
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                src={person.image}
                alt={person.name}
                width={224}
                height={224}
                className='mx-auto scale-[1.1] rounded-full md:scale-[1.2]'
              />
              <h3 className='mt-2 text-lg font-semibold leading-7 tracking-tight text-gray-900 md:text-xl'>
                {person.name}
              </h3>
              <p className='leading-6'>{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const people = [
  {
    name: 'Matthew Beam',
    role: 'Business Strategy',
    image: Matt,
  },
  {
    name: 'Taylor Horwood',
    role: 'Technology',
    image: Taylor,
  },
  {
    name: 'Don Beam, MS, LPC',
    role: 'Exercise Strategy and Wellness',
    image: Don,
  },
  {
    name: 'Aishwarya Sahu',
    role: 'Yoga / Mindfullness Instructor',
    image: Aishwarya,
  },
];
