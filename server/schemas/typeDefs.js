const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: String
    user: [User]
  }

  type Query {
    user: User
  }

  type Mutation {
    createBook(
      authors: String
      description: String
      bookId: ID!
      image: String
      link: String
      title: String
    ): Book
    createUser(
      _id: ID!
      username: String!
      email: String!
      password: String!
    ): Auth
    loginUser(
      _id: ID!
      username: String!
      email: String!
      password: String!
    ): Auth
    deleteBook(bookId: String!): User
    savedBooks(
      authors: [String]
      description: String!
      title: String!
      bookId: String!
      image: String
      link: String
    ): User
  }
`;

module.exports = typeDefs;
