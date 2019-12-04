import {ApolloServer} from 'apollo-server-express'
import merge from 'lodash/merge'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import model from './models'
import {loadTypeSchema} from './utils/schema'
const app = express()
const port = process.env.PORT || 9001

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

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
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: merge({}, menu, profile),
    async context({req}) {
      return null
    },
  })

  server.applyMiddleware({app})

  // const {url} = await app.listen({port})
  // console.log(`Server is ready at ${url}`)
  app.listen({port: 9001}, () =>
    console.log(`server port is ${port} ${server.graphqlPath}`),
  )
}
