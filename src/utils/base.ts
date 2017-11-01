import { Mod, Requirement, Defense, Weapon } from './itemInterfaces';
import Item from './item';

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
    this.implicit = base.implicit; // TODO: COPY
    this.tags = base.tags;
    this.artPath = base.artPath;
    this.maxSockets = base.maxSockets;
    this.verticalSockets = base.verticalSockets;
    this.requirement = base.requirement;
    this.defense = base.defense;
    this.weapon = base.weapon;
  }
}