import '@/styles/globals.css';

import { Poppins } from 'next/font/google';

import MatomoTracker from '@/components/matomo-analytics';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} bg-white font-poppins tracking-tight text-gray-900 antialiased`}
      >
        <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <Header />
          {children}
          <Footer />
        </div>
        <MatomoTracker />
      </body>
    </html>
  );
}
