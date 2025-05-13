import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create our Apollo Client instance
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api", // The GraphQL endpoint
  cache: new InMemoryCache(), // Apollo's caching system
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
