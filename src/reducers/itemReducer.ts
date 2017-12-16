import * as _ from 'lodash';
import { Action, NumberAction, EssenceAction, OptionAction } from '../actions';
import Item, { Rarity } from '../utils/item';
import Mod from '../utils/mod';
import { checkAvailability } from '../utils/itemFunctions';
import Base from '../utils/base';
import { CraftingOption } from '../reducers/craftingOptionReducer';
import * as currency from '../utils/currency';
import * as master from '../utils/master';
import { randomRange } from '../utils/random';
import { toTitleCase } from '../utils/utility';
const bases: Base[] = require('../data/bases.json');

const none = { name: 'none', tier: 0 };

function findBase(id: string): Base {
  let match = _.find(bases, base => {
    return base.id === id;
  });
  if (!match) {
    throw new Error('No base found for ' + id);
  } else {
    return match;
  }
}

export interface ItemState {
  currentItem: Item;
  imprint?: Item;
  baseList: Base[];
  currencyCount: { [key: string]: number };
  essenceCount: { [key: string]: { [key: number]: number } };
  selectedCurrency: { name: string; tier: number };
  selectedOption?: CraftingOption;
  prevState?: ItemState;
  forceShift: boolean;
}

const initialState = {
  currentItem: new Item(bases[randomRange(0, bases.length)]),
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
    vaal: 0,
    fusing: 0,
    chromatic: 0,
    eternal: 0,
    imprint: 0
  },
  essenceCount: {
    greed: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    contempt: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    hatred: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    woe: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    fear: { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    anger: { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    torment: { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    sorrow: { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    rage: { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    suffering: { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    wrath: { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    doubt: { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
    loathing: { 4: 0, 5: 0, 6: 0, 7: 0 },
    zeal: { 4: 0, 5: 0, 6: 0, 7: 0 },
    anguish: { 4: 0, 5: 0, 6: 0, 7: 0 },
    spite: { 4: 0, 5: 0, 6: 0, 7: 0 },
    scorn: { 5: 0, 6: 0, 7: 0 },
    envy: { 5: 0, 6: 0, 7: 0 },
    misery: { 5: 0, 6: 0, 7: 0 },
    dread: { 5: 0, 6: 0, 7: 0 },
    insanity: { 8: 0 },
    horror: { 8: 0 },
    delirium: { 8: 0 },
    hysteria: { 8: 0 }
  },
  selectedCurrency: none,
  selectedOption: undefined,
  prevState: undefined,
  forceShift: false
};

const essenceNames: string[] = [
  'GREED',
  'CONTEMPT',
  'HATRED',
  'WOE',
  'FEAR',
  'ANGER',
  'TORMENT',
  'SORROW',
  'RAGE',
  'SUFFERING',
  'WRATH',
  'DOUBT',
  'LOATHING',
  'ZEAL',
  'ANGUISH',
  'SPITE',
  'SCORN',
  'ENVY',
  'MISERY',
  'DREAD',
  'INSANITY',
  'HORROR',
  'HYSTERIA',
  'DELIRIUM',
  'HYSTERIA'
];

export default (state: ItemState = initialState, action: Action) => {
  switch (action.type) {
    case 'SELECT_BASE':
      return {
        ...state,
        prevState: state,
        currentItem: new Item(findBase(<string> action.payload)),
        imprint: undefined
      };
    case 'MOUSE_LEAVE':
      return {
        ...state,
        selectedCurrency: action.payload ? none : { ...state.selectedCurrency }
      };
    case 'ORB_CLICK':
      if (action.payload === 'REGRET') {
        let nextState = state;
        if (state.prevState) {
          nextState = {
            ...state.prevState,
            selectedCurrency: none,
            selectedOption: undefined
          };
        }
        return nextState;
      } else {
        return {
          ...state,
          selectedCurrency:
            action.payload === state.selectedCurrency.name
              ? none
              : { ...state.selectedCurrency, name: action.payload }
        };
      }
    case 'ESSENCE_CLICK':
      action = action as EssenceAction;
      return {
        ...state,
        selectedCurrency:
          action.payload.essence === state.selectedCurrency.name &&
          action.payload.tier === state.selectedCurrency.tier
            ? none
            : { name: action.payload.essence, tier: action.payload.tier }
      };
    case 'ITEM_CLICK':
      let orb: { item: Item; result: boolean };
      if (essenceNames.indexOf(state.selectedCurrency.name) >= 0) {
        orb = currency.essence(
          state.currentItem,
          toTitleCase(state.selectedCurrency.name),
          state.selectedCurrency.tier
        );
        let nextState = {
          ...state,
          prevState: orb.result ? state : state.prevState,
          selectedCurrency:
            action.payload || state.forceShift
              ? {
                  name: state.selectedCurrency.name,
                  tier: state.selectedCurrency.tier
                }
              : none,
          essenceCount: { ...state.essenceCount },
          currentItem: orb.item
        };
        let essence = state.selectedCurrency.name.toLowerCase();
        nextState.essenceCount[essence][
          state.selectedCurrency.tier
        ] += orb.result ? 1 : 0;
        return nextState;
      } else {
        switch (state.selectedCurrency.name) {
          //#region regular currency
          case 'WHETSTONE':
            orb = currency.whetstone(state.currentItem);
            return {
              ...state,
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
              currentItem: orb.item,
              currencyCount: {
                ...state.currencyCount,
                armorScrap:
                  state.currencyCount.armorScrap + (orb.result ? 1 : 0)
              }
            };
          case 'TRANSMUTE':
            orb = currency.transmute(state.currentItem);
            return {
              ...state,
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
              currentItem: orb.item,
              currencyCount: {
                ...state.currencyCount,
                alteration:
                  state.currencyCount.alteration + (orb.result ? 1 : 0)
              }
            };
          case 'ANNULMENT':
            orb = currency.annulment(state.currentItem);
            return {
              ...state,
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
              currentItem: orb.item,
              currencyCount: {
                ...state.currencyCount,
                scouring: state.currencyCount.scouring + (orb.result ? 1 : 0)
              }
            };
          case 'VAAL':
            orb = currency.vaal(state.currentItem);
            return {
              ...state,
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
              currentItem: orb.item,
              currencyCount: {
                ...state.currencyCount,
                vaal: state.currencyCount.vaal + (orb.result ? 1 : 0)
              }
            };
          case 'ETERNAL':
            orb = currency.eternal(state.currentItem);
            return {
              ...state,
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
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
              prevState: orb.result ? state : state.prevState,
              selectedCurrency:
                action.payload || state.forceShift
                  ? {
                      name: state.selectedCurrency.name,
                      tier: state.selectedCurrency.tier
                    }
                  : none,
              currentItem: orb.item,
              imprint: undefined,
              currencyCount: {
                ...state.currencyCount,
                imprint: state.currencyCount.imprint + (orb.result ? 1 : 0)
              }
            };
          //#endregion
          default:
            return state;
        }
      }
    case 'CRAFT_CLICK':
      let craft: { item: Item; result: boolean };
      let option = action.payload as CraftingOption;
      craft = master.craftItem(state.currentItem, option);
      let count = { ...state.currencyCount };
      if (craft.result) {
        switch (option.costItem) {
          //#region regular currency
          case 'Orb of Transmutation':
            count = {
              ...state.currencyCount,
              transmute: state.currencyCount.transmute + option.costValue
            };
            break;
          case 'Orb of Alteration':
            count = {
              ...state.currencyCount,
              alteration: state.currencyCount.alteration + option.costValue
            };
            break;
          case 'Exalted Orb':
            count = {
              ...state.currencyCount,
              exalted: state.currencyCount.exalted + option.costValue
            };
            break;
          case 'Regal Orb':
            count = {
              ...state.currencyCount,
              regal: state.currencyCount.regal + option.costValue
            };
            break;
          case 'Orb of Alchemy':
            count = {
              ...state.currencyCount,
              alchemy: state.currencyCount.alchemy + option.costValue
            };
            break;
          case 'Chaos Orb':
            count = {
              ...state.currencyCount,
              chaos: state.currencyCount.chaos + option.costValue
            };
            break;
          case 'Blessed Orb':
            count = {
              ...state.currencyCount,
              blessed: state.currencyCount.blessed + option.costValue
            };
            break;
          case 'Orb of Augmentation':
            count = {
              ...state.currencyCount,
              augment: state.currencyCount.augment + option.costValue
            };
            break;
          case 'Divine Orb':
            count = {
              ...state.currencyCount,
              divine: state.currencyCount.divine + option.costValue
            };
            break;
          case 'Jeweller\'s Orb':
            count = {
              ...state.currencyCount,
              jeweller: state.currencyCount.jeweller + option.costValue
            };
            break;
          case 'Orb of Fusing':
            count = {
              ...state.currencyCount,
              fusing: state.currencyCount.fusing + option.costValue
            };
            break;
          case 'Chromatic Orb':
            count = {
              ...state.currencyCount,
              chromatic: state.currencyCount.chromatic + option.costValue
            };
            break;
          case 'Orb of Scouring':
            count = {
              ...state.currencyCount,
              scouring: state.currencyCount.scouring + option.costValue
            };
            break;
          case 'Vaal Orb':
            count = {
              ...state.currencyCount,
              vaal: state.currencyCount.vaal + option.costValue
            };
            break;
          //#endregion
          default:
            count = { ...state.currencyCount };
        }
      }
      return {
        ...state,
        prevState: craft.result ? state : state.prevState,
        currentItem: craft.item,
        selectedOption: undefined,
        currencyCount: count
      };
    case 'OPTION_CLICK':
      if (
        checkAvailability(
          state.currentItem,
          action.payload as CraftingOption
        ) === 0
      ) {
        return {
          ...state,
          selectedOption: action.payload
        };
      } else {
        return {
          ...state,
          selectedOption: undefined
        };
      }
    case 'MASTER_CLICK':
      return { ...state, selectedOption: undefined };
    case 'AFFIX_CLICK_REMOVE':
      let item = new Item(state.currentItem);
      let match = _.find(item.mods, (mod: Mod) => {
        return mod.id === action.payload;
      });
      if (match) {
        item.removeMod(match);
        return { ...state, prevState: state, currentItem: item };
      } else {
        return state;
      }
    case 'AFFIX_CLICK_ADD':
      item = new Item(state.currentItem);
      if (item.rarity === Rarity.NORMAL) {
        item.rarity = Rarity.MAGIC;
        match = _.find(item.modPool, (mod: Mod) => {
          return mod.id === action.payload;
        });
      } else {
        match = _.find(item.currentModPool, (mod: Mod) => {
          return mod.id === action.payload;
        });
      }
      if (match) {
        item.addMod(match);
        return { ...state, prevState: state, currentItem: item };
      } else {
        return state;
      }
    case 'KEY_UP':
      return {
        ...state,
        selectedCurrency:
          action.payload === 'Shift' ? none : state.selectedCurrency
      };
    case 'SET_LEVEL':
      action = action as NumberAction;
      if (action.payload >= 1 && action.payload <= 100) {
        item = new Item(state.currentItem);
        item.itemLevel = action.payload;
        item.updateModPool();
        return {
          ...state,
          currentItem: item
        };
      } else {
        return state;
      }
    case 'SET_FORCE_SHIFT':
      action = action as OptionAction;
      return {
        ...state,
        forceShift: action.payload
      };
    case 'RESET':
      item = new Item(findBase(state.currentItem.id));
      return {
        ...initialState,
        currentItem: item,
        forceShift: state.forceShift
      };
    case 'SET_ATLAS_TYPE':
      item = new Item(findBase(state.currentItem.id));
      item.setAtlasType(<string> action.payload);
      return {
        ...state,
        prevState: state,
        currentItem: item,
        imprint: undefined
      };
    default:
      return state;
  }
};
