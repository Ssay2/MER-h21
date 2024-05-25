import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;
