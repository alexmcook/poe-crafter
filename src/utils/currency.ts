import Item, { Rarity } from './item';
import Mod, { GenerationType } from './mod';
import { randomRange } from './random';
import { filterPrefix, filterSuffix } from './itemFunctions';
import * as _ from 'lodash';
const essences: Essence[] = require('../data/essences.json');

interface Essence {
  id: string;
  minTier: number;
  name: string;
  amulet: Mod;
  belt: Mod;
  ring: Mod;
  quiver: Mod;
  body: Mod;
  boots: Mod;
  gloves: Mod;
  helmet: Mod;
  shield: Mod;
  oneHand: Mod;
  twoHand: Mod;
  bow: Mod;
  wand: Mod;
}

//#region regular currency
export function whetstone(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (
    item.quality < 20 &&
    item.category.includes('Weapon') &&
    !item.corrupted
  ) {
    result = true;
    item = new Item(item);
    if (item.rarity === Rarity.NORMAL) {
      item.quality += 5;
    } else if (item.rarity === Rarity.MAGIC) {
      item.quality += 2;
    } else if (item.rarity === Rarity.RARE) {
      item.quality += 1;
    }
    if (item.quality > 20) {
      item.quality = 20;
    }
  }
  return { item: item, result: result };
}

export function armorScrap(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (
    item.quality < 20 &&
    (item.category.includes('Armor') || item.type.includes('Shield')) &&
    !item.corrupted
  ) {
    result = true;
    item = new Item(item);
    if (item.rarity === Rarity.NORMAL) {
      item.quality += 5;
    } else if (item.rarity === Rarity.MAGIC) {
      item.quality += 2;
    } else if (item.rarity === Rarity.RARE) {
      item.quality += 1;
    }
    if (item.quality > 20) {
      item.quality = 20;
    }
  }
  return { item: item, result: result };
}

export function transmute(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.NORMAL && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rarity = Rarity.MAGIC;
    item.updateModPool();
    item.addMod(item.getMod());
    if (Math.random() < 0.5) {
      item.addMod(item.getMod());
    }
  }
  return { item: item, result: result };
}

export function alteration(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.MAGIC && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.reset();
    item.addMod(item.getMod());
    if (Math.random() < 0.5) {
      item.addMod(item.getMod());
    }
  }
  return { item: item, result: result };
}

export function annulment(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.mods.length > 0 && !item.corrupted) {
    result = true;
    item = new Item(item);
    if (item.prefixesLocked && item.suffixesLocked) {
      item = item;
    } else if (item.prefixesLocked) {
      let suffixes = filterPrefix(item.mods);
      item.removeMod(suffixes[randomRange(0, suffixes.length)]);
    } else if (item.suffixesLocked) {
      let prefixes = filterSuffix(item.mods);
      item.removeMod(prefixes[randomRange(0, prefixes.length)]);
    } else {
      item.removeMod(item.mods[randomRange(0, item.mods.length)]);
    }
  }
  return { item: item, result: result };
}

export function exalted(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.RARE && !item.corrupted) {
    let maxCount = 6;
    if (item.type === 'Jewel') {
      maxCount = 4;
    }
    if (item.mods.length < maxCount) {
      result = true;
      item = new Item(item);
      item.addMod(item.getMod());
    }
  }
  return { item: item, result: result };
}

export function regal(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.MAGIC && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rarity = Rarity.RARE;
    item.itemName = item.generateName();
    item.updateModPool();
    item.addMod(item.getMod());
  }
  return { item: item, result: result };
}

export function alchemy(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.NORMAL && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rarity = Rarity.RARE;
    item.itemName = item.generateName();
    item.updateModPool();
    if (item.type === 'Jewel') {
      for (let i = 0; i < 3; i++) {
        item.addMod(item.getMod());
      }
      if (Math.random() < 0.5) {
        item.addMod(item.getMod());
      }
    } else {
      for (let i = 0; i < 4; i++) {
        item.addMod(item.getMod());
      }
      if (Math.random() < 0.5) {
        item.addMod(item.getMod());
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
        }
      }
    }
  }
  return { item: item, result: result };
}

export function chaos(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.RARE && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.itemName = item.generateName();
    if (item.prefixesLocked && item.suffixesLocked) {
      item = item;
    } else if (item.prefixesLocked) {
      let suffixes = filterPrefix(item.mods);
      _.each(suffixes, mod => {
        item.removeMod(mod);
      });
      if (item.type === 'Jewel') {
        for (let i = item.mods.length; i < 3; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
        }
      } else {
        for (let i = item.mods.length; i < 4; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
          if (Math.random() < 0.5) {
            item.addMod(item.getMod());
          }
        }
      }
    } else if (item.suffixesLocked) {
      let prefixes = filterSuffix(item.mods);
      _.each(prefixes, mod => {
        item.removeMod(mod);
      });
      if (item.type === 'Jewel') {
        for (let i = item.mods.length; i < 3; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
        }
      } else {
        for (let i = item.mods.length; i < 4; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
          if (Math.random() < 0.5) {
            item.addMod(item.getMod());
          }
        }
      }
    } else {
      item.reset();
      if (item.type === 'Jewel') {
        for (let i = 0; i < 3; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
        }
      } else {
        for (let i = 0; i < 4; i++) {
          item.addMod(item.getMod());
        }
        if (Math.random() < 0.5) {
          item.addMod(item.getMod());
          if (Math.random() < 0.5) {
            item.addMod(item.getMod());
          }
        }
      }
    }
  }
  return { item: item, result: result };
}

export function blessed(item: Item): { item: Item; result: boolean } {
  let result = false;
  let implicitRange = () => {
    if (item.implicit) {
      return _.some(item.implicit.stats, stat => {
        return stat.valueMin !== stat.valueMax;
      });
    } else {
      return false;
    }
  };
  if (item.implicit && implicitRange() && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rerollImplicit();
  }
  return { item: item, result: result };
}

export function augment(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.MAGIC && item.mods.length < 2 && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.addMod(item.getMod());
  }
  return { item: item, result: result };
}

export function divine(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.mods.length > 0 && !item.corrupted) {
    result = true;
    item = new Item(item);
    if (item.prefixesLocked) {
      item.reroll(GenerationType.SUFFIX);
    } else if (item.suffixesLocked) {
      item.reroll(GenerationType.PREFIX);
    } else {
      item.reroll();
    }
  }
  return { item: item, result: result };
}

export function jeweller(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.sockets < item.maxSockets && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rerollSockets();
  }
  return { item: item, result: result };
}

export function fusing(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.socketLinks.indexOf('X') > -1 && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rerollSocketLinks();
  }
  return { item: item, result: result };
}

export function chromatic(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.sockets > 0 && !item.corrupted) {
    result = true;
    item = new Item(item);
    item.rerollSocketColors();
  }
  return { item: item, result: result };
}

export function scouring(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity !== Rarity.NORMAL && !item.corrupted) {
    result = true;
    item = new Item(item);
    if (item.prefixesLocked && item.suffixesLocked) {
      item = item;
    } else if (item.prefixesLocked) {
      let suffixes = filterPrefix(item.mods);
      _.each(suffixes, mod => {
        item.removeMod(mod);
      });
    } else if (item.suffixesLocked) {
      let prefixes = filterSuffix(item.mods);
      _.each(prefixes, mod => {
        item.removeMod(mod);
      });
    } else {
      item.rarity = Rarity.NORMAL;
      item.reset();
    }
  }
  return { item: item, result: result };
}

export function vaal(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (!item.corrupted) {
    result = true;
    item = new Item(item);
    item.corrupted = true;
    if (item.maxSockets === 0) {
      let rnd = Math.random();
      if (rnd < 0.33) {
        item.corruptImplicit();
      } else if (rnd < 0.66) {
        item.reset();
        item.rarity = Rarity.RARE;
        item.itemName = item.generateName();
        if (item.type === 'Jewel') {
          for (let i = 0; i < 4; i++) {
            item.addMod(item.getMod());
          }
        } else {
          for (let i = 0; i < 6; i++) {
            item.addMod(item.getMod());
          }
        }
      } else {
        item = item;
      }
    } else {
      let rnd = Math.random();
      if (rnd < 0.25) {
        item.corruptImplicit();
      } else if (rnd < 0.5) {
        let count = 1;
        for (let i = 1; i < item.socketColors.length; i++) {
          let rndColor = Math.random();
          if (rndColor < 0.1) {
            count++;
          }
        }
        for (let i = 0; i < count; i++) {
          let rndSocket = randomRange(0, item.socketColors.length);
          while (item.socketColors[rndSocket] === 'W') {
            rndSocket = randomRange(0, item.socketColors.length);
          }
          item.socketColors =
            item.socketColors.substr(0, rndSocket) +
            'W' +
            item.socketColors.substr(rndSocket + 1, item.socketColors.length);
        }
      } else if (rnd < 0.75) {
        item.reset();
        item.rarity = Rarity.RARE;
        item.itemName = item.generateName();
        if (item.type === 'Jewel') {
          for (let i = 0; i < 4; i++) {
            item.addMod(item.getMod());
          }
        } else {
          for (let i = 0; i < 6; i++) {
            item.addMod(item.getMod());
          }
        }
        item.rerollSockets();
        let rndMaxLink = Math.random();
        if (rndMaxLink < 1 / 36) {
          let colors = ['R', 'G', 'B'];
          item.sockets = item.maxSockets;
          item.socketLinks = '';
          for (let i = 0; i < item.sockets - 1; i++) {
            item.socketLinks += 'L';
          }
          item.socketColors = '';
          for (let i = 0; i < item.sockets; i++) {
            item.socketColors += colors[randomRange(0, 3)];
          }
        }
      } else {
        item = item;
      }
    }
  }
  return { item: item, result: result };
}

export function eternal(item: Item): { item: Item; result: boolean } {
  if (!item.corrupted) {
    return { item: item, result: true };
  } else {
    return { item: item, result: false };
  }
}

export function imprint(
  item: Item,
  itemImprint?: Item
): { item: Item; result: boolean } {
  let result = false;
  if (itemImprint && !item.corrupted) {
    result = true;
    item = itemImprint;
  }
  return { item: item, result: result };
}
//#endregion
//#region essences
export function essence(
  item: Item,
  name: string,
  tier: number
): { item: Item; result: boolean } {
  let result = false;
  if (
    (item.rarity === Rarity.NORMAL ||
      (tier > 5 && item.rarity === Rarity.RARE)) &&
    item.type !== 'Jewel'
  ) {
    result = true;
    item = new Item(item);
    let itemLevel = item.itemLevel;
    switch (tier) {
      case 1:
        item.itemLevel = 35;
        break;
      case 2:
        item.itemLevel = 45;
        break;
      case 3:
        item.itemLevel = 60;
        break;
      case 4:
        item.itemLevel = 75;
        break;
      default:
        break;
    }
    item.rarity = Rarity.RARE;
    item.itemName = item.generateName();
    item.reset();
    item.updateModPool();

    let match = _.find(essences, ess => {
      return ess.id.includes(name + (tier - ess.minTier + 1));
    });
    if (!match) {
      throw new Error('No essence found: ' + name + tier);
    }

    switch (item.type) {
      case 'Amulet':
        item.addMod(match.amulet);
        break;
      case 'Belt':
        item.addMod(match.belt);
        break;
      case 'Ring':
        item.addMod(match.ring);
        break;
      case 'Quiver':
        item.addMod(match.quiver);
        break;
      case 'Body Armour':
        item.addMod(match.body);
        break;
      case 'Boots':
        item.addMod(match.boots);
        break;
      case 'Gloves':
        item.addMod(match.gloves);
        break;
      case 'Helmet':
        item.addMod(match.helmet);
        break;
      case 'Shield':
        item.addMod(match.shield);
        break;
      case 'Bow':
        item.addMod(match.bow);
        break;
      case 'Wand':
        item.addMod(match.wand);
        break;
      default:
        if (item.category === 'One Handed Weapon') {
          item.addMod(match.oneHand);
        } else if (item.category === 'Two Handed Weapon') {
          item.addMod(match.twoHand);
        } else {
          throw new Error('Type not found for: ' + item.type);
        }
    }

    for (let i = 0; i < 3; i++) {
      item.addMod(item.getMod());
    }
    if (Math.random() < 0.5) {
      item.addMod(item.getMod());
      if (Math.random() < 0.5) {
        item.addMod(item.getMod());
      }
    }
    item.itemLevel = itemLevel;
  }
  return { item: item, result: result };
}
//#endregion
