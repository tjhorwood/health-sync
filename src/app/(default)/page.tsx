import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import Interface from '@/components/home/interface';
import LaptopVideo from '@/components/home/laptop-video';
import Revitalize from '@/components/home/revitalize';
import UIOverview from '@/components/home/ui-overview';

export default function Home() {
  return (
    <div className='mx-auto max-w-9xl space-y-10'>
      <Hero />
      <LaptopVideo />
      <Features />
      <div>
        <UIOverview />
        <Revitalize />
      </div>
      <Interface />
    </div>
  );
}
