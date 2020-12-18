const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const { userType } = require('../types/user');
const model = require('../../models/index');

exports.registerUser = {
  type: userType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    photo: {
      type: GraphQLString
    },
    is_admin: {
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  },
  resolve(root, params) {
    const newUser = model.User.create(params);
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser;
  }
}