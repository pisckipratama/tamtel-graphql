const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('*', cors());

const { userSchema } = require('./app/graphql/index');
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}))

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`GraphQL running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
