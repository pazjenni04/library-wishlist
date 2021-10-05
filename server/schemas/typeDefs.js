const { gql } = require("apollo-server-express");

// typeDefs shoud match resolvers
//defines on the server the structure the data will be in
//menu of what's available to the client

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
    books: [Book]
  }

  type Mutation {
    #createBook(
    #authors: String
    #description: String
    #bookId: ID!
    #image: String
    #link: String
    #title: String
    #): Book
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
