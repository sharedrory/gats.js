const gats = {};

gats.parsePosition = (data) => {
  return {
    x: data.x / 10,
    y: data.y / 10,
  };
};

gats.getCurrentServer = () => {
  return RF.list[0];
};

gats.getSocket = () => {
  return gats.getCurrentServer().socket;
};
