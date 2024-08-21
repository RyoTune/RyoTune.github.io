export const Mod_Ryo: ModDependency = {
  name: "Ryo Framework",
  url: "https://gamebanana.com/mods/495507",
};

export const Game_P4G: GameInfo = {
  name: "Persona 4 Golden",
  exe: "P4G.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15696",
  dependencies: [],
};

export const Game_P5R: GameInfo = {
  name: "Persona 5 Royal",
  exe: "P5R.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15399",
  dependencies: [],
};

export const Game_P3P: GameInfo = {
  name: "Persona 3 Portable",
  exe: "P3P.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15677",
  dependencies: [],
};

export const Game_P3R: GameInfo = {
  name: "Persona 3 Reload",
  exe: "P3R.exe",
  modGuideUrl: "https://gamebanana.com/tuts/17156",
  dependencies: [Mod_Ryo],
};

export const games = [Game_P3R, Game_P5R, Game_P4G, Game_P3P];

export interface GameInfo {
  name: string;
  exe: string;
  modGuideUrl: string;
  dependencies: ModDependency[];
}

export interface ModDependency {
  name: string;
  url: string;
}
