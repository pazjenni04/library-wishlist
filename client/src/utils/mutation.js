import { gql } from "@apollo/client";

//mutations modify server-side data
//equivalent to CUD (CREATE, UPDATE, DELETE) calls

//creates book with all model properties
export const CREATE_BOOK = gql`
  mutation createBook(
    $authors: String
    $description: String!
    $bookId: String!
    $image: String
    $link: String
    $title: String!
  ) {
    createBook(
      authors: $authors
      description: $description
      bookId: $bookId
      image: $image
      link: $link
      title: $title
    ) {
      authors
      description
      bookId
      image
      link
      title
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
      uesrname: $username
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
