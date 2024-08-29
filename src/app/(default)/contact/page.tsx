'use client';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/discord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(
        response.ok ? 'Message sent successfully!' : 'Failed to send message.',
      );
      if (response.ok) setFormData(initialFormData);
    } catch (error) {
      setStatus(`An error occurred. Please try again. ${error}`);
    }
  };

  const renderField = (
    name: string,
    label: string,
    type = 'text',
    as: any = Input,
  ) => (
    <div
      className={`w-full px-3 ${['firstname', 'lastname'].includes(name) ? 'md:w-1/2' : ''}`}
    >
      <label
        className='mb-1 block text-sm font-medium text-gray-800'
        htmlFor={name}
      >
        {label} <span className='text-red-600'>*</span>
      </label>
      {React.createElement(as, {
        id: name,
        name,
        type,
        value: formData[name as keyof typeof formData],
        onChange: handleChange,
        required: true,
        placeholder: `Enter your ${name === 'subject' ? 'subject' : name}`,
        ...(name === 'message' ? { rows: 4 } : {}),
      })}
    </div>
  );

  return (
    <section className='mx-auto max-w-6xl px-4 sm:px-6'>
      <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
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

        <form
          className='mx-auto max-w-xl space-y-4'
          data-aos='zoom-y-out'
          data-aos-delay='150'
          onSubmit={handleSubmit}
        >
          <div className='-mx-3 flex flex-wrap space-y-4 md:space-y-0'>
            {renderField('firstname', 'First Name')}
            {renderField('lastname', 'Last Name')}
          </div>
          <div className='-mx-3 flex flex-wrap'>
            {renderField('email', 'Email', 'email')}
          </div>
          <div className='-mx-3 flex flex-wrap'>
            {renderField('subject', 'Subject')}
          </div>
          <div className='-mx-3 flex flex-wrap'>
            {renderField('message', 'Message', 'text', Textarea)}
          </div>
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <Button type='submit' size='lg' className='text-md h-12 w-full'>
                Send
              </Button>
              <p>{status}</p>
            </div>
          </div>
          <div className='mt-4 text-sm text-gray-600'>
            By clicking "send" you consent to allow Health Sync to store and
            process the personal information submitted above and agree to our{' '}
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
    </section>
  );
}
