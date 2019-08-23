import { ApolloServer } from 'apollo-server';
import merge from 'lodash/merge';

import model from './models';
import { loadTypeSchema } from './utils/schema';
import menu from './types/menu/menu.resolvers';
import profile from './types/profile/profile.resolvers';

const port = process.env.PORT || 9000;

const types = ['menu', 'profile'];

export const start = async () => {

  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `

  const allSchemaTypes = await Promise.all(types.map(loadTypeSchema))

  model.init();
  const server = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: merge({}, menu, profile),
    async context({ req }) {
      return null;
    }
  });
  
  const { url } = await server.listen({ port });

  console.log(`Server is ready at ${url}`);
}




