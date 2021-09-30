import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query books {
    book {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const QUERY_USERS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
