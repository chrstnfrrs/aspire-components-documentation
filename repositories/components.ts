import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { AllComponentDocument } from '../graphql/generated';

export const getComponentsForSidebar = async (
  client: ApolloClient<NormalizedCacheObject>,
) => {
  const { data } = await client.query({
    query: AllComponentDocument,
    variables: {
      route: '/',
    },
  });

  return data.allComponent;
};
