import { useMemo } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GradientText from '@/components/ui/gradient-text';
import { faqData } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function FAQs() {
  const renderedAccordionItems = useMemo(
    () =>
      faqData.map(({ label, content }, idx) => (
        <AccordionItem
          value={label}
          key={idx}
          className={cn(
            idx === 1 ? 'lg:pl-32' : 'lg:pr-32',
            'w-full border-none',
          )}
        >
          <AccordionTrigger className='rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 px-4 text-left text-lg font-semibold text-white md:text-xl lg:px-6'>
            {label}
          </AccordionTrigger>
          <AccordionContent className='px-6 pt-6 text-left md:text-lg'>
            {content}
          </AccordionContent>
        </AccordionItem>
      )),
    [],
  );

  return (
    <section className='relative mx-auto px-2 text-center'>
      <div className='py-10 md:py-14' data-aos='zoom-y-out'>
        <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
          Frequently Asked <GradientText>Questions</GradientText>
        </h2>
      </div>
      <Accordion
        type='single'
        collapsible
        className='w-full space-y-6 lg:space-y-10'
        data-aos='zoom-y-out'
      >
        {renderedAccordionItems}
      </Accordion>
    </section>
  );
}
