const gats = {};

gats.CAPTCHA_SITEKEY = '6LenZt4ZAAAAAF-2nPKzH9111gkjBlaJCEp8UsQV';

gats.Weapon = {
  Pistol: 0,
  SMG: 1,
  Shotgun: 2,
  Assault: 3,
  Sniper: 4,
  LMG: 5,
};

gats.Color = {
  Red: 0,
  Orange: 1,
  Yellow: 2,
  Green: 3,
  Blue: 4,
  Purple: 5,
};

gats.Armor = {
  None: 0,
  Light: 1,
  Medium: 2,
  Heavy: 3,
};

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
