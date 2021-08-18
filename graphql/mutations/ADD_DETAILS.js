import { gql } from '@apollo/client';
import { GET_DETAILS } from '../queries/GET_DETAILS';

export const ADD_DETAILS = gql`
  mutation AddDetails(
    $firstName: String
    $lastName: String
    $address: String
    $phone: String
    $email: String
    $developer: Boolean
  ) {
    addDetails(
      firstName: $firstName
      lastName: $lastName
      address: $address
      phone: $phone
      email: $email
      developer: $developer
    ) @client
  }
`;

export const DetailsMutations = {
  addDetails: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_DETAILS });

    const newDetails = { ...data, ...variables };
    cache.writeData({
      data: { ...newDetails },
    });
    return null;
  },
};
