import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { DetailsMutations } from '../graphql/mutations/ADD_DETAILS';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      ...DetailsMutations,
    },
  },
});
const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
  developer: false,
};
cache.writeData({ data: initialState });
export default client;
