import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import ToasterContext from '@/context/toast';
import Navbar from '@/components/navbar/Navbar';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebProgramming Final',
  description: 'Our final project for web programming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-tw">
      <body className={font.className}>
        <ToasterContext />
        <Navbar />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
