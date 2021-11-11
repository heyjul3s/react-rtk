import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children, title }) {
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
