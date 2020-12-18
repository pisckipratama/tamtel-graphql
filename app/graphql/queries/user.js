const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

const model = require('../../models/index');
const { userType } = require('../types/user');

exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: () => {
          const users = model.User.findAll({});
          if (!users) {
            throw new Error('Error')
          }
          return users;
        }
      }
    }
  }
})