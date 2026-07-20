import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { StoreProvider } from '@/store/provider';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Media Vault',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
