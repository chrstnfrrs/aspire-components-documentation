import React from 'react';
import { GetStaticProps } from 'next';

import { PlaceholderContainer } from '../../../components/placeholders';
import { SideBarLayout } from '../../../components/layouts/sidebar-layout';
import { getGraphqlClient } from '../../../graphql/utils';
import { getComponentsForSidebar } from '../../../repositories/components';

import { IComponentInfo } from 'types';

interface IDocsPage {
  components: [IComponentInfo];
}

const DocsComponentPage: React.FC<IDocsPage> = (props) => {
  return (
    <SideBarLayout components={props.components}>
      <PlaceholderContainer>
        <strong>{'Aspire Components Component Documentation'}</strong>
        <p>{'Powered By Sanity.io'}</p>
      </PlaceholderContainer>
    </SideBarLayout>
  );
};

const getStaticPaths = () => {
  return {
    fallback: false, // See the "fallback" section below
    paths: [
      {
        params: {
          category: 'layout',
          component: 'a-container',
        },
      },
    ],
  };
};

const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const components = await getComponentsForSidebar(client);

  return {
    props: {
      components,
    },
  };
};

export { getStaticPaths, getStaticProps };

export default DocsComponentPage;
