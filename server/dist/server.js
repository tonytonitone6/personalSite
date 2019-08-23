"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _apolloServer = require("apollo-server");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _models = _interopRequireDefault(require("./models"));

var _schema = require("./utils/schema");

var _menu = _interopRequireDefault(require("./types/menu/menu.resolvers"));

var _profile = _interopRequireDefault(require("./types/profile/profile.resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 9000;
const types = ['menu', 'profile'];

const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
  const allSchemaTypes = await Promise.all(types.map(_schema.loadTypeSchema));

  _models.default.init();

  const server = new _apolloServer.ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: (0, _merge.default)({}, _menu.default, _profile.default),

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