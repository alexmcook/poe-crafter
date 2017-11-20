import * as _ from 'lodash';
import Item, { Rarity } from './item';
import Mod, { GenerationType, Domain } from './mod';
import { CraftingOption } from '../reducers/craftingOptionReducer';

/* Filter mods to include only mods with a shared tag that have a spawnWeight greater than value */
export function filterSpawnWeightTagsMatch(mods: Mod[], tags: string[]): Mod[] {
  return _.filter(mods, mod => {
    let tag = _.intersection(Object.keys(mod.spawnWeights), tags)[0];
    if (tag) {
      return mod.spawnWeights[tag] > 0;
    } else {
      return false;
    }
  });
}

/* Filter mods to exclude mods with a shared tag (except default) that has a weight of 0 */
export function filterSpawnWeightAnyIsZero(mods: Mod[], tags: string[]): Mod[] {
  return _.filter(mods, mod => {
    let bool = true;
    _.each(mod.spawnWeights, (value, key) => {
      if (_.includes(tags, key) && value === 0 && key !== 'default') {
        bool = false;
        return false;
      } else {
        return true;
      }
    });
    return bool;
  });
}

/* Filter mods to include only mods with a PREFIX or SUFFIX generationType */
export function filterGenerationType(mods: Mod[]): Mod[] {
  return _.filter(mods, mod => {
    return (
      mod.generationType === GenerationType.PREFIX ||
      mod.generationType === GenerationType.SUFFIX
    );
  });
}

/* Filter mods to include only mods with a CORRUPTED generationType */
export function filterGenerationTypeCorruption(mods: Mod[]): Mod[] {
  return _.filter(mods, mod => {
    return mod.generationType === GenerationType.CORRUPTED;
  });
}

/* Filter mods to include only mods with a domain based on item category */
export function filterDomain(mods: Mod[], category: string): Mod[] {
  return _.filter(mods, mod => {
    if (category === 'Other') {
      return mod.domain === Domain.JEWEL;
    } else {
      return mod.domain === Domain.ITEM;
    }
  });
}

export function filterLevel(mods: Mod[], level: number): Mod[] {
  return _.filter(mods, mod => {
    return mod.level <= level;
  });
}

export function filterGroup(mods: Mod[], currentMods: Mod[]): Mod[] {
  return _.filter(mods, mod => {
    return !_.some(currentMods, itemMod => {
      return itemMod.group === mod.group;
    });
  });
}

export function filterPrefix(mods: Mod[]): Mod[] {
  return _.filter(mods, mod => {
    return mod.generationType !== GenerationType.PREFIX;
  });
}

export function filterSuffix(mods: Mod[]): Mod[] {
  return _.filter(mods, mod => {
    return mod.generationType !== GenerationType.SUFFIX;
  });
}

export function checkAffixCount(
  item: Item,
  affixType: GenerationType
): boolean {
  let maxCount = 3;
  if (item.rarity === Rarity.RARE) {
    if (item.type === 'Jewel') {
      maxCount = 2;
    }
  } else if (item.rarity === Rarity.MAGIC) {
    maxCount = 1;
  } else if (item.rarity === Rarity.NORMAL) {
    maxCount = 0;
  }
  if (affixType === GenerationType.PREFIX) {
    return item.prefixCount < maxCount;
  } else if (affixType === GenerationType.SUFFIX) {
    return item.suffixCount < maxCount;
  } else {
    return false;
  }
}

export function checkAvailability(
  item: Item,
  craftOption: CraftingOption
): boolean {
  if (!craftOption || item.corrupted) {
    return false;
  } else if (craftOption.mod) {
    let affixSpace = checkAffixCount(item, craftOption.mod.generationType);
    if (!affixSpace) {
      return false;
    }
    let match = _.some(item.mods, (mod: Mod) => {
      return mod.group === craftOption.mod.group;
    });
    let correctType =
      craftOption.itemTypes.length === 0 ||
      _.includes(craftOption.itemTypes, item.type);
    return !match && correctType;
  } else if (craftOption.customAction) {
    if (craftOption.customAction.removeMod) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      return item.crafted && correctType;
    } else if (craftOption.customAction.colors) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      return (
        craftOption.customAction.colors.length <= item.sockets && correctType
      );
    } else if (craftOption.customAction.links) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      return craftOption.customAction.links <= item.sockets && correctType;
    } else if (craftOption.customAction.sockets) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      return craftOption.customAction.sockets <= item.maxSockets && correctType;
    }
  }
  return false;
}
