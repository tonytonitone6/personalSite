
const menuList = (_, args, ctx) => {
  const data = [
    {
      "id": 1,
      "name": "App.aboutMe"
    },
    {
      "id": 2,
      "name": "App.experience"
    },
    {
      "id": 3,
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

