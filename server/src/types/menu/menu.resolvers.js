const menuList = (_, args, ctx) => {
  const data = [
    {
      _id: 0,
      name: 'App.aboutMe',
    },
    {
      _id: 1,
      name: 'App.experience',
    }
  ]

  return data
}

export default {
  Query: {
    menuList,
  },
  Menu: {
    id(menu, _, ctx) {
      return menu._id
    },
  },
}
