import Item, { Rarity } from './item';
import Mod from './mod';
import { randomRange } from './random';
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
  if (item.quality < 20 && item.category.includes('Weapon')) {
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
    (item.category.includes('Armor') || item.type.includes('Shield'))
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
  if (item.rarity === Rarity.NORMAL) {
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
  if (item.rarity === Rarity.MAGIC) {
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
  if (item.mods.length > 0) {
    result = true;
    item = new Item(item);
    item.removeMod(item.mods[randomRange(0, item.mods.length)]);
  }
  return { item: item, result: result };
}

export function exalted(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.RARE) {
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
  if (item.rarity === Rarity.MAGIC) {
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
  if (item.rarity === Rarity.NORMAL) {
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
  if (item.rarity === Rarity.RARE) {
    result = true;
    item = new Item(item);
    item.itemName = item.generateName();
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
  return { item: item, result: result };
}

export function blessed(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.implicit !== null) {
    result = true;
    item = new Item(item);
    item.rerollImplicit();
  }
  return { item: item, result: result };
}

export function augment(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity === Rarity.MAGIC && item.mods.length < 2) {
    result = true;
    item = new Item(item);
    item.addMod(item.getMod());
  }
  return { item: item, result: result };
}

export function divine(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.mods.length > 0) {
    result = true;
    item = new Item(item);
    item.reroll();
  }
  return { item: item, result: result };
}

export function jeweller(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.sockets < item.maxSockets) {
    result = true;
    item = new Item(item);
    item.rerollSockets();
  }
  return { item: item, result: result };
}

export function fusing(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.socketLinks.indexOf('X') > -1) {
    result = true;
    item = new Item(item);
    item.rerollSocketLinks();
  }
  return { item: item, result: result };
}

export function chromatic(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.sockets > 0) {
    result = true;
    item = new Item(item);
    item.rerollSocketColors();
  }
  return { item: item, result: result };
}

export function scouring(item: Item): { item: Item; result: boolean } {
  let result = false;
  if (item.rarity !== Rarity.NORMAL) {
    result = true;
    item = new Item(item);
    item.rarity = Rarity.NORMAL;
    item.reset();
  }
  return { item: item, result: result };
}

export function eternal(item: Item): { item: Item; result: boolean } {
  return { item: item, result: true };
}

export function imprint(
  item: Item,
  itemImprint?: Item
): { item: Item; result: boolean } {
  let result = false;
  if (itemImprint) {
    result = true;
    item = itemImprint;
  }
  return { item: item, result: result };
}
//#endregion
//#region essences
export function essence(item: Item, name: string, tier: number): { item: Item; result: boolean } {
  let result = false;
  if ((item.rarity === Rarity.NORMAL || tier > 5 && item.rarity === Rarity.RARE) && item.type !== 'Jewel') {
    result = true;
    item = new Item(item);
    item.rarity = Rarity.RARE;
    item.itemName = item.generateName();
    item.reset();
    item.updateModPool();

    let match = _.find(essences, ess => {
      console.log(name + (tier - ess.minTier + 1));
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
  }
  return { item: item, result: result };
}
//#endregion
