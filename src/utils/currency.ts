import Item, { Rarity } from './item';
import { randomRange } from './random';

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
  return { item: item, result: result };
}

export function fusing(item: Item): { item: Item; result: boolean } {
  let result = false;
  return { item: item, result: result };
}

export function chromatic(item: Item): { item: Item; result: boolean } {
  let result = false;
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
