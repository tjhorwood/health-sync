import Hero from '@/components/about/hero';
import Team from '@/components/about/team';
import Vision from '@/components/about/vision';
import FAQs from '@/components/about/faq';

export const metadata = {
  title: 'About us - Health Sync',
  description: 'About us',
};

export default function About() {
  return (
    <>
      <section>
        <div className='mx-auto max-w-8xl px-4 sm:px-6'>
          <div className='space-y-14 pb-12 pt-28 md:pb-20'>
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
