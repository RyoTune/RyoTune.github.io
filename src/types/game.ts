export const Game_P4G: GameInfo = {
  name: "Persona 4 Golden",
  exe: "P4G.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15696",
};

export const Game_P5R: GameInfo = {
  name: "Persona 5 Royal",
  exe: "P5R.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15399",
};

export const Game_P3P: GameInfo = {
  name: "Persona 3 Portable",
  exe: "P3P.exe",
  modGuideUrl: "https://gamebanana.com/tuts/15677",
};

export const Game_P3R: GameInfo = {
  name: "Persona 3 Reload",
  exe: "P3R.exe",
  modGuideUrl: "https://gamebanana.com/tuts/17156",
};

export const Game_Metaphor: GameInfo = {
  name: "Metaphor: ReFantazio",
  exe: "METAPHOR.exe",
  modGuideUrl: "",
};

export const Game_SMTV: GameInfo = {
  name: "SMTV Vengeance",
  exe: "SMT5V-WIN64-SHIPPING.exe",
  modGuideUrl: "",
};

export const Game_DbzSparking: GameInfo = {
  name: "Dragon Ball: Sparking! ZERO",
  exe: "SPARKINGZERO-WIN64-SHIPPING.exe",
  modGuideUrl: "",
};

export const Mod_PersonaEssentials: ModInfo = {
  name: "Persona Essentials",
  desc: "Game file replacement, audio replacement, and file merging.",
  url: "https://github.com/Sewer56/p5rpc.modloader/releases",
  ddl: "r2:https://github.com/Sewer56/p5rpc.modloader/releases/download/2.7.1/p5rpc.modloader2.7.1.7z",
  games: [Game_P5R, Game_P4G, Game_P3P],
};

export const Mod_Persona3Essentials: ModInfo = {
  name: "Persona 3 Reload Essentials",
  desc: "Game file replacement.",
  url: "https://gamebanana.com/mods/494020",
  ddl: "r2:https://github.com/AnimatedSwine37/p3rpc.essentials/releases/tag/1.2.1",
  games: [Game_P3R],
};

export const Mod_MetaphorEssentials: ModInfo = {
  name: "Metaphor Essentials",
  desc: "Game file replacement.",
  url: "https://gamebanana.com/mods/548481",
  ddl: "r2:https://github.com/DeathChaos25/mrfpc.modloader/releases/download/1.0.1/mrfpc.modloader1.0.1.7z",
  games: [Game_Metaphor],
};

export const Mod_MetaphorToolkit: ModInfo = {
  name: "Metaphor Modding Toolkit",
  desc: "Extended modding functionality and file merging.",
  url: "https://gamebanana.com/mods/548487",
  ddl: "r2:https://github.com/RyoTune/MF.Toolkit/releases/download/1.0.0/MF.Toolkit.Reloaded1.0.0.7z",
  games: [Game_Metaphor],
};

export const Mod_Ryo: ModInfo = {
  name: "Ryo Framework",
  desc: "Add and replace audio and movies.",
  url: "https://gamebanana.com/mods/495507",
  ddl: "r2:https://github.com/RyoTune/Ryo/releases/download/2.5.3/Ryo.Reloaded2.5.3.7z",
  games: [
    Game_Metaphor,
    Game_P3R,
    Game_SMTV,
    Game_DbzSparking,
    Game_P5R,
    Game_P4G,
    Game_P3P,
  ],
};

export const Games = [Game_P3R, Game_P5R, Game_P4G, Game_P3P];
export const Mods = [
  Mod_Ryo,
  Mod_PersonaEssentials,
  Mod_Persona3Essentials,
  Mod_MetaphorEssentials,
  Mod_MetaphorToolkit,
];

export interface GameInfo {
  name: string;
  exe: string;
  modGuideUrl: string;
}

export interface ModInfo {
  name: string;
  desc: string;
  url: string;
  ddl: string;
  games: GameInfo[];
}

export function getGamesList(mod: ModInfo) {
  return mod.games.map((x) => x.name).join(", ");
}
