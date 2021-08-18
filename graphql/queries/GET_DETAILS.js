import { gql } from '@apollo/client';

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
