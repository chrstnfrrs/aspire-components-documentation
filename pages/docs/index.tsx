import React from 'react';
import { GetStaticProps } from 'next';

import { PlaceholderContainer } from '../../components/placeholders';
import { SideBarLayout } from '../../components/layouts/sidebar-layout';
import { getGraphqlClient } from '../../graphql/utils';
import { getComponentsForSidebar } from '../../repositories/components';

import { IComponentInfo } from 'types';

interface IDocsPage {
  components: [IComponentInfo];
}

const DocsPage: React.FC<IDocsPage> = (props) => {
  return (
    <SideBarLayout components={props.components}>
      <PlaceholderContainer>
        <strong>{'Aspire Components Documentation'}</strong>
        <p>{'Powered By Sanity.io'}</p>
      </PlaceholderContainer>
    </SideBarLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const components = await getComponentsForSidebar(client);

  return {
    props: {
      components,
    },
  };
};

export default DocsPage;
