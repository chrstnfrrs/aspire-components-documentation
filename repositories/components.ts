import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { convertKebabToPascal } from '../utils/convert-case';
import { GetComponentsListDocument, GetComponentDocument } from '../graphql/generated';

const getComponentForPage = async (
  client: ApolloClient<NormalizedCacheObject>,
  route: string
) => {
  const { data } = await client.query({
    query: GetComponentDocument,
    variables: {
      name: convertKebabToPascal(route)
    }
  })

  return data.allComponent[0]
}

const getComponentsForSidebar = async (
  client: ApolloClient<NormalizedCacheObject>,
) => {
  const { data } = await client.query({
    query: GetComponentsListDocument,
  });

  return data.allComponent;
};

export {
  getComponentForPage,
  getComponentsForSidebar,
}
