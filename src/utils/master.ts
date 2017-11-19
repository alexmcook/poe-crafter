import Item from './item';
import Mod, { Domain } from './mod';
import { CraftingOption } from '../reducers/craftingOptionReducer';
import * as _ from 'lodash';

export function craftItem(item: Item, option: CraftingOption) {
  if (!option) {
    return { item: item, result: false };
  }
  if (option.mod && (!item.crafted || item.multiMod) && !item.corrupted) {
    item = new Item(item);
    item.addMod(option.mod);
    return { item: item, result: true };
  } else if (option.customAction) {
    if (option.customAction.removeMod && item.crafted) {
      item = new Item(item);
      let removeList: Mod[] = [];
      _.each(item.mods, mod => {
        if (mod.domain === Domain.MASTER) {
          removeList.push(mod);
        }
      });
      _.each(removeList, mod => {
        item.removeMod(mod);
      });
      return { item: item, result: true };
    } else if (option.customAction.colors) {
      if (option.customAction.colors.length <= item.sockets) {
        item = new Item(item);
        item.rerollSocketColors();
        item.socketColors =
          option.customAction.colors +
          item.socketColors.slice(option.customAction.colors.length);
        return { item: item, result: true };
      }
    } else if (option.customAction.links) {
      if (option.customAction.links <= item.sockets) {
        item = new Item(item);
        let newLinks = '';
        for (let i = 0; i < option.customAction.links - 1; i++) {
          newLinks += 'L';
        }
        for (let i = option.customAction.links - 1; i < item.sockets; i++) {
          newLinks += 'X';
        }
        item.socketLinks = newLinks;
        return { item: item, result: true };
      }
    } else if (option.customAction.sockets) {
      if (option.customAction.sockets <= item.maxSockets) {
        item = new Item(item);
        item.sockets = option.customAction.sockets;
        item.rerollSocketColors();
        item.rerollSocketLinks();
        return { item: item, result: true };
      }
    }
  }
  return { item: item, result: false };
}
