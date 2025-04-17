// src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        {/* 👇 força o título e a descrição */}
        <title>Marco Paiva · Portfolio</title>
        <meta
          name="description"
          content="Portfólio de Marco Paiva – Designer UI/UX e Full‑Stack Developer."
        />
        {/* se usares Google Fonts manualmente, deixa aqui; caso contrário remove */}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
