import { Footer, Header } from '@/shared/components';
import React from 'react';

export default function PublicLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
