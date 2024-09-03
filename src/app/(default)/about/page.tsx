import { Metadata } from 'next';

import FAQs from '@/components/about/faq';
import Hero from '@/components/about/hero';
import Team from '@/components/about/team';
import Vision from '@/components/about/vision';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn more about Health Sync's mission to improve health and wellness through innovative solutions. Discover our commitment to helping you achieve a healthier lifestyle. Meet the dedicated team behind Health Sync.",
};

export default function About() {
  return (
    <section>
      <div className='mx-auto max-w-9xl px-4 sm:px-6'>
        <div className='space-y-14 pb-12 pt-28 md:pb-20 lg:space-y-20'>
          <Hero />
          <Team />
          <Vision />
          <FAQs />
        </div>
      </div>
    </section>
  );
}
