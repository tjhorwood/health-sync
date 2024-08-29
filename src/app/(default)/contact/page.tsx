'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/discord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <>
      <section>
        <div className='mx-auto max-w-6xl px-4 sm:px-6'>
          <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
            {/* Section header */}
            <div className='mx-auto max-w-3xl pb-12 text-center md:pb-16'>
              <h2
                className='text-3xl font-extrabold leading-tighter tracking-tighter sm:text-4xl md:text-5xl'
                data-aos='zoom-y-out'
              >
                Have a question about{' '}
                <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
                  Health Sync
                </span>
                ? Contact us directly
              </h2>
            </div>

            {/* Contact form */}
            <form
              className='mx-auto max-w-xl'
              data-aos='zoom-y-out'
              data-aos-delay='150'
              onSubmit={handleSubmit}
            >
              <div className='-mx-3 mb-4 flex flex-wrap'>
                <div className='mb-4 w-full px-3 md:mb-0 md:w-1/2'>
                  <label
                    className='mb-1 block text-sm font-medium text-gray-800'
                    htmlFor='firstname'
                  >
                    First Name <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='firstname'
                    name='firstname'
                    placeholder='Enter your first name'
                    type='text'
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-full px-3 md:w-1/2'>
                  <label
                    className='mb-1 block text-sm font-medium text-gray-800'
                    htmlFor='lastname'
                  >
                    Last Name <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='lastname'
                    name='lastname'
                    placeholder='Enter your last name'
                    type='text'
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='-mx-3 mb-4 flex flex-wrap'>
                <div className='w-full px-3'>
                  <label
                    className='mb-1 block text-sm font-medium text-gray-800'
                    htmlFor='email'
                  >
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='-mx-3 mb-4 flex flex-wrap'>
                <div className='w-full px-3'>
                  <label
                    className='mb-1 block text-sm font-medium text-gray-800'
                    htmlFor='subject'
                  >
                    Subject <span className='text-red-600'>*</span>
                  </label>
                  <Input
                    id='subject'
                    name='subject'
                    placeholder='How can we help you?'
                    type='text'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='-mx-3 mb-4 flex flex-wrap'>
                <div className='w-full px-3'>
                  <label
                    className='mb-1 block text-sm font-medium text-gray-800'
                    htmlFor='message'
                  >
                    Message <span className='text-red-600'>*</span>
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    rows={4}
                    placeholder='Write your message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='-mx-3 mt-4 flex flex-wrap'>
                <div className='w-full px-3'>
                  <Button
                    type='submit'
                    size='lg'
                    className='text-md h-12 w-full'
                  >
                    Send
                  </Button>
                  <p>{status}</p>
                </div>
              </div>
              <div className='mt-4 text-sm text-gray-600'>
                By clicking &quot;send&quot; you consent to allow Health Sync to
                store and process the personal information submitted above and
                agree to our{' '}
                <Link href='/terms-conditions' className='underline'>
                  Terms & Conditions
                </Link>{' '}
                as well as our{' '}
                <Link href='/privacy' className='underline'>
                  Privacy Policy
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
