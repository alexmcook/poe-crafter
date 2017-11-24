import * as _ from 'lodash';
import Item, { Rarity } from './item';
import Mod, { GenerationType, Domain } from './mod';
import { CraftingOption } from '../reducers/craftingOptionReducer';

enum CraftingError {
  NONE = 0,
  BASE = 1,
  CORRUPT = 2,
  CRAFTED = 3,
  NOTCRAFTED = 4,
  GROUP = 5,
  PREFIX = 6,
  SUFFIX = 7,
  SOCKETS = 8,
  LINKS = 9,
  NUMSOCKETS = 10,
  MAXSOCKETS = 11,
  NOSOCKETS = 12
}

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
    maxCount = 1;
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
): number {
  console.log(item.type);
  console.log(craftOption.itemTypes);
  if (!craftOption || item.corrupted) {
    return CraftingError.CORRUPT;
  } else if (craftOption.mod) {
    let affixSpace = checkAffixCount(item, craftOption.mod.generationType);
    let match = _.some(item.mods, (mod: Mod) => {
      return mod.group === craftOption.mod.group;
    });
    let correctType =
      craftOption.itemTypes.length === 0 ||
      _.includes(craftOption.itemTypes, item.type);
    if (!correctType) {
      return CraftingError.BASE;
    } else if (item.crafted && !item.multiMod) {
      return CraftingError.CRAFTED;
    } else if (!affixSpace) {
      return craftOption.mod.generationType === GenerationType.PREFIX
        ? CraftingError.PREFIX
        : CraftingError.SUFFIX;
    }
    let result = !match;
    return result ? CraftingError.NONE : CraftingError.GROUP;
  } else if (craftOption.customAction) {
    if (craftOption.customAction.removeMod) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      if (!correctType) {
        return CraftingError.BASE;
      }
      let result = item.crafted;
      return result ? CraftingError.NONE : CraftingError.NOTCRAFTED;
    } else if (craftOption.customAction.colors) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      if (!correctType) {
        return CraftingError.BASE;
      }
      let result = craftOption.customAction.colors.length <= item.sockets;
      return result ? CraftingError.NONE : CraftingError.NUMSOCKETS;
    } else if (craftOption.customAction.links) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      if (!correctType) {
        return CraftingError.BASE;
      }
      if (
        craftOption.customAction.links === 5 &&
        item.socketLinks.indexOf('LLLL') >= 0 &&
        item.socketLinks !== 'LLLLL'
      ) {
        return CraftingError.LINKS;
      } else if (
        craftOption.customAction.links === 6 &&
        item.socketLinks.indexOf('LLLLL') >= 0
      ) {
        return CraftingError.LINKS;
      }

      let result = craftOption.customAction.links <= item.sockets;
      if (result) {
        return CraftingError.NONE;
      } else {
        return CraftingError.NUMSOCKETS;
      }
    } else if (craftOption.customAction.sockets) {
      let correctType =
        craftOption.itemTypes.length === 0 ||
        _.includes(craftOption.itemTypes, item.type);
      if (!correctType) {
        return CraftingError.BASE;
      }
      let result1 = craftOption.customAction.sockets <= item.maxSockets;
      let result2 = item.sockets !== craftOption.customAction.sockets;
      if (result1 && result2) {
        return CraftingError.NONE;
      } else if (!result1) {
        return item.maxSockets === CraftingError.NONE
          ? CraftingError.NOSOCKETS
          : CraftingError.MAXSOCKETS;
      } else if (!result2) {
        return CraftingError.SOCKETS;
      }
    }
  }
  return -1;
}
