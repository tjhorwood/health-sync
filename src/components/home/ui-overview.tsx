import Image from 'next/image';

import Comments from '@/images/comments.png';
import Menu from '@/images/menu.webp';
import Screen from '@/images/screen.webp';

export default function UIOverview() {
  return (
    <div className='relative -mb-24 mt-28 px-4'>
      {/* Main tablet interface */}
      <div className='relative mx-auto max-w-5xl'>
        <Image src={Screen} alt='Health Sync Interface' />
      </div>

      {/* Left side notifications */}
      <div className='animation-delay-1000 absolute left-[5%] top-1/4 hidden max-w-sm transform animate-float space-y-2 sm:block md:space-y-4'>
        <Image src={Comments} alt='New Juice Recipe' />
      </div>

      {/* Right side menu */}
      <div className='absolute right-[10%] top-0 hidden max-w-sm transform animate-float sm:block'>
        <Image src={Menu} alt='Side Menu' />
      </div>
    </div>
  );
}
