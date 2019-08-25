"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _apolloServer = require("apollo-server");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _models = _interopRequireDefault(require("./models"));

var _schema = require("./utils/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const port = process.env.PORT || 9000;
const types = ['menu', 'profile'];

const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
  await _models.default.init();
  const allSchemaTypes = await Promise.all(types.map(_schema.loadTypeSchema));
  const [menu, profile] = await Promise.all([Promise.resolve().then(() => _interopRequireWildcard(require('./types/menu/menu.resolvers'))).then(rs => rs.default), Promise.resolve().then(() => _interopRequireWildcard(require('./types/profile/profile.resolvers'))).then(rs => rs.default)]);
  const server = new _apolloServer.ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: (0, _merge.default)({}, menu, profile),

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