import { Action } from '../actions';
import Item from '../utils/item';
import * as basesJSON from '../data/bases.json';
import * as currency from '../utils/currency';

export interface ItemState {
  currentItem: Item;
  imprint?: Item;
}

const initialState = { currentItem: new Item(basesJSON[333]) };

export default (state: ItemState = initialState, action: Action) => {
  switch (action.type) {
    case 'WHETSTONE':
      return { ...state, currentItem: currency.whetstone(state.currentItem) };
    case 'ARMORSCRAP':
      return { ...state, currentItem: currency.armorScrap(state.currentItem) };
    case 'TRANSMUTE':
      return { ...state, currentItem: currency.transmute(state.currentItem) };
    case 'ALTERATION':
      return { ...state, currentItem: currency.alteration(state.currentItem) };
    case 'ANNULMENT':
      return { ...state, currentItem: currency.annulment(state.currentItem) };
    case 'EXALTED':
      return { ...state, currentItem: currency.exalted(state.currentItem) };
    case 'REGAL':
      return { ...state, currentItem: currency.regal(state.currentItem) };
    case 'ALCHEMY':
      return { ...state, currentItem: currency.alchemy(state.currentItem) };
    case 'CHAOS':
      return { ...state, currentItem: currency.chaos(state.currentItem) };
    case 'BLESSED':
      return { ...state, currentItem: currency.blessed(state.currentItem) };
    case 'AUGMENT':
      return { ...state, currentItem: currency.augment(state.currentItem) };
    case 'DIVINE':
      return { ...state, currentItem: currency.divine(state.currentItem) };
    case 'JEWELLER':
      return { ...state, currentItem: currency.jeweller(state.currentItem) };
    case 'FUSING':
      return { ...state, currentItem: currency.fusing(state.currentItem) };
    case 'CHROMATIC':
      return { ...state, currentItem: currency.chromatic(state.currentItem) };
    case 'SCOURING':
      return { ...state, currentItem: currency.scouring(state.currentItem) };
    case 'ETERNAL':
      return { ...state, imprint: currency.eternal(state.currentItem) };
    case 'IMPRINT':
      return { ...state, currentItem: currency.imprint(state.currentItem, state.imprint), imprint: undefined };
    default:
      return state;
  }
};
