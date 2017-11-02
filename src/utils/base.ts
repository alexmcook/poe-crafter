import Item from './item';
import Mod from './mod';
import * as _ from 'lodash';
import { randomRange } from './random';

export interface Requirement {
  level: number;
  str: number;
  dex: number;
  int: number;
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

export default class Base {
  id: string;
  name: string;
  type: string;
  category: string;
  dropLevel: number;
  implicit?: Mod;
  tags: string[];
  artPath: string;
  maxSockets: number;
  verticalSockets: boolean;
  requirement: Requirement;
  defense?: Defense;
  weapon?: Weapon;
  constructor(base: Base | Item) {
    this.id = base.id;
    this.name = base.name;
    this.type = base.type;
    this.category = base.category;
    this.dropLevel = base.dropLevel;
    if (base.implicit != null) {
      this.implicit = new Mod(base.implicit);
      if (
        _.some(this.implicit.stats, stat => {
          return !stat.value;
        })
      ) {
        _.each(this.implicit.stats, stat => {
          stat.value = randomRange(stat.valueMin, stat.valueMax + 1);
        });
      }
    }
    this.tags = base.tags;
    this.artPath = base.artPath;
    this.maxSockets = base.maxSockets;
    this.verticalSockets = base.verticalSockets;
    this.requirement = base.requirement;
    if (base.defense != null) {
      this.defense = base.defense;
    }
    if (base.weapon != null) {
      this.weapon = base.weapon;
    }
  }
}
