import { Action, CraftScrollAction, DefaultAction } from '../actions';
import Mod from '../utils/mod';
import * as _ from 'lodash';
const craftingOptions: CraftingOption[] = require('../data/craftingOptions.json');

enum Master {
  VORICI = 0,
  TORA = 1,
  CATARINA = 2,
  ZANA = 3,
  VAGAN = 4,
  ELREON = 5,
  HAKU = 6,
  LEO = 7
}

const masterOptions = {
  haku: _.filter(craftingOptions, option => {
    return option.master === Master.HAKU;
  }),
  elreon: _.filter(craftingOptions, option => {
    return option.master === Master.ELREON;
  }),
  catarina: _.filter(craftingOptions, option => {
    return option.master === Master.CATARINA;
  }),
  vagan: _.filter(craftingOptions, option => {
    return option.master === Master.VAGAN;
  }),
  tora: _.filter(craftingOptions, option => {
    return option.master === Master.TORA;
  }),
  leo: _.filter(craftingOptions, option => {
    return option.master === Master.LEO;
  }),
  vorici: _.filter(craftingOptions, option => {
    return option.master === Master.VORICI;
  })
};

export interface CustomAction {
  removeMod: boolean;
  sockets: number;
  colors: string;
  links: number;
}

export interface CraftingOption {
  name: string;
  text: string;
  order: number;
  mod: Mod;
  costItem: string;
  costValue: number;
  master: number;
  masterLevel: number;
  itemTypes: string[];
  customAction: CustomAction;
}

export interface CraftingOptionsState {
  currentMaster: string;
  options: CraftingOption[];
  optionsSlice: CraftingOption[];
  scrollerPos: number;
  optionsPos: number;
}

const initialState = {
  currentMaster: 'haku',
  options: masterOptions.haku,
  optionsSlice: masterOptions.haku.slice(0, 5),
  scrollerPos: 0,
  optionsPos: 0
};

export default (state: CraftingOptionsState = initialState, action: Action) => {
  switch (action.type) {
    case 'MASTER_CLICK':
      let masterAction = action as DefaultAction;
      return {
        ...state,
        currentMaster: action.payload,
        options: masterOptions[masterAction.payload],
        optionsSlice: masterOptions[masterAction.payload].slice(0, 5),
        scrollerPos: 0,
        optionsPos: 0
      };
    case 'SCROLL':
      let scrollAction = action as CraftScrollAction;
      return {
        ...state,
        optionsSlice: state.options.slice(
          scrollAction.payload.optionsPos,
          scrollAction.payload.optionsPos + 5
        ),
        scrollerPos: scrollAction.payload.scrollerPos,
        optionsPos: scrollAction.payload.optionsPos
      };
    default:
      return state;
  }
};
