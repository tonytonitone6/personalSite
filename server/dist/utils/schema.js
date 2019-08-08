"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTypeSchema = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loadTypeSchema = type => {
  return new Promise((resolve, reject) => {
    const pathToSchema = (0, _path.join)(process.cwd(), `src/types/${type}/${type}.gql`);

    _fs.default.readFile(pathToSchema, {
      encoding: 'utf-8'
    }, (err, schema) => {
      if (err) {
        return reject(err);
      }

      return resolve(schema);
    });
  });
};

exports.loadTypeSchema = loadTypeSchema;