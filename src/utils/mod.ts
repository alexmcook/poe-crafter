import * as _ from 'lodash';
import Stat from './stat';

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
  LEAGUESTONE
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
  ESSENCE
}

interface SpawnWeight {
  [key: string]: number;
}

interface GenerationWeight {
  [key: string]: number;
}

export default class Mod {
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
  essencyOnly: boolean;
  constructor(mod: Mod) {
    this.id = mod.id;
    this.name = mod.name;
    this.modType = mod.modType;
    this.group = mod.group;
    this.level = mod.level;
    this.domain = mod.domain;
    this.generationType = mod.generationType;
    this.tags = mod.tags;
    this.stats = copyStats(mod.stats);
    this.spawnWeights = mod.spawnWeights;
    this.generationWeights = mod.generationWeights;
    this.essencyOnly = mod.essencyOnly;
  }
}

function copyStats(stats: Stat[]) {
  let newStats: Stat[] = [];
  _.each(stats, stat => {
    newStats.push(new Stat(stat));
  });
  return newStats;
}
