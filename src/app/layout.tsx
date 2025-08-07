// src/app/layout.tsx
import './globals.css';
import { Geist } from 'next/font/google';
import Providers from '../utils/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BrainSprint',
  description: 'Sharpen Your Coding Skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
