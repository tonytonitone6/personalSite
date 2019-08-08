"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _apolloServer = require("apollo-server");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _schema = require("./utils/schema");

var _menu = _interopRequireDefault(require("./types/menu/menu.resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 9000;
const types = ['menu'];

const start = async () => {
  const rootSchema = `
    schema {
      query: Query
    }
  `;
  const allSchemaTypes = await Promise.all(types.map(_schema.loadTypeSchema));
  const server = new _apolloServer.ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: (0, _merge.default)({}, _menu.default),

    async context({
      req
    }) {
      return null;
    }

  });
  const {
    url
  } = await server.listen({
    port
  });
  console.log(`Server is ready at ${url}`);
};

exports.start = start;