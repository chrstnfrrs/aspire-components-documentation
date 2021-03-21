import React from 'react';
import type { AppProps } from 'next/app';

import { PlaceholderNav, PlaceholderLink } from '../components/placeholders';
import '../globals.css';

const AppLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <PlaceholderNav aria-labelledby='application'>
      <PlaceholderLink href='/'>{'Aspire Components'}</PlaceholderLink>
      <PlaceholderLink href='/docs'>{'Documentation'}</PlaceholderLink>
    </PlaceholderNav>
    <Component {...pageProps} />
  </>
);

export default AppLayout;
