"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _models = _interopRequireDefault(require("./models"));

var _schema = require("./utils/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const app = (0, _express.default)();
const port = process.env.PORT || 9001;
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)());
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
  const server = new _apolloServerExpress.ApolloServer({
    typeDefs: [rootSchema, ...allSchemaTypes],
    resolvers: (0, _merge.default)({}, menu, profile),

    async context({
      req
    }) {
      return null;
    }

  });
  server.applyMiddleware({
    app
  }); // const {url} = await app.listen({port})
  // console.log(`Server is ready at ${url}`)

  app.listen({
    port: 9001
  }, () => console.log(`server port is ${port} ${server.graphqlPath}`));
};

exports.start = start;