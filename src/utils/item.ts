import * as _ from 'lodash';
import Base from './base';
import Mod from './mod';
import { randomRange } from './random';
import * as _item from './itemFunctions';
import * as modsJSON from '../data/mods.json';
let mods: Mod[] = <Mod[]> modsJSON;

export enum Rarity {
  NORMAL = 'normal',
  MAGIC = 'magic',
  RARE = 'rare'
}

export default class Item extends Base {
  itemName: string;
  itemLevel: number;
  requiredLevel: number;
  quality: number;
  rarity: Rarity;
  modPool: Mod[];
  currentModPool: Mod[];
  currentTags: string[];
  mods: Mod[];
  prefixCount: number;
  suffixCount: number;
  constructor(item: Base | Item) {
    super(item);
    if (item instanceof Item) {
      this.itemName = item.itemName;
      this.itemLevel = item.itemLevel;
      this.requiredLevel = item.requiredLevel;
      this.quality = item.quality;
      this.rarity = item.rarity;
      this.modPool = item.modPool;
      this.currentModPool = item.currentModPool;
      this.currentTags = item.currentTags;
      this.mods = copyMods(item.mods);
      this.prefixCount = item.prefixCount;
      this.suffixCount = item.suffixCount;
    } else {
      this.itemLevel = 100;
      this.requiredLevel = item.requirement.level;
      this.quality = 0;
      this.rarity = Rarity.NORMAL;
      this.modPool = this.generateModPool();
      this.currentModPool = this.modPool;
      this.currentTags = item.tags.slice();
      this.mods = [];
      this.prefixCount = 0;
      this.suffixCount = 0;
    }
  }

  generateModPool(): Mod[] {
    let modPool = _item.filterSpawnWeightTagsMatch(mods, this.tags);
    modPool = _item.filterSpawnWeightAnyIsZero(modPool, this.tags);
    modPool = _item.filterGenerationType(modPool);
    modPool = _item.filterDomain(modPool, this.category);
    return modPool;
  }

  initMod(mod: Mod) {
    _.each(mod.stats, stat => {
      stat.value = randomRange(stat.valueMin, stat.valueMax + 1);
    });
  }

  addMod(): Item {
    let mod: Mod = this.modPool[randomRange(0, this.modPool.length)];
    this.initMod(mod);
    this.mods.push(mod);
    return this;
  }

  removeMod(): Item {
    if (this.mods.length > 0) {
      this.mods.pop();
    }
    return this;
  }
}

function copyMods(itemMods: Mod[]): Mod[] {
  let newMods: Mod[] = [];
  _.each(itemMods, mod => {
    newMods.push(new Mod(mod));
  });
  return newMods;
}
