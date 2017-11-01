import { Action } from '../actions';
import Item from '../utils/item';
import * as basesJSON from '../data/bases.json';
import { chaos } from '../utils/currency';

export interface ItemState {
  item: Item;
}

const initialState = new Item(basesJSON[333]);

export default (state: Item = initialState, action: Action) => {
  switch (action.type) {
    case 'CHAOS':
      return new Item(chaos(state));
    case 'REMOVE':
      return new Item(state.removeMod());
    default:
      return state;
  }
};