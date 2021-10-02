//function that gets the data for the request
//houses all crud operations
const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //finding one user
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find({ params });
    },
  },
  Mutation: {
    //creates a new user
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    //searches for user with login credentials
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({
        $or: [{ username: body.username }, { email: body.email }],
      });
      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const correctPw = await user.isCorrectPassword(body.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password!");
      }
      const token = signToken(user);
      return { token, user };
    },

    //create delete mutation
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const bookRemoved = await Book.findByIdAndDelete({ bookId });
        return bookRemoved;
      }
      throw new AuthenticationError("Login required");
    },

    //create mutation to save a book
    savedBooks: async (parent, args, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: args.bookId } },
          { new: true }
        );
        return updateUser;
      }
      throw new AuthenticationError("Login required");
    },
  },
};

module.exports = resolvers;
