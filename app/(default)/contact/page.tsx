import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: 'Contact - Health Sync',
  description: 'Contact us',
};

export default function Contact() {
  return (
    <>
      <section>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            {/* Section header */}
            <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
              <h1
                className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter'
                data-aos='zoom-y-out'
              >
                Have a question about{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400 to-75%'>
                  Health Sync
                </span>
                ? Contact us directly
              </h1>
            </div>

            {/* Contact form */}
            <form
              className='max-w-xl mx-auto'
              data-aos='zoom-y-out'
              data-aos-delay='150'
            >
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                  <label
                    className='block text-gray-800 text-sm font-medium mb-1'
                    htmlFor='firstname'
                  >
                    First Name <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='firstname'
                    placeholder='Enter your first name'
                    type='text'
                    required
                  />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block text-gray-800 text-sm font-medium mb-1'
                    htmlFor='lastname'
                  >
                    Last Name <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='lastname'
                    placeholder='Enter your last name'
                    type='text'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-800 text-sm font-medium mb-1'
                    htmlFor='email'
                  >
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='email'
                    placeholder='Enter your email address'
                    type='email'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-800 text-sm font-medium mb-1'
                    htmlFor='subject'
                  >
                    Subject <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='subject'
                    placeholder='How can we help you?'
                    type='text'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-800 text-sm font-medium mb-1'
                    htmlFor='message'
                  >
                    Message <span className='text-red-600'>*</span>
                  </label>
                  <Textarea
                    id='message'
                    rows={4}
                    placeholder='Write your message'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mt-4'>
                <div className='w-full px-3'>
                  <Button size='lg' className='w-full text-md h-12'>
                    Send
                  </Button>
                </div>
              </div>
              <div className='text-sm text-gray-600 mt-4'>
                By clicking &quot;send&quot; you consent to allow Health Sync to
                store and process the personal information submitted above and
                agree to our{' '}
                <a className='underline' href='#0'>
                  terms and conditions
                </a>{' '}
                as well as our{' '}
                <a className='underline' href='#0'>
                  Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
