import type { Metadata } from 'next';

import { TrpcClientProvider } from '@/trpc/trpc-client';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Made with Next.js, Netlify Functions and tRPC',
  title: 'Netlify Cache Example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcClientProvider headers={headers()}>{children}</TrpcClientProvider>
      </body>
    </html>
  );
}
