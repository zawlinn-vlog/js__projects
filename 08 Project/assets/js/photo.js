module.exports = () => {
  const data = {
    photo: [],
  };

  for (i = 0; i < 15; i++) {
    data.photo.push({
      id: i + 1,
      title: `Photo 0${i + 1}`,
      owner: `User 0${i + 1}`,
      img: `https://picsum.photos/800/300?random=${i + 1}`,
    });
  }

  return data;
};
