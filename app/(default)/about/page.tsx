import { Button } from '@/components/ui/button';
import Hero from '@/components/about/hero';
import Team from '@/components/about/team';
import Vision from '@/components/about/vision';
import FAQs from '@/components/about/faq';

export const metadata = {
  title: 'About - Health Sync',
  description: 'About us',
};

export default function About() {
  return (
    <>
      <section>
        <div className='max-w-8xl mx-auto px-4 sm:px-6'>
          <div className='pt-32 pb-12 md:pb-20 space-y-14'>
            <Hero />
            <Team />
            <Vision />
            <FAQs />
          </div>
        </div>
      </section>
    </>
  );
}
