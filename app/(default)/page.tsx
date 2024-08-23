import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import FeaturesBlocks from '@/components/features-blocks';
import FeaturesWorld from '@/components/features-world';
import News from '@/components/news';
import Cta from '@/components/cta';
import { LaptopVideo } from '@/components/home/laptop-video';

export const metadata = {
  title: 'Health Sync',
  description: 'Welcome to Health Sync',
};

export default function Home() {
  return (
    <>
      <Hero />
      <LaptopVideo />
      <Features />
      <FeaturesBlocks />
      <FeaturesWorld />
      <News />
      <Cta />
    </>
  );
}
