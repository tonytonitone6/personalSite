import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'unfetch';

const { API_URI: endpintURL} = process.env || 3000;

export const client = new ApolloClient({
  link: createHttpLink({
    uri: endpintURL, 
    fetch
  }),
  cache: new InMemoryCache()
});

