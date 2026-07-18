import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { StoreProvider } from '@/store/provider';
import { ReactNode } from 'react';
import { Header, Footer } from '@/shared/components';

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
        <StoreProvider>
          <Header />

          <main className="main">{children}</main>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
