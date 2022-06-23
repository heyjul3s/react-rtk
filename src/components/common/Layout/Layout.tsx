import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function Layout({ children, title }: ILayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.myapp.com.au/" />
      </Helmet>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
