import Item from './item';

export function chaos(item: Item): Item {
  item = new Item(item);
  item.mods = [];
  for (let i = 0; i < 6; i++) {
    item.addMod();
  }
  return item;
}