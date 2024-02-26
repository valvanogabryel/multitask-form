import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MultiTask Form',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
      </head>
      <body
        className={`${ubuntu.className} flex justify-center items-center w-full bg-magnolia h-screen overflow-x-hidden relative antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
