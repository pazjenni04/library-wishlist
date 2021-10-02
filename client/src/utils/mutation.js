import { gql } from "@apollo/client";

//mutations modify server-side data
//equivalent to CUD (CREATE, UPDATE, DELETE) calls

//saves book with all model properties
export const SAVED_BOOKS = gql`
  mutation savedBooks($bookId: bookId!) {
    user {
      _id
      username
      email
    }
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

//deletes a book
export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      user {
        _id
        username
        email
      }
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

//creates new user with bookschema

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: Sting!
    $password: String!
    $savedBooks: [bookSchema]
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      savedBooks: $savedBooks
    ) {
      username
      email
      password
      savedBooks
    }
  }
`;

//allows login for user
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $email: String!, $password: String!) {
    loginUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;
