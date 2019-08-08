"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const menuList = (_, args, ctx) => {
  const data = [{
    "id": 1,
    "name": "App.aboutMe"
  }, {
    "id": 2,
    "name": "App.experience"
  }, {
    "id": 3,
    "name": "App.protfolio"
  }];
  return data;
};

var _default = {
  Query: {
    menuList
  }
};
exports.default = _default;