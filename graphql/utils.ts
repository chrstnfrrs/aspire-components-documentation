import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject>;

export const getGraphqlClient = (): ApolloClient<NormalizedCacheObject> => {
  if (!client) {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: process.env.SANITY_URL,
    });
  }

  return client;
};
