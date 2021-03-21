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

const DocsCategoryPage: React.FC<IDocsPage> = (props) => {
  return (
    <SideBarLayout components={props.components}>
      <PlaceholderContainer>
        <strong>{'Aspire Components Category Documentation'}</strong>
        <p>{'Powered By Sanity.io'}</p>
      </PlaceholderContainer>
    </SideBarLayout>
  );
};

const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          category: 'layout'
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

export default DocsCategoryPage;
