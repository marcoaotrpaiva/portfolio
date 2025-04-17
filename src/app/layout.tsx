// src/app/layout.tsxa
import { Montserrat } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'], 
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  // título padrão
  title: 'Marco Paiva · Portfolio',
  description:
    'Portfólio de Marco Paiva — Designer UI/UX e Full‑Stack Developer.',
  icons: { icon: '/favicon.ico' },      // opcional
};
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={montserrat.variable}>
      <head>
      <title>Marco Paiva · Portfolio</title>
      <meta
           name="description"
           content="Portfólio de Marco Paiva – Designer UI/UX e Full‑Stack Developer."
         />
      </head>
      <body>{children}</body>
    </html>
  );
  
}
