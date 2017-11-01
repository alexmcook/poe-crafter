import Item from './item';

export function chaos(item: Item): Item {
  item = new Item(item);
  item.reset();
  for (let i = 0; i < 6; i++) {
    item.addMod(item.getMod());
  }
  return item;
}