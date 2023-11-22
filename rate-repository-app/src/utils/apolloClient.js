import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
console.log(Constants.manifest.extra.apolloUri)
const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
  // uri:"http://192.168.100.251:4000/graphql"
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;