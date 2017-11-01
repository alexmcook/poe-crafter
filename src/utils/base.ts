import Item from './item';
import Mod from './mod';

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

export default class Base {
  id: string;
  name: string;
  type: string;
  category: string;
  dropLevel: number;
  implicit: Mod;
  tags: string[];
  artPath: string;
  maxSockets: number;
  verticalSockets: boolean;
  requirement: Requirement;
  defense: Defense;
  weapon: Weapon;
  constructor(base: Base | Item) {
    this.id = base.id;
    this.name = base.name;
    this.type = base.type;
    this.category = base.category;
    this.dropLevel = base.dropLevel;
    this.implicit = new Mod(base.implicit);
    this.tags = base.tags;
    this.artPath = base.artPath;
    this.maxSockets = base.maxSockets;
    this.verticalSockets = base.verticalSockets;
    this.requirement = base.requirement;
    this.defense = base.defense;
    this.weapon = base.weapon;
  }
}