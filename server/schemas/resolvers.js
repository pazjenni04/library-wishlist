//function that gets the data for the request
//houses all crud operations

const { User, Book } = require("../models");

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
      return user;
    },
    //searches for user with login credentials
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({
        $or: [{ username: body.username }, { email: body.email }],
      });
      if (!user) {
        throw new Error("No user found");
      }

      const correctPw = await user.isCorrectPassword(body.password);

      if (!correctPw) {
        throw new Error("No user found");
      }
      const token = signToken(user);
      return { token, user };
    },

    //create delete mutation
  },
};
