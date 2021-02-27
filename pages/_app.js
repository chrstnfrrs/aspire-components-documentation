import React from 'react';
import { AHeading, ALink, ANav, AText } from 'aspire-components-react';

import '../globals.css';

const theme = {
  text: {
    primary: '#101010',
  },
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
      <ALink href={'/'} size={'20'}>
        Aspire Components
      </ALink>
    </ANav>
  );
};

const AppSideBar = () => {
  const styles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '256px',
    minWidth: '256px',
    maxWidth: '256px',
    border: `1px solid ${theme.background.tertiary}`,
    height: '100%',
    padding: '32px',
  };

  const listStyles = {
    display: 'flex',
    flexDirection: 'column',
    wordWrap: 'break-word',
  };

  return (
    <div style={styles}>
      <AHeading type={'subtitle-1'}>Layout</AHeading>
      <ul style={listStyles}>
        <ALink href={'/a-box'}>ABox</ALink>
        <ALink href={'/a-container'}>AContainer</ALink>
        <ALink href={'/a-heading'}>AHeader</ALink>
        <ALink href={'/a-nav'}>ANav</ALink>
        <ALink href={'/a-section'}>ASection</ALink>
      </ul>
      <AHeading type={'subtitle-1'}>Text</AHeading>
      <ul>
        <ALink href={'/a-link'}>ALink</ALink>
        <ALink href={'/a-text'}>AText</ALink>
      </ul>
      <AHeading type={'subtitle-1'}>Forms</AHeading>
      <ul>
        <ALink href={'/a-input'}>AInput</ALink>
      </ul>
      <AHeading type={'subtitle-1'}>Basics</AHeading>
      <ul>
        <ALink href={'/a-btn'}>ABtn</ALink>
      </ul>
      <AHeading type={'subtitle-1'}>Blocks</AHeading>
      <ul>
        <ALink href={'/a-hero'}>AHero</ALink>
      </ul>
      <AHeading type={'subtitle-1'}>Functions</AHeading>
      <ul>
        <ALink href={'/theming'}>Theming</ALink>
      </ul>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const bodyStyles = {
    border: `1px solid ${theme.background.tertiary}`,
    width: '100%',
    padding: '32px',
  };

  return (
    <>
      <AppNavigation />
      <div style={{ display: 'flex' }}>
        <AppSideBar />
        <div style={bodyStyles}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
