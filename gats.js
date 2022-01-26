const gats = {};

gats.defineGetter = (obj, prop, func) => {
  Object.defineProperty(obj, prop, {
    get: func,
  });
};

gats.defineSetter = (obj, prop, func) => {
  Object.defineProperty(obj, prop, {
    set: func,
  });
};

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

gats.Perk = {
  NoRecoil: 0,
  Binoculars: 1,
  Thermal: 2,
  Damage: 3,
  LargeMags: 4,
  Accuracy: 5,
  Silencer: 6,
  Speed: 7,
  Range: 8,
  Kevlar: 9,
  Shield: 10,
  MedKit: 11,
  Grenade: 12,
  Knife: 13,
  Build: 14,
  Camo: 15,
  Dash: 16,
  Gas: 17,
  Landmine: 18,
  Frag: 19,
};

gats.defineGetter(gats, 'publicServers', () => servers);

gats.defineGetter(gats, 'mapWidth', () => j11);
gats.defineGetter(gats, 'mapHeight', () => j12);

gats.defineSetter(gats, 'mapWidth', (width) => (j11 = width));
gats.defineSetter(gats, 'mapHeight', (height) => (j12 = height));

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
