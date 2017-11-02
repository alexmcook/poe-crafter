import { Action } from '../actions';
import Item from '../utils/item';
import * as basesJSON from '../data/bases.json';
import * as currency from '../utils/currency';

export interface ItemState {
  item: Item;
}

const initialState = new Item(basesJSON[333]);

export default (state: Item = initialState, action: Action) => {
  switch (action.type) {
    case 'WHETSTONE':
      return currency.whetstone(state);
    case 'ARMORSCRAP':
      return currency.armorScrap(state);
    case 'TRANSMUTE':
      return currency.transmute(state);
    case 'ALTERATION':
      return currency.alteration(state);
    case 'ANNULMENT':
      return currency.annulment(state);
    case 'EXALTED':
      return currency.exalted(state);
    case 'REGAL':
      return currency.regal(state);
    case 'ALCHEMY':
      return currency.alchemy(state);
    case 'CHAOS':
      return currency.chaos(state);
    case 'BLESSED':
      return currency.blessed(state);
    case 'AUGMENT':
      return currency.augment(state);
    case 'DIVINE':
      return currency.divine(state);
    case 'JEWELLER':
      return currency.jeweller(state);
    case 'FUSING':
      return currency.fusing(state);
    case 'CHROMATIC':
      return currency.chromatic(state);
    case 'SCOURING':
      return currency.scouring(state);
    case 'ETERNAL':
      return currency.eternal(state);
    case 'IMPRINT':
      return currency.imprint(state);
    default:
      return state;
  }
};
