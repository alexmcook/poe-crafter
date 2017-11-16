import * as _ from 'lodash';
import Base from './base';
import Mod, { GenerationType } from './mod';
import { randomRange } from './random';
import * as _item from './itemFunctions';
const names: NamesJSON = require('../data/names.json');
const mods: Mod[] = require('../data/mods.json');

interface NamesJSON {
  [key: string]: Name[];
}

interface Name {
  [key: string]: string[];
}

export enum Rarity {
  NORMAL = 'normal',
  MAGIC = 'magic',
  RARE = 'rare'
}

export interface DefenseOutput {
  armor?: number;
  evasion?: number;
  energyShield?: number;
  block?: number;
  flatArmor?: number;
  flatEvasion?: number;
  flatEnergyShield?: number;
  incArmor?: number;
  incEvasion?: number;
  incEnergyShield?: number;
  incBlock?: number;
}

export interface WeaponOutput {
  aps: string;
  crit: string;
  physMin: number;
  physMax: number;
  fireMin?: number;
  fireMax?: number;
  coldMin?: number;
  coldMax?: number;
  lightMin?: number;
  lightMax?: number;
  chaosMin?: number;
  chaosMax?: number;
  flatPhysMin?: number;
  flatPhysMax?: number;
  incCrit?: number;
  incAS?: number;
  incPhys?: number;
  range?: number;
}

export default class Item extends Base {
  itemName: string;
  itemLevel: number;
  quality: number;
  rarity: Rarity;
  modPool: Mod[];
  currentModPool: Mod[];
  currentTags: string[];
  mods: Mod[];
  prefixCount: number;
  suffixCount: number;
  sockets: number;
  socketColors: string;
  socketLinks: string;
  constructor(item: Base | Item) {
    super(item);
    if (item instanceof Item) {
      this.itemName = item.itemName;
      this.itemLevel = item.itemLevel;
      this.quality = item.quality;
      this.rarity = item.rarity;
      this.modPool = item.modPool;
      this.currentModPool = item.currentModPool;
      this.currentTags = item.currentTags;
      this.mods = copyMods(item.mods);
      this.prefixCount = item.prefixCount;
      this.suffixCount = item.suffixCount;
      this.sockets = item.sockets;
      this.socketColors = item.socketColors;
      this.socketLinks = item.socketLinks;
    } else {
      this.itemName = this.generateName();
      this.itemLevel = 100;
      this.quality = 0;
      this.rarity = Rarity.NORMAL;
      this.modPool = generateModPool(this);
      this.currentModPool = this.modPool.slice();
      this.currentTags = item.tags.slice();
      this.mods = [];
      this.prefixCount = 0;
      this.suffixCount = 0;
      this.sockets =
        this.maxSockets === 0 ? 0 : randomRange(1, item.maxSockets + 1);
      this.rerollSocketColors();
      this.rerollSocketLinks();
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
    let prefixes: string[] = [];
    let suffixes: string[] = [];
    _.each(this.tags, tag => {
      prefixes = names.prefixes[tag] ? prefixes.concat(names.prefixes[tag]) : prefixes;
      suffixes = names.suffixes[tag] ? suffixes.concat(names.suffixes[tag]) : suffixes;
    });
    return (
      prefixes[randomRange(0, prefixes.length)] +
      ' ' +
      suffixes[randomRange(0, suffixes.length)]
    );
  }

  rerollSockets() {
    let n = this.maxSockets;
    let output = this.sockets;
    while (output === this.sockets) {
      output = 1;
      for (let i = 1; i < n; i++) {
        let rnd = Math.random();
        if (rnd < 0.5) {
          output++;
        }
      }
    }
    this.sockets = output;
    this.rerollSocketColors();
    this.rerollSocketLinks();
  }

  rerollSocketLinks() {
    let n = this.sockets - 1;
    let output = this.socketLinks;
    while (output === this.socketLinks) {
      output = '';
      for (let i = 0; i < n; i++) {
        let rnd = Math.random();
        if (rnd < 0.5) {
          output += 'L';
        } else {
          output += 'X';
        }
      }
    }
    this.socketLinks = output;
  }

  rerollSocketColors() {
    let n = this.sockets;
    let weightR = this.requirement.str + 30;
    let weightG = this.requirement.dex + 30;
    let weightB = this.requirement.int + 30;
    let weightArr = [weightR, weightG, weightB];
    let weightKeys = ['R', 'G', 'B'];
    let weightTotal = weightR + weightG + weightB;

    let output = this.socketColors;
    while (output === this.socketColors) {
      output = '';
      for (let i = 0; i < n; i++) {
        let variate = Math.random() * weightTotal;
        let cumulative = 0;
        for (let j = 0; j < weightArr.length; j++) {
          cumulative += weightArr[j];
          if (variate <= cumulative) {
            output += weightKeys[j];
            break;
          }
        }
      }
    }
    this.socketColors = output;
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
    if (this.implicit) {
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

  calcLevel(): number {
    let level: number = this.requirement.level;
    _.each(this.mods, mod => {
      if (Math.floor(mod.level * 0.8) > level) {
        level = Math.floor(mod.level * 0.8);
      }
    });
    return level;
  }

  calcWeapon(): WeaponOutput {
    if (!this.weapon) {
      throw new Error('Weapon for ' + this.id + ' is undefined');
    }

    let output = <WeaponOutput> {};

    _.each(this.mods, mod => {
      _.each(mod.stats, stat => {
        switch (stat.id) {
          case 'local_minimum_added_physical_damage': {
            if (output.flatPhysMin) {
              output.flatPhysMin += <number> stat.value;
            } else {
              output.flatPhysMin = stat.value;
            }
            break;
          }
          case 'local_maximum_added_physical_damage':
            if (output.flatPhysMax) {
              output.flatPhysMax += <number> stat.value;
            } else {
              output.flatPhysMax = stat.value;
            }
            break;
          case 'local_minimum_added_fire_damage':
            if (output.fireMin) {
              output.fireMin += <number> stat.value;
            } else {
              output.fireMin = stat.value;
            }
            break;
          case 'local_maximum_added_fire_damage':
            if (output.fireMax) {
              output.fireMax += <number> stat.value;
            } else {
              output.fireMax = stat.value;
            }
            break;
          case 'local_minimum_added_cold_damage':
            if (output.coldMin) {
              output.coldMin += <number> stat.value;
            } else {
              output.coldMin = stat.value;
            }
            break;
          case 'local_maximum_added_cold_damage':
            if (output.coldMax) {
              output.coldMax += <number> stat.value;
            } else {
              output.coldMax = stat.value;
            }
            break;
          case 'local_minimum_added_lightning_damage':
            if (output.lightMin) {
              output.lightMin += <number> stat.value;
            } else {
              output.lightMin = stat.value;
            }
            break;
          case 'local_maximum_added_lightning_damage':
            if (output.lightMax) {
              output.lightMax += <number> stat.value;
            } else {
              output.lightMax = stat.value;
            }
            break;
          case 'local_minimum_added_chaos_damage':
            if (output.chaosMin) {
              output.chaosMin += <number> stat.value;
            } else {
              output.chaosMin = stat.value;
            }
            break;
          case 'local_maximum_added_chaos_damage':
            if (output.chaosMax) {
              output.chaosMax += <number> stat.value;
            } else {
              output.chaosMax = stat.value;
            }
            break;
          case 'local_physical_damage_+%':
            if (output.incPhys) {
              output.incPhys += <number> stat.value;
            } else {
              output.incPhys = stat.value;
            }
            break;
          case 'local_critical_strike_chance_+%':
            if (output.incCrit) {
              output.incCrit += <number> stat.value;
            } else {
              output.incCrit = stat.value;
            }
            break;
          case 'local_attack_speed_+%':
            if (output.incAS) {
              output.incAS += <number> stat.value;
            } else {
              output.incAS = stat.value;
            }
            break;
          default:
            break;
        }
      });
    });

    output.physMin = Math.round(
      (this.weapon.damageMin + (output.flatPhysMin ? output.flatPhysMin : 0)) *
        (1 + this.quality / 100 + (output.incPhys ? output.incPhys : 0) / 100)
    );
    output.physMax = Math.round(
      (this.weapon.damageMax + (output.flatPhysMax ? output.flatPhysMax : 0)) *
        (1 + this.quality / 100 + (output.incPhys ? output.incPhys : 0) / 100)
    );
    output.crit = (this.weapon.crit *
      (1 + (output.incCrit ? output.incCrit : 0) / 100) /
      100
    ).toFixed(2);
    output.aps = (1000 /
      (this.weapon.speed / (1 + (output.incAS ? output.incAS : 0) / 100))
    ).toFixed(2);
    if (this.weapon.range < 100) {
      output.range = this.weapon.range;
    }

    return output;
  }

  calcDefense(): DefenseOutput {
    if (!this.defense) {
      throw new Error('Defense for ' + this.id + ' is undefined');
    }

    let output = <DefenseOutput> {};

    _.each(this.mods, mod => {
      _.each(mod.stats, stat => {
        switch (stat.id) {
          case 'local_base_physical_damage_reduction_rating':
            if (output.flatArmor) {
              output.flatArmor += <number> stat.value;
            } else {
              output.flatArmor = stat.value;
            }
            break;
          case 'local_physical_damage_reduction_rating_+%':
            if (output.incArmor) {
              output.incArmor += <number> stat.value;
            } else {
              output.incArmor = stat.value;
            }
            break;
          case 'local_base_evasion_rating':
            if (output.flatEvasion) {
              output.flatEvasion += <number> stat.value;
            } else {
              output.flatEvasion = stat.value;
            }
            break;
          case 'local_evasion_rating_+%':
            if (output.incEvasion) {
              output.incEvasion += <number> stat.value;
            } else {
              output.incEvasion = stat.value;
            }
            break;
          case 'local_energy_shield':
            if (output.flatEnergyShield) {
              output.flatEnergyShield += <number> stat.value;
            } else {
              output.flatEnergyShield = stat.value;
            }
            break;
          case 'local_energy_shield_+%':
            if (output.incEnergyShield) {
              output.incEnergyShield += <number> stat.value;
            } else {
              output.incEnergyShield = stat.value;
            }
            break;
          case 'local_armour_and_evasion_+%':
            if (output.incArmor) {
              output.incArmor += <number> stat.value;
            } else {
              output.incArmor = stat.value;
            }
            if (output.incEvasion) {
              output.incEvasion += <number> stat.value;
            } else {
              output.incEvasion = stat.value;
            }
            break;
          case 'local_armour_and_energy_shield_+%':
            if (output.incArmor) {
              output.incArmor += <number> stat.value;
            } else {
              output.incArmor = stat.value;
            }
            if (output.incEnergyShield) {
              output.incEnergyShield += <number> stat.value;
            } else {
              output.incEnergyShield = stat.value;
            }
            break;
          case 'local_evasion_and_energy_shield_+%':
            if (output.incEvasion) {
              output.incEvasion += <number> stat.value;
            } else {
              output.incEvasion = stat.value;
            }
            if (output.incEnergyShield) {
              output.incEnergyShield += <number> stat.value;
            } else {
              output.incEnergyShield = stat.value;
            }
            break;
          case 'local_armour_and_evasion_and_energy_shield_+%':
            if (output.incArmor) {
              output.incArmor += <number> stat.value;
            } else {
              output.incArmor = stat.value;
            }
            if (output.incEvasion) {
              output.incEvasion += <number> stat.value;
            } else {
              output.incEvasion = stat.value;
            }
            if (output.incEnergyShield) {
              output.incEnergyShield += <number> stat.value;
            } else {
              output.incEnergyShield = stat.value;
            }
            break;
          case 'local_additional_block_chance_%':
            if (output.incBlock) {
              output.incBlock += <number> stat.value;
            } else {
              output.incBlock = stat.value;
            }
            break;
          default:
            break;
        }
      });
    });

    output.armor = Math.round(
      (this.defense.armor + (output.flatArmor ? output.flatArmor : 0)) *
        (1 + this.quality / 100 + (output.incArmor ? output.incArmor : 0) / 100)
    );
    output.evasion = Math.round(
      (this.defense.evasion + (output.flatEvasion ? output.flatEvasion : 0)) *
        (1 +
          this.quality / 100 +
          (output.incEvasion ? output.incEvasion : 0) / 100)
    );
    output.energyShield = Math.round(
      (this.defense.energyShield +
        (output.flatEnergyShield ? output.flatEnergyShield : 0)) *
        (1 +
          this.quality / 100 +
          (output.incEnergyShield ? output.incEnergyShield : 0) / 100)
    );
    output.block = Math.round(
      this.defense.block + (output.incBlock ? output.incBlock : 0)
    );

    return output;
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
