// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email,
       address {
        geo {
            lat
            lng
        }
      }
    }
  }
`;
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;