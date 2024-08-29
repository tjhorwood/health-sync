import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export default function FAQs() {
  return (
    <div className='relative mx-auto max-w-7xl px-2 text-center'>
      <div className='py-10 md:py-14' data-aos='zoom-y-out'>
        <h2 className='text-3xl font-bold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'>
          Frequently Asked{' '}
          <span className='bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>
            Questions
          </span>
        </h2>
      </div>
      <div>
        <Accordion
          type='single'
          collapsible
          className='w-full space-y-6 lg:space-y-10'
          data-aos='zoom-y-out'
        >
          {accordionItems.map((item, itemIdx) => (
            <AccordionItem
              value={item.label}
              key={itemIdx}
              className={cn(
                itemIdx === 1 ? 'lg:pl-32' : 'lg:pr-32',
                'w-full border-none',
              )}
            >
              <AccordionTrigger className='rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 px-4 text-left text-lg font-medium text-white md:text-xl lg:px-6 lg:text-2xl'>
                {item.label}
              </AccordionTrigger>
              <AccordionContent className='px-6 pt-6 text-left md:text-lg'>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const accordionItems = [
  {
    label: 'How does this app work?',
    content:
      'The app is running like any other program on your computer. Except the big difference from our competitors, we do not collect ANY of your data, location or history. It only uses what information you give it to improve your health journey!',
  },
  {
    label: 'How does work with my insurance?',
    content:
      'If you are currently covered under the Anthem Blue Cross Blue Shield umbrella, this directly connects to your Sydney health profile and allows you to have seamless integration of this app with your available benefits.',
  },
  {
    label: 'How can I maximize the benefits of this app?',
    content:
      'Follow the 80 / 20 rule! Eat healthy, get adequate sleep, reduce alcohol consumption and make an effort to get your daily sunlight outside! Bonus points of removing products from your house which contain forever chemicals and other banned ingredients in most countries.',
  },
];
