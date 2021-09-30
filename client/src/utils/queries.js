import { gql } from "@apollo/client";

//queries fetches data
//equivalent to GET calls

//fetches all the books with elements in model
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

//fetches all the uers with elements in model
export const QUERY_USERS = gql`
  query user($_id: String) {
    user(_id: $_id) {
      _id
      username
      email
      savedBooks
      bookCount #is fetching the bookCount for the toJSON virtual prop
    }
  }
`;
