import type { Metadata } from 'next';
import { StoreProvider } from '@/store/provider';
import React from 'react';

export const metadata: Metadata = {
  title: 'Media Vault',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
