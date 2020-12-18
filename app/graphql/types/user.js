const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      photo: {
        type: GraphQLString
      },
      is_admin: {
        type: GraphQLBoolean
      }
    }
  }
})