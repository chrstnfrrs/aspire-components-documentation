import React from 'react';
import { GetStaticProps } from 'next';

import { PlaceholderContainer, PlaceholderSection, PlaceholderTable, PlaceholderTableRow, PlaceholderTableHeader, PlaceholderTableItem } from '../../../components/placeholders';
import { SideBarLayout } from '../../../components/layouts/sidebar-layout';
import { getGraphqlClient } from '../../../graphql/utils';
import { getComponentForPage, getComponentsForSidebar } from '../../../repositories/components';

import { IComponentInfo } from 'types';
import { convertPascalToKebab } from 'utils/convert-case';
import { Component } from 'graphql/generated';
// import { PreviewComponent } from '../../../components/PreviewComponent';

interface IDocsPage {
  components: [IComponentInfo];
  component: Component
}

const SectionProps: React.FC<IDocsPage>  = (props) => (
  <PlaceholderSection>
    <h2>{'Props'}</h2>
    <PlaceholderTable>
      <PlaceholderTableRow>
        <PlaceholderTableHeader>{'Field'}</PlaceholderTableHeader>
        <PlaceholderTableHeader>{'Type'}</PlaceholderTableHeader>
        <PlaceholderTableHeader>{'Default'}</PlaceholderTableHeader>
        <PlaceholderTableHeader>{'Description'}</PlaceholderTableHeader>
      </PlaceholderTableRow>
      {props.component.props?.map((prop) => {
        return (
          <PlaceholderTableRow>
            <PlaceholderTableItem>{prop?.name}</PlaceholderTableItem>
            <PlaceholderTableItem>{'string'}</PlaceholderTableItem>
            <PlaceholderTableItem>{null}</PlaceholderTableItem>
            <PlaceholderTableItem>{'prop description...'}</PlaceholderTableItem>
          </PlaceholderTableRow>
        )
      })}
    </PlaceholderTable>
    </PlaceholderSection>
)

const DocsComponentPage: React.FC<IDocsPage> = (props) => {
  return (
    <SideBarLayout components={props.components}>
      <PlaceholderContainer>
        <h1>{props.component.name}</h1>
        <p>Description...</p>
        {/* <h2>Usage</h2>
        <PreviewComponent component={props.component}/> */}
        <SectionProps {...props} />
      </PlaceholderContainer>
    </SideBarLayout>
  );
};

const getStaticPaths = async () => {
  const client = getGraphqlClient();
  const components = await getComponentsForSidebar(client);

  const paths = components.map((component: IComponentInfo) => ({
    params: {
      category: component.category,
      component: convertPascalToKebab(component.name),
    },
  }));

  return {
    fallback: false, // See the "fallback" section below
    paths,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getGraphqlClient();
  const components = await getComponentsForSidebar(client);
  const component = await getComponentForPage(client, params?.component as string);

  return {
    props: {
      components,
      component,
    },
  };
};

export { getStaticPaths, getStaticProps };

export default DocsComponentPage;
