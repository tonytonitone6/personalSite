import { ApolloServer } from 'apollo-server';
import merge from 'lodash/merge';

import { loadTypeSchema } from './utils/schema';
import menu from './types/menu/menu.resolvers';

const port = process.env.PORT || 9000;

const types = ['menu'];

export const start = async () => {

  const rootSchema = `
    schema {
      query: Query
    }
  `

  const allSchemaTypes = await Promise.all(types.map(loadTypeSchema))


  const server = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: merge({}, menu),
    async context({ req }) {
      return null;
    }
  });
  
  const { url } = await server.listen({ port });

  console.log(`Server is ready at ${url}`);
}



