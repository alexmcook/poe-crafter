import * as _ from 'lodash';
import { Action } from '../actions';
import Item from '../utils/item';
import Base from '../utils/base';
import * as currency from '../utils/currency';
const bases: Base[] = require('../data/bases.json');

export interface ItemState {
  currentItem: Item;
  imprint?: Item;
  baseList: Base[];
  currencyCount: { [key: string]: number };
  selectedCurrency?: string;
}

const initialState = {
  currentItem: new Item(bases[333]),
  baseList: bases,
  currencyCount: {
    whetstone: 0,
    armorScrap: 0,
    transmute: 0,
    alteration: 0,
    annulment: 0,
    exalted: 0,
    regal: 0,
    alchemy: 0,
    chaos: 0,
    blessed: 0,
    augment: 0,
    divine: 0,
    jeweller: 0,
    scouring: 0,
    fusing: 0,
    chromatic: 0,
    eternal: 0,
    imprint: 0
  }
};

export default (state: ItemState = initialState, action: Action) => {
  switch (action.type) {
    case 'SELECT_BASE':
      return {
        ...state,
        currentItem: new Item(<Base> _.find(bases, base => {
          return base.id === action.payload;
        })),
        imprint: undefined
      };
    case 'MOUSE_LEAVE':
      return { ...state, selectedCurrency: action.payload ? state.selectedCurrency : undefined };
    case 'ORB_CLICK': {
      return {
        ...state,
        selectedCurrency: action.payload === state.selectedCurrency ? undefined : action.payload
      };
    }
    case 'ITEM_CLICK': {
      let orb: { item: Item; result: boolean };
      switch (state.selectedCurrency) {
        case 'WHETSTONE':
          orb = currency.whetstone(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              whetstone: state.currencyCount.whetstone + (orb.result ? 1 : 0)
            }
          };
        case 'ARMORSCRAP':
          orb = currency.armorScrap(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              armorScrap: state.currencyCount.armorScrap + (orb.result ? 1 : 0)
            }
          };
        case 'TRANSMUTE':
          orb = currency.transmute(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              transmute: state.currencyCount.transmute + (orb.result ? 1 : 0)
            }
          };
        case 'ALTERATION':
          orb = currency.alteration(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              alteration: state.currencyCount.alteration + (orb.result ? 1 : 0)
            }
          };
        case 'ANNULMENT':
          orb = currency.annulment(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              annulment: state.currencyCount.annulment + (orb.result ? 1 : 0)
            }
          };
        case 'EXALTED':
          orb = currency.exalted(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              exalted: state.currencyCount.exalted + (orb.result ? 1 : 0)
            }
          };
        case 'REGAL':
          orb = currency.regal(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              regal: state.currencyCount.regal + (orb.result ? 1 : 0)
            }
          };
        case 'ALCHEMY':
          orb = currency.alchemy(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              alchemy: state.currencyCount.alchemy + (orb.result ? 1 : 0)
            }
          };
        case 'CHAOS':
          orb = currency.chaos(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              chaos: state.currencyCount.chaos + (orb.result ? 1 : 0)
            }
          };
        case 'BLESSED':
          orb = currency.blessed(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              blessed: state.currencyCount.blessed + (orb.result ? 1 : 0)
            }
          };
        case 'AUGMENT':
          orb = currency.augment(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              augment: state.currencyCount.augment + (orb.result ? 1 : 0)
            }
          };
        case 'DIVINE':
          orb = currency.divine(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              divine: state.currencyCount.divine + (orb.result ? 1 : 0)
            }
          };
        case 'JEWELLER':
          orb = currency.jeweller(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              jeweller: state.currencyCount.jeweller + (orb.result ? 1 : 0)
            }
          };
        case 'FUSING':
          orb = currency.fusing(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              fusing: state.currencyCount.fusing + (orb.result ? 1 : 0)
            }
          };
        case 'CHROMATIC':
          orb = currency.chromatic(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              chromatic: state.currencyCount.chromatic + (orb.result ? 1 : 0)
            }
          };
        case 'SCOURING':
          orb = currency.scouring(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            currencyCount: {
              ...state.currencyCount,
              scouring: state.currencyCount.scouring + (orb.result ? 1 : 0)
            }
          };
        case 'ETERNAL':
          orb = currency.eternal(state.currentItem);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            imprint: orb.item,
            currencyCount: {
              ...state.currencyCount,
              eternal: state.currencyCount.eternal + (orb.result ? 1 : 0)
            }
          };
        case 'IMPRINT':
          orb = currency.imprint(state.currentItem, state.imprint);
          return {
            ...state,
            selectedCurrency: action.payload ? state.selectedCurrency : undefined,
            currentItem: orb.item,
            imprint: undefined,
            currencyCount: {
              ...state.currencyCount,
              imprint: state.currencyCount.imprint + (orb.result ? 1 : 0)
            }
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
