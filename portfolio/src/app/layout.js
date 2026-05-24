import { Cormorant_Garamond, Libre_Baskerville, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Tanvir Hassan — Frontend Developer',
  description: 'Tanvir Hassan — Frontend Developer based in Dhaka, Bangladesh. Specialising in React and Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libreBaskerville.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
