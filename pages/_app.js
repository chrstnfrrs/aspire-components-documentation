import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AHeading, ALink, ANav, ABox, ASection } from 'aspire-components-react';

import '../globals.css';

const theme = {
  background: {
    tertiary: '#EAECEF',
  },
};

const AppNavigation = () => {
  const navStyles = {
    border: `1px solid ${theme.background.tertiary}`,
  };

  return (
    <ANav style={navStyles}>
      <ALink href="/" size="20" weight="bold">
        {'Aspire Components'}
      </ALink>
      <ALink href="/docs">{'Documentation'}</ALink>
    </ANav>
  );
};

const AppSideBar = () => {
  const styles = {
    border: `1px solid ${theme.background.tertiary}`,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxWidth: '256px',
    minWidth: '256px',
    padding: '32px',
    position: 'relative',
    width: '256px',
  };

  const listStyles = {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    wordWrap: 'break-word',
  };

  const linkHeading = {
    padding: '0.875rem 0',
  };

  return (
    <div style={styles}>
      <ASection style={listStyles}>
        <ALink href="/docs/layout" style={linkHeading}>
          <AHeading type="h6">{'Layout'}</AHeading>
        </ALink>
        <ALink href="/docs/layout/a-box">{'ABox'}</ALink>
        <ALink href="/docs/layout/a-container">{'AContainer'}</ALink>
        <ALink href="/docs/layout/a-heading">{'AHeader'}</ALink>
        <ALink href="/docs/layout/a-nav">{'ANav'}</ALink>
        <ALink href="/docs/layout/a-section">{'ASection'}</ALink>
      </ASection>
      <ASection style={listStyles}>
        <AHeading type="h6">{'Text'}</AHeading>
        <ALink href="/a-link">{'ALink'}</ALink>
        <ALink href="/a-text">{'AText'}</ALink>
      </ASection>
      <ASection style={listStyles}>
        <AHeading type="h6">{'Forms'}</AHeading>
        <ALink href="/a-input">{'AInput'}</ALink>
      </ASection>
      <ASection style={listStyles}>
        <AHeading type="h6">{'Basics'}</AHeading>
        <ALink href="/a-btn">{'ABtn'}</ALink>
      </ASection>
      <ASection style={listStyles}>
        <AHeading type="h6">{'Blocks'}</AHeading>
        <ALink href="/a-hero">{'AHero'}</ALink>
      </ASection>
      <ASection style={listStyles}>
        <AHeading type="h6">{'Functions'}</AHeading>
        <ALink href="/theming">{'Theming'}</ALink>
      </ASection>
    </div>
  );
};

const App = ({ Component, pageProps }) => {
  const bodyStyles = {
    border: `1px solid ${theme.background.tertiary}`,
    padding: '32px',
    width: '100%',
  };
  const router = useRouter();

  const isDocsPage = router.route.includes('docs');

  return (
    <>
      <Head>
        <title>{'Aspire Components'}</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta
          content="This is an example of a meta description. 
          This will often show up in search results."
          name="description"
        />
      </Head>
      <AppNavigation />
      <div style={{ display: 'flex' }}>
        {isDocsPage && <AppSideBar />}
        <main style={bodyStyles}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default App;
