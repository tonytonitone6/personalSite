import {ApolloServer} from 'apollo-server'
import merge from 'lodash/merge'

import model from './models'
import {loadTypeSchema} from './utils/schema'

const port = process.env.PORT || 9001

const types = ['menu', 'profile']

export const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `

  await model.init()
  const allSchemaTypes = await Promise.all(types.map(loadTypeSchema))
  const [menu, profile] = await Promise.all([
    import('./types/menu/menu.resolvers').then(rs => rs.default),
    import('./types/profile/profile.resolvers').then(rs => rs.default),
  ])

  const server = new ApolloServer({
    cors: true,
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: merge({}, menu, profile),
    async context({req}) {
      return null
    },
  })
  const {url} = await server.listen({port})
  console.log(`Server is ready at ${url}`)
}
