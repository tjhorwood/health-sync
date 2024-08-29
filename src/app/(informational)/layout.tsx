'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

export default function InformationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <main className='grow'>{children}</main>
    </>
  );
}
