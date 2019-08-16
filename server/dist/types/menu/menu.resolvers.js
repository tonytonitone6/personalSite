"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const menuList = (_, args, ctx) => {
  const data = [{
    "_id": 0,
    "name": "App.aboutMe"
  }, {
    "_id": 1,
    "name": "App.experience"
  }, {
    "_id": 2,
    "name": "App.protfolio"
  }];
  return data;
};

var _default = {
  Query: {
    menuList
  },
  Menu: {
    id(menu, _, ctx) {
      return menu._id;
    }

  }
};
exports.default = _default;