import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const endpintURL = 'http://localhost:9000'

export const client = new ApolloClient({
  link: new HttpLink({uri: endpintURL}),
  cache: new InMemoryCache()
});

