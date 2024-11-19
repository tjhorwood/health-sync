import '@/styles/globals.css';

import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { Metadata } from 'next/types';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | Health Sync`,
    default: 'Health Sync',
  },
  description: 'Health Sync',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='preload' href='/images/logo.webp' as='image' />
        <link rel='preload' href='/images/laptop.webp' as='image' />
      </Head>
      <body
        className={`${poppins.variable} bg-white font-poppins tracking-tight text-gray-900 antialiased`}
      >
        <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
