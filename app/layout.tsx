import './css/style.css';

import { Poppins } from 'next/font/google';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

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
        className={`${poppins.variable} font-poppins antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
