import Item, { Rarity } from './item';
import { randomRange } from './random';

export function whetstone(item: Item): Item {
  if (item.quality < 20 && item.category.includes('Weapon')) {
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
  return item;
}

export function armorScrap(item: Item): Item {
  if (item.quality < 20 && (item.category.includes('Armor') || item.type.includes('Shield'))) {
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
  return item;
}

export function transmute(item: Item): Item {
  if (item.rarity === Rarity.NORMAL) {
    item = new Item(item);
    item.rarity = Rarity.MAGIC;
    item.updateModPool();
    item.addMod(item.getMod());
    if (Math.random() < 0.5) {
      item.addMod(item.getMod());
    }
  }
  return item;
}

export function alteration(item: Item): Item {
  if (item.rarity === Rarity.MAGIC) {
    item = new Item(item);
    item.reset();
    item.addMod(item.getMod());
    if (Math.random() < 0.5) {
      item.addMod(item.getMod());
    }
  }
  return item;
}

export function annulment(item: Item): Item {
  if (item.mods.length > 0) {
    item = new Item(item);
    item.removeMod(item.mods[randomRange(0, item.mods.length)]);
  }
  return item;
}

export function exalted(item: Item): Item {
  if (item.rarity === Rarity.RARE) {
    let maxCount = 6;
    if (item.type === 'Jewel') {
      maxCount = 4;
    }
    if (item.mods.length < maxCount) {
      item = new Item(item);
      item.addMod(item.getMod());
    }
  }
  return item;
}

export function regal(item: Item): Item {
  if (item.rarity === Rarity.MAGIC) {
    item = new Item(item);
    item.rarity = Rarity.RARE;
    item.itemName = item.generateName();
    item.updateModPool();
    item.addMod(item.getMod());
  }
  return item;
}

export function alchemy(item: Item): Item {
  if (item.rarity === Rarity.NORMAL) {
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
  return item;
}

export function chaos(item: Item): Item {
  if (item.rarity === Rarity.RARE) {
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
  return item;
}

export function blessed(item: Item): Item {
  if (item.implicit !== null) {
    item = new Item(item);
    item.rerollImplicit();
  }
  return item;
}

export function augment(item: Item): Item {
  if (item.rarity === Rarity.MAGIC && item.mods.length < 2) {
    item = new Item(item);
    item.addMod(item.getMod());
  }
  return item;
}

export function divine(item: Item): Item {
  if (item.mods.length > 0) {
    item = new Item(item);
    item.reroll();
  }
  return item;
}

export function jeweller(item: Item): Item {
  return item;
}

export function fusing(item: Item): Item {
  return item;
}

export function chromatic(item: Item): Item {
  return item;
}

export function scouring(item: Item): Item {
  if (item.rarity !== Rarity.NORMAL) {
    item = new Item(item);
    item.rarity = Rarity.NORMAL;
    item.reset();
  }
  return item;
}

export function eternal(item: Item): Item {
  return item;
}

export function imprint(item: Item): Item {
  return item;
}