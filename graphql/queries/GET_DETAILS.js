import { gql } from 'graphql-tag';

export const GET_DETAILS = gql`
  query getDetails {
    firstName @client
    lastName @client
    address @client
    phone @client
    email @client
    developer @client
  }
`;
