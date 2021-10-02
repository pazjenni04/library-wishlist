const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [STRING]
    description: STRING!
    bookId: STRING!
    image: STRING
    link: STRING
    title: STRING!
  }

  type User {
    _id: ID!
    username: STRING!
    email: STRING!
    password: STRING!
    savedBooks: [Book]
  }

  type Auth {
    token: STRING
    user: [User]
  }

  type Query {
    me: [User]
  }

  type Mutation {
    createBook(
      authors: STRING
      description: STRING
      bookId: ID!
      image: STRING
      link: STRING
      title: STRING
    ): Book
    createUser(
      _id: ID!
      username: STRING!
      email: STRING!
      password: STRING!
    ): Auth
    deleteBook(bookId: STRING!): User
    savedBooks(
      authors: [STRING]
      description: STRING!
      title: STRING!
      bookId: STRING!
      image: STRING
      link: STRING
    ): User
  }
`;

modeule.exports = typeDefs;
