
const menuList = (_, args, ctx) => {
  const data = [
    {
      "id": 0,
      "name": "App.aboutMe"
    },
    {
      "id": 1,
      "name": "App.experience"
    },
    {
      "id": 2,
      "name": "App.protfolio"
    }
  ];

  return data;
}


export default {
  Query: {
    menuList
  }
}

