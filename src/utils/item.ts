import Base from './base';
import { Mod } from './itemInterfaces';
import * as _item from './itemFunctions';
import * as modsJSON from '../data/mods.json';
let mods: Mod[] = <Mod[]> modsJSON;

export default class Item extends Base {
  itemName: string;
  itemLevel: number;
  requiredLevel: number;
  quality: number;
  rarity: string;
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
      this.mods = item.mods; // TODO: COPY
      this.prefixCount = item.prefixCount;
      this.suffixCount = item.suffixCount;
    } else {
      this.itemLevel = 100;
      this.requiredLevel = item.requirement.level;
      this.quality = 0;
      this.rarity = 'normal';
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
}
