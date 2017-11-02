import * as _ from 'lodash';
import Base from './base';
import Mod, { GenerationType } from './mod';
import { randomRange } from './random';
import * as _item from './itemFunctions';
import names from '../data/names.js';
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
      this.itemName = this.generateName();
      this.itemLevel = 100;
      this.requiredLevel = item.requirement.level;
      this.quality = 0;
      this.rarity = Rarity.NORMAL;
      this.modPool = generateModPool(this);
      this.currentModPool = this.modPool.slice();
      this.currentTags = item.tags.slice();
      this.mods = [];
      this.prefixCount = 0;
      this.suffixCount = 0;
    }
  }

  getName() {
    if (this.rarity === Rarity.RARE) {
      return this.itemName;
    } else if (this.rarity === Rarity.MAGIC) {
      let prefix = _.filter(this.mods, mod => {
        return mod.generationType === GenerationType.PREFIX;
      });
      let prefixName: string = '';
      if (prefix.length > 0) {
        prefixName = prefix[0].name;
      }
      let suffix = _.filter(this.mods, mod => {
        return mod.generationType === GenerationType.SUFFIX;
      });
      let suffixName: string = '';
      if (suffix.length > 0) {
        suffixName = suffix[0].name;
      }
      return prefixName + ' ' + this.name + ' ' + suffixName;
    } else {
      return this.name;
    }
  }

  generateName(): string {
    let suffixes: string[] = [];    
    if (this.category.includes('Weapon')) {
      if (this.type.includes('Axe')) {
        suffixes = names.axeSuffixes;
      } else if (this.type.includes('Mace')) {
        suffixes = names.maceSuffixes;
      } else if (this.type.includes('Sword')) {
        suffixes = names.swordSuffixes;
      } else if (this.type === 'Sceptre') {
        suffixes = names.sceptreSuffixes;
      } else if (this.type === 'Staff') {
        suffixes = names.staffSuffixes;
      } else if (this.type === 'Dagger') {
        suffixes = names.daggerSuffixes;
      } else if (this.type === 'Claw') {
        suffixes = names.clawSuffixes;
      } else if (this.type === 'Bow') {
        suffixes = names.bowSuffixes;
      } else if (this.type === 'Wand') {
        suffixes = names.wandSuffixes;
      }
    } else if (this.category === 'Jewellery') {
      if (this.type === 'Amulet') {
        suffixes = names.amuletSuffixes;
      } else if (this.type === 'Ring') {
        suffixes = names.ringSuffixes;
      } else if (this.type === 'Belt') {
        suffixes = names.beltSuffixes;
      }
    } else if (this.category === 'Armor') {
      if (this.type === 'Body Armour') {
        suffixes = names.bodyArmourSuffixes;
      } else if (this.type === 'Helmet') {
        suffixes = names.helmetSuffixes;
      } else if (this.type === 'Gloves') {
        suffixes = names.glovesSuffixes;
      } else if (this.type === 'Boots') {
        suffixes = names.bootsSuffixes;
      }
    } else if (this.category === 'Off-hand') {
      if (this.type === 'Quiver') {
        suffixes = names.quiverSuffixes;
      } else if (this.type === 'Shield' && this.name.includes('Spirit Shield')) {
        suffixes = names.spiritShieldSuffixes;
      } else if (this.type === 'Shield') {
        suffixes = names.otherShieldSuffixes;
      } else if (this.type === 'Quiver') {
        suffixes = names.quiverSuffixes;
      }
    } else if (this.category === 'Other' || this.category === 'Fishing Rod') {
      suffixes = names.jewelSuffixes;
    } else {
      throw new Error('Unknown base: ' + this.category + ' ' + this.type);
    }

    return names.prefixes[randomRange(0, names.prefixes.length)] + ' ' + suffixes[randomRange(0, suffixes.length)];
  }

  reset() {
    let n = this.mods.length;
    for (let i = 0; i < n; i++) {
      this.removeMod(this.mods[n - i - 1]);
    }
  }

  reroll() {
    _.each(this.mods, mod => {
      initMod(mod);
    });
  }

  rerollImplicit() {
    if (this.implicit !== null) {
      _.each(this.implicit.stats, stat => {
        if (stat.valueMax - stat.valueMin === 0) {
          stat.value = stat.valueMax;
        } else {
          let rnd = randomRange(stat.valueMin, stat.valueMax + 1);
          while (rnd === stat.value) {
            rnd = randomRange(stat.valueMin, stat.valueMax + 1);
          }
          stat.value = rnd;
        }
      });
    }
  }

  getMod() {
    let itemTags = this.currentTags;
    let weightTotal = 0;
    _.each(this.currentModPool, mod => {
      let weight = _.find(mod.spawnWeights, spawnWeight => {
        return spawnWeight.valueOf() > 0;
      });
      let modifier = 1;
      let values: number[] = _.reduce(
        mod.generationWeights,
        (result: number[], value, key) => {
          if (_.includes(itemTags, key)) {
            result.push(value);
          }
          return result;
        },
        []
      );
      let max: number | undefined = _.max(values);
      if (max) {
        modifier *= max / 100;
      }
      if (weight) {
        weightTotal += weight * modifier;
      } else {
        throw new Error('No weight found for ' + mod.id);
      }
    });

    let selected: Mod | undefined;
    let variate = Math.random() * weightTotal;
    let cumulative = 0;
    _.each(this.currentModPool, mod => {
      let weight = _.find(mod.spawnWeights, spawnWeight => {
        return spawnWeight.valueOf() > 0;
      });
      let modifier = 1;
      let values: number[] = _.reduce(
        mod.generationWeights,
        (result: number[], value, key) => {
          if (_.includes(itemTags, key)) {
            result.push(value);
          }
          return result;
        },
        []
      );
      let max: number | undefined = _.max(values);
      if (max) {
        modifier *= max / 100;
      }
      if (weight) {
        cumulative += weight * modifier;
      } else {
        throw new Error('No weight found for ' + mod.id);
      }
      if (variate <= cumulative) {
        selected = mod;
        return false;
      }
      return true;
    });

    if (selected) {
      return selected;
    } else {
      throw new Error('No mod found');
    }
  }

  addMod(mod: Mod) {
    initMod(mod);
    if (mod.generationType === GenerationType.PREFIX) {
      this.prefixCount++;
    } else if (mod.generationType === GenerationType.SUFFIX) {
      this.suffixCount++;
    }
    _.each(mod.tags, tag => {
      this.currentTags.push(tag);
    });
    this.mods.push(mod);
    this.updateModPool();
  }

  removeMod(mod: Mod) {
    this.mods.splice(this.mods.indexOf(mod), 1);
    if (mod.generationType === GenerationType.PREFIX) {
      this.prefixCount--;
    } else if (mod.generationType === GenerationType.SUFFIX) {
      this.suffixCount--;
    }
    _.each(mod.tags, tag => {
      if (this.currentTags.indexOf(tag) >= 0) {
        this.currentTags.splice(this.currentTags.indexOf(tag), 1);
      } else {
        throw new Error('(removeMod) Unable to find tag: ' + tag + ' on item');
      }
    });
    this.updateModPool();
  }

  updateModPool() {
    let updatedModPool = this.modPool;
    updatedModPool = _item.filterSpawnWeightTagsMatch(
      updatedModPool,
      this.tags
    );
    updatedModPool = _item.filterSpawnWeightAnyIsZero(
      updatedModPool,
      this.tags
    );
    updatedModPool = _item.filterGenerationType(updatedModPool);
    updatedModPool = _item.filterDomain(updatedModPool, this.category);
    updatedModPool = _item.filterGroup(updatedModPool, this.mods);
    let maxCount = 3;
    if (this.rarity === Rarity.RARE) {
      if (this.type === 'Jewel') {
        maxCount = 2;
      }
    } else if (this.rarity === Rarity.MAGIC) {
      maxCount = 1;
    } else if (this.rarity === Rarity.NORMAL) {
      maxCount = 0;
    }
    if (this.prefixCount >= maxCount) {
      updatedModPool = _item.filterPrefix(updatedModPool);
    }
    if (this.suffixCount >= maxCount) {
      updatedModPool = _item.filterSuffix(updatedModPool);
    }
    this.currentModPool = updatedModPool;
  }
}

function generateModPool(item: Item): Mod[] {
  let modPool = _item.filterSpawnWeightTagsMatch(mods, item.tags);
  modPool = _item.filterSpawnWeightAnyIsZero(modPool, item.tags);
  modPool = _item.filterGenerationType(modPool);
  modPool = _item.filterDomain(modPool, item.category);
  return modPool;
}

function copyMods(itemMods: Mod[]): Mod[] {
  let newMods: Mod[] = [];
  _.each(itemMods, mod => {
    newMods.push(new Mod(mod));
  });
  return newMods;
}

function initMod(mod: Mod) {
  _.each(mod.stats, stat => {
    stat.value = randomRange(stat.valueMin, stat.valueMax + 1);
  });
}
