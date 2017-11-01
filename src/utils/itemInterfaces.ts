export enum Domain {
  ITEM = 1,
  FLASK,
  MONSTER,
  CHEST,
  AREA,
  UNKNOWN1,
  UNKNOWN2,
  UNKNOWN3,
  STANCE,
  MASTER,
  JEWEL,
  ATLAS,
  LEAGUESTONE,
}

export enum GenerationType {
  PREFIX = 1,
  SUFFIX,
  UNIQUE,
  NEMESIS,
  CORRUPTED,
  BLOODLINES,
  TORMENT,
  TEMPEST,
  TALISMAN,
  ENCHANTMENT,
  ESSENCE,
}

export interface SpawnWeight {
  [key: string]: number;
}

export interface GenerationWeight {
  [key: string]: number;
}

export interface Mod {
  id: string;
  name: string;
  modType: string;
  group: string;
  level: number;
  domain: Domain;
  generationType: GenerationType;
  tags: string[];
  stats: Stat[];
  spawnWeights: SpawnWeight;
  generationWeights: GenerationWeight;
  essenceOnly: boolean;
}

export interface Stat {
  id: string;
  valueMin: number;
  valueMax: number;
  value: number;
  key: number;
}

export interface Requirement {
  level: number;
  str: string;
  dex: string;
  int: string;
}

export interface Defense {
  block: number;
  armor: number;
  evasion: number;
  energyShield: number;
}

export interface Weapon {
  damageMin: number;
  damageMax: number;
  speed: number;
  crit: number;
  range: number;
}