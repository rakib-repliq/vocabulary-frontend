import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';

import TanstackProvider from '@/providers/TanstackProvider';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Vocabulary Builder',
  description: 'A simple vocabulary builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
