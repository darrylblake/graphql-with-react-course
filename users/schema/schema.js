const graphql = require("graphql");
const fetch = require("node-fetch");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
  { id: "23", firstname: "Bill", age: 20 },
  { id: "48", firstname: "Sam", age: 21 },
  { id: "8", firstname: "Ben", age: 98 }
];

const UserType = new GraphQLObjectType({
  name: "user",
  fields: {
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/users/${args.id}`).then(data =>
          data.json()
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
