import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';

export const getComponentsForSidebar = async (
  client: ApolloClient<NormalizedCacheObject>,
) => {
  const { data } = await client.query({
    query: gql`
      query allComponent {
        allComponent {
          name
          category
        }
      }
    `,
    variables: {
      route: '/',
    },
  });

  return data.allComponent;
};
