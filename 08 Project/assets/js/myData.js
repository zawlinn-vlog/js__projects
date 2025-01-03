module.exports = () => {
  const data = {
    users: [],
  };

  for (i = 0; i < 15; i++) {
    data.users.push({
      id: i,
      name: `User 0${i + 1}`,
      img: `https://picsum.photos/800/300?random=${i + 1}`,
    });
  }

  return data;
};
